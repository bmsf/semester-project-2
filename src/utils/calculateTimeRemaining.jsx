/**

Calculates the time remaining between the current date and a specified end date.
@param {string} endsAt - The end date in ISO string format.
@returns {Object} - An object with properties representing the remaining time in days, hours, and minutes.
*/

const calculateTimeRemaining = (endsAt) => {
	const date = new Date(endsAt).getTime();
	const now = new Date().getTime();
	let timeleft = date - now;
	const remainingDays = Math.floor(timeleft / (1000 * 60 * 60 * 24));
	const remainingHours = Math.floor(
		(timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
	);
	const remainingMinutes = Math.floor(
		(timeleft % (1000 * 60 * 60)) / (1000 * 60)
	);
	return {
		remainingDays,
		remainingHours,
		remainingMinutes,
	};
};

export default calculateTimeRemaining;
