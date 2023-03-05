import { API_AUCTION_URL } from './constants';

/**
 * Sends a bid to the API for a given listing ID.
 * @async
 * @param {string} id - The ID of the listing to bid on.
 * @param {Object} formData - The data to send in the bid request.
 * @returns {Promise<void>} A Promise that resolves if the bid is successful.
 * @throws {Error} If the bid request fails.
 * @example
 * // Send a bid for listing "abc123" with bid amount 100
 * Bid("abc123", { amount: 100 });
 */

const bid = async (id, newBid, token, profile, updateProfile) => {
	const action = `/listings/${id}/bids`;
	const method = 'post';
	const bidURL = API_AUCTION_URL + action;

	try {
		const response = await fetch(bidURL, {
			method: method,
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify(newBid),
		});
		if (response.ok) {
			alert(`Bid registered!`);
			const updatedProfile = {
				...profile,
				coins: profile.credits - newBid.amount,
			};
			updateProfile(updatedProfile, -newBid.amount);
			window.location.reload(true);
		}
		if (!response.ok) {
			alert("The bid didn't get registrated. Please try again");
			console.log(response);
		}
	} catch (error) {
		alert("The bid didn't get registrated. Please try again");
		console.log(error);
	}
};

export default bid;
