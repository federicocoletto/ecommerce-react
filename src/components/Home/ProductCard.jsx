/* eslint-disable react/prop-types */
const ProductCard = ({ prod }) => {

	const handleNavigateProdIdPage = () => { }
	const handleAddCart = () => { }


	return (
		<article className="product" onClick={handleNavigateProdIdPage}>
			<header className="product__header">
				<div className="product__img-container">
					<img className="product__img" src={prod.images[0].url} alt="" />
				</div>
				<div className="product__img-container">
					<img className="product__img" src={prod.images[1].url} alt="" />
				</div>
			</header>
			<section className="product__body">
				<header className="product__brand">
					<h3 className="product__label brand">{prod.brand}</h3>
					<h2 className="product__value brand">{prod.title}</h2>
				</header>
				<section className="product__price">
					<h3 className="product__label price">Price</h3>
					<h2 className="product__value price">${prod.price}</h2>
				</section>
				<button className="product__btn" onClick={handleAddCart}>
					<i className="fa-solid fa-cart-plus"></i>
				</button>
			</section>
		</article>
	);
};

export default ProductCard;
