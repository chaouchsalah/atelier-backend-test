const getProp = (obj, path) => (
	path.split('.').reduce((acc, part) => acc && acc[part], obj)
);

module.exports = getProp;
