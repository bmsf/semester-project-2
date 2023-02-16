import { API_AUCTION_URL } from '../Constants';
import * as storage from '../../storage/index.mjs';

const action = '/auth/login';
const method = 'post';

const LoginAuth = async (formData) => {
	const loginURL = API_AUCTION_URL + action;
	const body = JSON.stringify(formData);
	try {
		const response = await fetch(loginURL, {
			headers: {
				'Content-Type': 'application/json',
			},
			method,
			body,
		});

		const { accessToken, ...user } = await response.json();

		storage.save('token', accessToken);

		storage.save('profile', user);

		if (response.ok) {
			window.location.replace('/');
		} else if (!response.ok) {
			alert('Something went wrong, try again');
		}
	} catch (error) {
		alert('Something went wrong, try again');
	}
};

export default LoginAuth;
