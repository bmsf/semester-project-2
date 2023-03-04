import { unstable_renderSubtreeIntoContainer } from 'react-dom';

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
