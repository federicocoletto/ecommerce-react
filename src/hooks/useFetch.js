import axios from "axios";
import { useState } from "react";

const useFetch = (base_URL) => {
	const [infoApi, setInfoApi] = useState(null);
	const [hasError, setHasError] = useState(false);
	const [isLoading, setIsLoading] = useState(true);

	const getApi = (path) => {
		const url = `${base_URL}/${path}`;
		setIsLoading(true);
		axios
			.get(url)
			.then((res) => {
				setInfoApi(res.data);
				setHasError(false);
			})
			.catch((err) => {
				console.log(err);
				setHasError(true);
			})
			.finally(() => {
				setIsLoading(false);
			});
	};

	const postApi = (path, data) => {
		const url = `${base_URL}/${path}`
		axios
			.post(url, data)
			.then(res => {
				console.log(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return [infoApi, setInfoApi, hasError, isLoading, getApi, postApi];
};

export default useFetch;
