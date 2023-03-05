import { API_AUCTION_URL } from '../constants';
const action = '/auth/register';
const method = 'post';

/**
 * Registers a new user by sending a POST request with the registration form data to the API.
 * @async
 * @function
 * @param {Object} formData - An object containing the registration form data.
 * @throws {Error} If there was an error with the API call.
 * @returns {Promise<void>} A promise that resolves with no value.
 * @example
 * registerAuth(formData);
 */

const registerAuth = async (formData) => {
	const registerURL = API_AUCTION_URL + action;

	const body = JSON.stringify(formData);

	try {
		const response = await fetch(registerURL, {
			headers: {
				'Content-Type': 'application/json',
			},
			method,
			body,
		});
		if (response.ok) {
			return (await response.json()) && window.location.replace('/login');
		} else if (!response.ok) {
			alert('Something went wrong, try again');
			console.log(response);
		}
	} catch (error) {
		alert('Something went wrong, try again');
		console.log(response);
	}
};

export default registerAuth;
