import React from 'react';

const truncateDescription = (description, maxLength) => {
	if (!description) {
		return '';
	}
	const words = description.split(' ');
	const truncated = words.slice(0, maxLength).join(' ');

	return words.length > maxLength ? truncated + '...' : truncated;
};

export default truncateDescription;
