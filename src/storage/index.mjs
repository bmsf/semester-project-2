export const save = (key, value) => {
	localStorage.setItem(key, JSON.stringify(value));
};

export const load = (key) => {
	try {
		const value = localStorage.getItem(key);

		return JSON.parse(value);
	} catch {
		return null;
	}
};

export const remove = (key) => {
	localStorage.removeItem(key);
};
