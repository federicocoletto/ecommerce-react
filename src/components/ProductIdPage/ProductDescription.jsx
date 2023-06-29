import { useDispatch } from "react-redux";
import { deleteCartThunk, postCartThunk } from "../../store/slices/cart.slice";

/* eslint-disable react/prop-types */
const ProductDescription = ({prod, quantity, setQuantity}) => {

	const dispatch = useDispatch()

	const handleMinus = () => {
		if (quantity >= 1) {
			setQuantity((state) => state - 1)
		} else {
			dispatch(deleteCartThunk(prod.id))
		}
	}

	const handlePlus = () => {
		setQuantity((state) => state + 1)
	}

	const handleAddToCart = () => {
		dispatch(postCartThunk(prod, quantity))
	}

	return (
		<>
			<header className="productId__info">
				<h3 className="product__label brand">{prod?.brand}</h3>
				<h2 className="product__value brand">{prod?.title}</h2>
			</header>
			<section className="productId__description">
				<p>{prod?.description}</p>
			</section>
			<section className="productId__cart">
				<div className="productId__price">
					<h5 className="productId__label price">Price</h5>
					<h3 className="productId__value price">${prod?.price}</h3>
				</div>
				<div className="productId__quantity">
					<div className="quantity__buttons">
						<button className="quantity__minus" onClick={handleMinus}>
							<i>
								<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z" /></svg>
							</i>
						</button>
						<button className="quantity">
							<i>{quantity}</i>
						</button>
						<button className="quantity__plus" onClick={handlePlus}>
							<i>
								<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" /></svg>
							</i>
						</button>
					</div>
				</div>
				<div className="productId__addToCart">
					<button className="productId__addToCart-btn" onClick={handleAddToCart}>Add to cart
						<i className="fa-solid fa-cart-shopping"></i>
					</button>
				</div>
			</section>
		</>
	)
};

export default ProductDescription;
