import axios from "axios";
import getConfigAuth from "../services/getConfigAuth";
import { useState } from "react";

const usePurchase = () => {
	const url = "https://e-commerce-api-v2.academlo.tech/api/v1/purchases";
	const [purchases, setPurchases] = useState();

	// get
	const getAllPurchases = () => {
		axios
			.get(url, getConfigAuth())
			.then((res) => setPurchases(res.data))
			.catch((err) => console.log(err));
	};

	// post
	const makePurchase = () => {
		axios
			.post(url, null, getConfigAuth())
			.then((res) => {
				console.log(res.data)
			})
			.catch((err) => console.log(err));
	};

	return { purchases, getAllPurchases, makePurchase };
};

export default usePurchase;

/*
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
 */
