import { API_AUCTION_URL } from './constants';
const action = '/listings';

/**
 * @description Fetches product details for the given product id
 * @async
 * @function fetchProduct
 * @param {number} id - The id of the product to fetch
 * @returns {Promise<Object>} - An object containing product details
 * @throws {Error} - Throws an error if the API call fails
 * @example
 * const productDetails = await fetchProduct(123);
 * console.log(productDetails);
 */

const fetchProduct = async (id) => {
	try {
		const getListingsURL = `${API_AUCTION_URL}${action}/${id}?_seller=true&_bids=true`;

		const response = await fetch(getListingsURL);

		return await response.json();
	} catch (err) {
		console.error(err);
		throw new Error('Failed to fetch product details');
	}
};

export default fetchProduct;
