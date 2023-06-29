import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postCartThunk } from "../../store/slices/cart.slice";

/* eslint-disable react/prop-types */
const ProductCard = ({ prod }) => {

	const dispatch = useDispatch()
	const navigate = useNavigate()

	const handleNavigateProdIdPage = () => {
		navigate(`/product/${prod.id}`)
	}

	const handleAddCart = (e) => {
		e.stopPropagation()
		dispatch(postCartThunk(prod))
	}


	return (
		<article id="product__card" onClick={handleNavigateProdIdPage}>
			<header className="product__header">
				<div className="img__container product">
					<img className="product__img" src={prod.images[0].url} alt="" />
				</div>
				<div className="img__container">
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
