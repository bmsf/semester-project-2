import { API_AUCTION_URL } from './Constants';
const action = '/listings';

const FetchProduct = async (id) => {
	try {
		const getListingsURL = `${API_AUCTION_URL}${action}/${id}?_seller=true&_bids=true`;

		const response = await fetch(getListingsURL);

		return await response.json();
	} catch (err) {
		console.error(err);
		throw new Error('Failed to fetch product details');
	}
};

export default FetchProduct;
