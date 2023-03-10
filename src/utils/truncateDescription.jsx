/**

Truncates the given description string to the given maximum length, adding ellipsis if necessary.

@param {string} description - The description string to truncate.

@param {number} maxLength - The maximum length of the truncated string.

@returns {string} - The truncated description string.
*/

const truncateDescription = (description, maxLength) => {
	if (!description) {
		return '';
	}
	const words = description.split(' ');
	const truncated = words.slice(0, maxLength).join(' ');

	return words.length > maxLength ? truncated + '...' : truncated;
};

export default truncateDescription;
