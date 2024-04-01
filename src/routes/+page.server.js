import { dataCountry } from './data';

export function load() {
	return {
		country: dataCountry.map((post) => ({
            image: post.flags.png,
			name: post.name,
            population: post.population,
            region: post.region,
			capital: post.capital
		}))
	};
}