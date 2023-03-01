import { API_AUCTION_URL } from './Constants';

const Bid = async (id, formData) => {
	const action = `/listing/${id}/bids`;
	const method = 'post';
	const bidURL = API_AUCTION_URL + action;
	try {
		const response = await fetch(bidURL, {
			method: method,
			headers: {
				'Content-Type': 'application/json',
				Authorization: `bearer ${token}`,
			},
			body: JSON.stringify(formData),
		});
		if (response.ok) {
			window.location.reload(true);
		}
		if (!response.ok) {
			alert("The image didn't get updated, please try again");
			console.log(response);
		}
	} catch (error) {
		alert("The image didn't get updated, please try again");
		console.log(error);
	}
};

export default Bid;
