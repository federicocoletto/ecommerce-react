/* eslint-disable react/prop-types */
import { useState } from "react";
import ProductCarrousel from "./ProductCarrousel";
import ProductDescription from "./ProductDescription";
import SimilarProducts from "./SimilarProducts";

const ProductInfo = ({ product }) => {

	const [quantity, setQuantity] = useState(1);

	return (
		<>
			<section className="product__info carrousel">
				<ProductCarrousel prod={product} />
			</section>
			<article className="product__info description">
				<ProductDescription
					prod={product}
					quantity={quantity}
					setQuantity={setQuantity}
				/>
			</article>
			<footer className="product__info similar-products">
				<h2 className="similar__h2">Similar products</h2>
				<SimilarProducts product={product} />
			</footer>
		</>
	)
};

export default ProductInfo;
