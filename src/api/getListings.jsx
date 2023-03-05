import { API_AUCTION_URL } from '../api/constants';
import * as storage from '../storage/index.mjs';

/**
 * Fetches the active listings for a given user.
 *
 * @async
 * @function getListings
 *
 * @param {string} name - The name of the user whose listings are to be fetched.
 *
 * @throws {Error} - If the API call fails, an error is thrown with a message "Failed to fetch user's listings".
 *
 * @returns {Promise<Object>} - Returns a promise that resolves to an object containing the user's active listings.
 *
 * @example
 * getListings('john_doe')
 */

const getListings = async (name) => {
	const profileURL = API_AUCTION_URL + '/profiles/' + name + '?_listings=true';
	const method = 'get';
	const token = storage.load('token');
	const response = await fetch(profileURL, {
		method: method,
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
	});
	const data = await response.json();

	return data;
};

export default getListings;
