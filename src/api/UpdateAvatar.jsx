import { API_AUCTION_URL } from './constants';

/**
 * @description
 * Updates the avatar of a user profile.
 * @param {string} name - The name of the user profile.
 * @param {object} formData - The form data containing the updated avatar image.
 * @param {function} updateProfile - The function to update the user profile with the new avatar.
 * @param {string} token - The user authentication token.
 * @param {object} profile - The user profile object.
 *
 * @returns {Promise<void>} - A Promise that resolves with no value when the avatar is successfully updated.
 *
 * @throws {Error} - If an error occurs while updating the avatar.
 * @example
 * updateAvatar(name, formData, updateProfile, token, profile)
 */

const updateAvatar = async (name, formData, updateProfile, token, profile) => {
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

export default updateAvatar;
