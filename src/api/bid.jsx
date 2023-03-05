import { API_AUCTION_URL } from './constants';

/**
 * Sends a bid to the API for a given listing ID.
 * @async
 * @function
 * @param {string} id - The ID of the listing to bid on.
 * @param {Object} newBid - The data to send in the bid request.
 * @param {string} token - The user's authentication token.
 * @param {Object} profile - The user's profile data.
 * @param {function} updateProfile - The function used to update the user's profile data.
 * @throws {Error} If the bid request fails.
 * @returns {Promise<void>} A Promise that resolves if the bid is successful.
 * @example
 * // Send a bid for listing "abc123" with bid amount 100
 * bid("abc123", { amount: 100 }, token, profile, updateProfile);
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
