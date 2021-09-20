/** @format */

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Nav } from '../components/Nav';

import './AppRouter.scss';
import { Home } from '../components/Home';
import { Pokemon } from '../components/Pokemon';

export const AppRouter = () => {
	return (
		<Router>
			<div>
				<Nav />
				<Switch>
					<Switch>
						<Route exact path='/' component={Home} />
						<Route exact path='/:pokemonName' component={Pokemon} />
					</Switch>
				</Switch>
			</div>
		</Router>
	);
};
