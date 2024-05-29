

const googleSearch = (search, db) => {
	const matches = db.filter((website) => {
		return website.includes(search);
	});
	return matches.length > 3 ? matches.slice(0, 3) : matches;
};

module.exports = googleSearch;
