import { API_AUCTION_BASE } from './Constants';

const action = '/posts';
const method = 'post';

const CreateListing = async (listingData) => {
	try {
		const token = storage.load('token');
		const createListingURL = API_AUCTION_BASE + action;

		const response = await fetch(createListingURL, {
			method: method,
			headers: {
				'Content-Type': 'application/json',
				Authorization: `bearer ${token}`,
			},
			body: JSON.stringify(listingData),
		});

		console.log(response);
	} catch (error) {
		console.log(error);
		alert(
			'Something went wrong when trying to create the listing. Please try again.'
		);
		t;
	}
};

// CreateListing();

export default CreateListing;
