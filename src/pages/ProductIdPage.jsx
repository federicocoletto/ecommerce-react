/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useEffect } from "react";
import ProductInfo from "../components/ProductIdPage/ProductInfo";
import './styles/ProductIdPage.css'
const ProductIdPage = () => {

	const { id } = useParams()
	const product_URL = 'https://e-commerce-api-v2.academlo.tech/api/v1'
	const [product, setProduct, hasError, isLoading, getProductById] = useFetch(product_URL)

	useEffect(() => {
		getProductById(`/products/${id}`)
	}, [id]);

	return (
		<div id="productIdPage">
			{hasError
				? <h1 className="error__msg">Error. Product not found</h1>
				: isLoading
					? <h1 className="loading__msg">Loading...</h1>
					: (
						<div id="product__info" className="container">
							<ProductInfo product={product} />
						</div>
					)
			}
		</div>
	)
};

export default ProductIdPage;
