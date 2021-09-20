/** @format */

import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';

export const Nav = () => {
	return (
		<nav className='nav'>
			<ul className='nav-ul'>
				<Link className='nav-ul-link' to='/'>
					Home
				</Link>
			</ul>
		</nav>
	);
};
