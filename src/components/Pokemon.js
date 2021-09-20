/** @format */

import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router';
import './Pokemon.scss';

export const Pokemon = () => {
	const params = useParams();
	const { pokemonName } = params;
	const [result, setResult] = useState([]);
	const history = useHistory();

	useEffect(() => {
		fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
			.then((response) => response.json())
			.then((data) => setResult(data));
	}, []);

	const handleReturn = () => {
		history.push('/');
	};

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
					<h4 className='pokemon-types-title'>
						{result.types?.length > 1 ? 'Types:' : 'Type:'}
					</h4>
					<section className='pokemon-types'>
						{result.types?.map((move, i) => {
							return (
								<div className='pokemon-types-type' key={i}>
									{move.type?.name}
								</div>
							);
						})}
					</section>
					<h4 className='pokemon-moves-title'>
						{result.moves?.length > 1 ? 'Moves:' : 'Move:'}
					</h4>
					<section className='pokemon-moves'>
						{result.moves?.map((move, i) => {
							return (
								<div className='pokemon-moves-type' key={i}>
									{move.move?.name}
								</div>
							);
						})}
					</section>
				</div>
			)}
			<div className='return-container'>
				<button type='button' className='return' onClick={handleReturn}>
					Return
				</button>
			</div>
		</section>
	);
};
