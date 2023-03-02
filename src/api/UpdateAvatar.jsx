import { API_AUCTION_URL } from './Constants';

const UpdateAvatar = async (name, formData, updateProfile, token, profile) => {
	const action = `/profiles/${name}/media`;
	const method = 'put';
	const updateMediaURL = API_AUCTION_URL + action;

	try {
		const response = await fetch(updateMediaURL, {
			method: method,
			headers: {
				'Content-Type': 'application/json',
				Authorization: `bearer ${token}`,
			},
			body: JSON.stringify(formData),
		});
		if (response.ok) {
			const updatedProfile = {
				...profile,
				avatar: formData.avatar,
			};
			updateProfile(updatedProfile);

			window.location.reload(true);
		}
		if (!response.ok) {
			// alert("The image didn't get updated, please try again");
			console.log(response);
		}
	} catch (error) {
		// alert("The image didn't get updated, please try again");
		console.log(error);
	}
};

export default UpdateAvatar;
