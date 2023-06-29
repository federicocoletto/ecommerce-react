/* eslint-disable no-unused-vars */
import { useDispatch } from "react-redux";
import { deleteCartThunk, postCartThunk, updateCartThunk } from "../../store/slices/cart.slice";

/* eslint-disable react/prop-types */
const CartElement = ({ prod }) => {

	const dispatch = useDispatch()

	const handleMinus = () => {
		if (prod.quantity > 1) {
			dispatch(updateCartThunk(prod, prod.quantity - 1))
		} else {
			const confirmAlert = window.confirm(`Are you sure you want to erease ${prod.product.title} from your cart`)
			if (confirmAlert) {
				dispatch(deleteCartThunk(prod.id))
			}
		}
	}
	
	const handlePlus = () => {
		console.log(prod)
		dispatch(updateCartThunk(prod, prod.quantity + 1))
	}
	
	
	const handleDelete = () => {
		dispatch(deleteCartThunk(prod.id))
	}

	return (
		<article className="product__card cart__element">
			<header className="product__header">
				<aside className="img__container">
					<img className="product__img cart__img" src={prod.product?.images[0].url} alt="" />
				</aside>
			</header>
			<section className="cartprod__body">
				<header className="product__brand cartprod">
					<h3 className="product__label brand cartprod">{prod.product?.brand}</h3>
					<h2 className="product__value brand cartprod">{prod.product?.title}</h2>
					<button onClick={handleDelete}>
						<i className="cartprod__icon fa-solid fa-trash"></i>
					</button>
				</header>
				<div className="cartprod__total">
					<h4 className="product__label total cartprod">Total</h4>
					<h3 className="product__value total cartprod">${Math.ceil(Number(prod?.quantity * prod.product?.price)).toLocaleString('en')}</h3>
					<div className="cartprod__buttons">
						<button className="cartprod__button minus" onClick={handleMinus} >
							<i><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z" /></svg></i>
						</button>
						<button className="cartprod__button quantity">{prod?.quantity}</button>
						<button className="cartprod__button plus" onClick={handlePlus}>
							<i><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" /></svg></i>
						</button>
					</div>
				</div>
			</section>
		</article>
	)
};

export default CartElement;
