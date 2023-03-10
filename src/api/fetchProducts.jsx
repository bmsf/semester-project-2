import { API_AUCTION_URL } from './constants';
const action = '/listings';

/**
 * Fetches a list of active products and updates the state of the given setListings function with the response data.
 *
 * @async
 * @function fetchProducts
 *
 * @param {function} setListings - A function to update the state with the fetched data.
 * @param {function} setIsLoading - A function to set the loading state.
 *
 * @throws {Error} - If the API call fails, an error is thrown with a message "Failed to fetch product details".
 *
 * @returns {Promise<void>} - Returns a promise that resolves to void.
 *
 * @example
 * FetchProducts(setListings, setIsLoading);
 */

const fetchProducts = async (setListings, setIsLoading) => {
	try {
		const getListingsURL = `${API_AUCTION_URL}${action}?_active=true`;
		setIsLoading(true);
		const response = await fetch(getListingsURL);
		const data = await response.json();

		setListings(data);
		if (response.ok) {
			setIsLoading(false);
		}
	} catch (err) {
		console.error(err);
		throw new Error('Failed to fetch product details');
	}
};

export default fetchProducts;
