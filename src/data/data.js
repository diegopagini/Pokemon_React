/** @format */

export const Data = () => {
	fetch(`https://pokeapi.co/api/v2/pokemon?limit=100&offset=200`)
		.then((response) => response.json())
		.then((data) => data.results);
};
