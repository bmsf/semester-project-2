import { API_AUCTION_URL } from '../Constants';
const action = '/auth/register';
const method = 'post';

/**
 * @description
 * Registers a new user by sending a POST request with the registration form data to the API.
 * @async
 * @function RegisterAuth
 * @param {Object} formData - An object containing the registration form data.
 * @throws {Error} If there was an error with the API call.
 * @returns {Promise<void>} A promise that resolves with no value.
 * @param {*} formData
 * @example
 * RegisterAuth(formData)
 */

const RegisterAuth = async (formData) => {
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
			return (await response.json()) && window.location.replace('/');
		} else if (!response.ok) {
			alert('Something went wrong, try again');
		}
	} catch (error) {
		alert('Something went wrong, try again');
	}
};

export default RegisterAuth;
