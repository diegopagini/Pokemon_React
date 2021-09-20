/** @format */

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import './Pokemon.scss';

export const Pokemon = () => {
	const params = useParams();
	const { pokemonName } = params;
	const [result, setResult] = useState([]);

	useEffect(() => {
		fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
			.then((response) => response.json())
			.then((data) => setResult(data));
	}, []);

	console.log(result);

	return (
		<section>
			{!result ? (
				'Loading'
			) : (
				<div className='pokemon'>
					<h3 className='pokemon-name'>{result.name}</h3>
					<img
						className='pokemon-img'
						src={result.sprites?.front_default}
						alt={result.name}
					/>
					{result.types?.map((move, i) => {
						return <div key={i}>{move.type?.name}</div>;
					})}
				</div>
			)}
		</section>
	);
};
