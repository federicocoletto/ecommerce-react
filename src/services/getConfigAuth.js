const getConfigAuth = () => {
	return  {
		headers: {
			Authorization: `Baerer ${localStorage.getItem('token')}`
		}
	}
};

export default getConfigAuth;
