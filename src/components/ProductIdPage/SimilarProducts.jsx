/* eslint-disable react-hooks/exhaustive-deps */
import ProductCard from "../Home/ProductCard";
import useFetch from "../../hooks/useFetch";
import { useEffect } from "react";

/* eslint-disable react/prop-types */
const SimilarProducts = ({ product }) => {

	const base_URL = 'https://e-commerce-api-v2.academlo.tech/api/v1'
	const [productsByCategory, , , , getProductsByCategory] = useFetch(base_URL)

	useEffect(() => {
		if (product) {
			getProductsByCategory(`/products?categoryId=${product.category.id}`)
		}
	}, [product]);

	return (
		<div id="similar-products">
			{productsByCategory
				?.filter(prod => prod.id !== product.id)
				.map(prod => (
					< ProductCard key={prod.id} prod={prod} />
				))}
		</div>
	);
};

export default SimilarProducts;
