/** @format */

import React, { useEffect, useState } from 'react';
import { Card } from './Card';
import './Home.scss';

export const Home = () => {
	const [result, setResult] = useState([]);
	const [poke, setPoke] = useState([]);
	const [load, setLoad] = useState('true');
	const pokemonArr = [];

	useEffect(() => {
		fetch('https://pokeapi.co/api/v2/pokemon/?limit=100')
			.then((response) => response.json())
			.then((data) =>
				setResult(
					data.results.map((item) => {
						fetch(item.url)
							.then((response) => response.json())
							.then((allpokemon) => pokemonArr.push(allpokemon));
						setPoke(pokemonArr);
					})
				)
			);
	}, []);
	setTimeout(() => {
		setLoad(false);
	}, 1000);

	return (
		<main className='home'>
			<section className='home-gallery'>
				{load ? (
					<p>Loading...</p>
				) : (
					poke.map((img) => <Card key={img.id} pokemon={img} />)
				)}
			</section>
		</main>
	);
};
