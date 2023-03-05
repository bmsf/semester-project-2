import { API_AUCTION_URL } from './constants';
import * as storage from '../storage';

const action = '/listings';
const method = 'post';

/**
 * Creates a new auction listing using the provided data
 *
 * @function
 * @async
 * @param {Object} listingData - Data for the new auction listing
 * @param {string} listingData.title - Title of the listing
 * @param {string} listingData.description - Description of the listing
 * @param {string} listingData.image - URL of the listing's image
 * @param {number} listingData.endDate - Unix timestamp of the end date for the auction
 * @throws {Error} If an error occurs during the creation of the listing
 * @returns {void}
 *
 * @example
 * createListing({
 *  title: "Example listing",
 *  description: "This is an example auction listing",
 *  image: "https://example.com/listing.jpg",
 *  endDate: March 3, 2022 00:00:
 */

const createListing = async (listingData) => {
	try {
		console.log(listingData);
		const token = storage.load('token');
		const createListingURL = API_AUCTION_URL + action;

		const response = await fetch(createListingURL, {
			method: method,
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify(listingData),
		});

		if (response.ok) {
			alert(`Auction listing created successfully!`);
			window.location.reload();
		}
		if (!response.ok) {
			alert(
				"The listing didn't get correctly created, please try again. It might be that the Image gallery provided was not fully formed URLs that links to live and publicly accessible images"
			);
		}
	} catch (error) {
		console.log(error);
		alert(
			'Something went wrong when trying to create the listing. Please try again.'
		);
	}
};

export default createListing;
