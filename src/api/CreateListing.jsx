import { API_AUCTION_URL } from './Constants';
import * as storage from '../storage';

const action = '/listings';
const method = 'post';

const CreateListing = async (listingData) => {
	try {
		const token = storage.load('token');
		const createListingURL = API_AUCTION_URL + action;

		const response = await fetch(createListingURL, {
			method: method,
			headers: {
				'Content-Type': 'application/json',
				Authorization: `bearer ${token}`,
			},
			body: JSON.stringify(listingData),
		});

		if (response.ok) {
			window.location.reload();
		}
		if (!response.ok) {
			alert("The listing didn't get correctly created, please try again");
		}
	} catch (error) {
		console.log(error);
		alert(
			'Something went wrong when trying to create the listing. Please try again.'
		);
	}
};

export default CreateListing;
