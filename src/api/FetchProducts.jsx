import { API_AUCTION_URL } from './Constants';
const action = '/listings';

const FetchProducts = async (setListings) => {
	try {
		const getListingsURL = `${API_AUCTION_URL}${action}?_active=true`;

		const response = await fetch(getListingsURL);
		const data = await response.json();

		setListings(data);
	} catch (err) {
		console.error(err);
		throw new Error('Failed to fetch product details');
	}
};

export default FetchProducts;
