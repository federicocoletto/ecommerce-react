import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postCartThunk } from "../../store/slices/cart.slice";
import './styles/ProductCard.css'

/* eslint-disable react/prop-types */
const ProductCard = ({ prod }) => {

	const dispatch = useDispatch()
	const navigate = useNavigate()

	const handleNavigateProdIdPage = () => {
		navigate(`/product/${prod.id}`)
	}

	const handleAddCart = (e) => {
		e.stopPropagation()
		// console.log(prod.title.split(' ').slice(0, 4))
		dispatch(postCartThunk(prod))
	}


	return (
		<article id="product__card">
			<header className="product__header">
				<div className="img__container product">
					<img
						className="product__img"
						src={prod.images[0].url} alt={prod.title.split(' ').slice(0, 4)}
						onClick={handleNavigateProdIdPage} />
				</div>
				<div className="img__container product">
					<img
						className="product__img"
						src={prod.images[1].url} alt={prod.title.split(' ').slice(0, 4)}
						onClick={handleNavigateProdIdPage} />
				</div>
			</header>
			<section className="product__body">
				<header className="product__brand">
					<h3 className="product__label brand">{prod.brand}</h3>
					<h2 className="product__value brand">{prod.title}</h2>
				</header>
				<section className="product__price">
					<h3 className="product__label price">Price</h3>
					<h2 className="product__value price">${Math.ceil(Number(prod.price)).toLocaleString('en')}</h2>
				</section>
				<div className="product__options">
					<button onClick={handleNavigateProdIdPage} >More info</button>
					<button className="addCart__btn" onClick={handleAddCart}>
						<i className="fa-solid fa-cart-plus"></i>
					</button>
				</div>
			</section>
		</article>
	);
};

export default ProductCard;
