import { API_AUCTION_URL } from '../api/constants';
import * as storage from '../storage/index.mjs';

const deleteListing = async (listingId) => {
	try {
		const token = storage.load('token');
		const response = await fetch(`${API_AUCTION_URL}/listings/${listingId}`, {
			method: 'DELETE',
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});

		if (response.ok) {
			alert(`Listing ${listingId} deleted successfully.`);
			window.location.reload(true);
		}
		if (!response.ok) {
			alert(
				'There was something wrong with deleting the listing. Please try again'
			);
			console.log(response);
		}
	} catch (error) {
		console.error(error);
		alert(
			'There was something wrong with deleting the listing. Please try again'
		);
	}
};

export default deleteListing;
