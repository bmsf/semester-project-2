import { API_AUCTION_URL } from '../api/constants';
import * as storage from '../storage/index.mjs';

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
