/* eslint-disable no-unused-vars */
import { useDispatch } from "react-redux";
import { deleteCartThunk, updateCartThunk } from "../../store/slices/cart.slice";
import { useEffect, useState } from "react";

/* eslint-disable react/prop-types */
const CartElement = ({ prod }) => {

	const dispatch = useDispatch()

	const handleDelete = () => {
		dispatch(deleteCartThunk(prod.id))
	}

	const handleMinus = () => {
		console.log(prod.quantity + 1)
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
		dispatch(updateCartThunk(prod, prod.quantity + 1))
	}

	// const handleMinus = () => {
	// 	if (cartprod.quantity > 1) {
	// 		dispatch(updateCartThunk(cartprod.id, cartprod.quantity - 1))
	// 	} else {
	// 		const confirmAlert = window.confirm(`Are you sure you want to erease ${cartprod.product.title} from your cart`)
	// 		if (confirmAlert) {
	// 			dispatch(deleteCartThunk(cartprod.id))
	// 		}
	// 	}
	// }

	return (
		<article className="cartprod__card">
			<header className="cartprod__header">
				<aside className="img__container cartprod">
					<img className="product__img" src={prod.product?.images[0].url} alt="" />
				</aside>
				<section className="cartprod__product">
					<h3 className="cartprod__title">{prod.product?.title}</h3>
					<button onClick={handleDelete}>
						<i className="cartprod__icon fa-solid fa-trash"></i>
					</button>
				</section>
			</header>
			<section className="cartprod__body">
				<div className="cartprod__total">
					<h4 className="total__label">Total</h4>
					<h3 className="total__value">{prod.quantity * prod.product?.price}</h3>
				</div>
				<div className="cartprod__buttons">
					<button
						className="cartprod__button minus"
						onClick={handleMinus}
					>
						<i>
							<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z" /></svg>
						</i>
					</button>
					<button className="cartprod__button quantity">{prod.quantity}</button>
					<button
						className="cartprod__button plus"
						onClick={handlePlus}
					>
						<i>
							<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" /></svg>
						</i>
					</button>
				</div>
			</section>
		</article>
	)
};

export default CartElement;
