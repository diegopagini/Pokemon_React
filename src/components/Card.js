/** @format */

import React from 'react';
import { Link } from 'react-router-dom';
import './Card.scss';

export const Card = ({ pokemon }) => {
	return (
		<Link
			to={`/${pokemon.name}`}
			id={pokemon.id}
			key={pokemon.id}
			className='card'
		>
			<img
				className='card-img'
				src={pokemon.sprites.front_default}
				alt={pokemon.name}
			/>
			<div>
				<h5>{pokemon.name}</h5>
			</div>
		</Link>
	);
};
