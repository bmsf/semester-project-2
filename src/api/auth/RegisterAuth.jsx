import { API_AUCTION_URL } from '../Constants';
const action = '/auth/register';
const method = 'post';

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
