import { error } from '@sveltejs/kit';
import { dataCountry } from '../../data';

export function load({ params }) {
	const detailCountry = dataCountry.find((post) => post.name === params.name);

	if (!detailCountry) throw error(404);

	return {
		detailCountry
	};
}
