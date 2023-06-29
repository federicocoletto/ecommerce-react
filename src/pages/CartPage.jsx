/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from "react-redux";
import CartElement from "../components/Cart/CartElement";
import "./styles/CartPage.css";
import usePurchase from "../hooks/usePurchase";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCartThunk } from "../store/slices/cart.slice";

const CartPage = () => {

	const cart = useSelector(states => states.cart)
	const { makePurchase } = usePurchase()

	const dispatch = useDispatch()
	const navigate = useNavigate()

	const handlePurchase = () => {
		makePurchase()
		navigate('/purchases')
	}

	const totalPrice = cart?.reduce((acc, cur) => {
		const subTotal = cur.quantity * cur.product?.price
		return acc + subTotal
	}, 0)

	return (
		<div id="cart__page">
			{
				cart.length !== 0
					? (
						<div id="cart">
							<h1 className="cart__h1">Your selected products</h1>
							<section className="cards__container">
								{
									cart?.map(prod => (
										<CartElement
											key={prod.id}
											prod={prod}
										/>
									))
								}
							</section>
							<footer id="cart__footer">
								<div className="cart__total">
									<h3 className="cart__total-label">Total</h3>
									<h2 className="cart__total-value">${Math.ceil(Number(totalPrice)).toLocaleString('en')}</h2>
								</div>
								<button className="cart__checkout-btn" onClick={handlePurchase}>Purchase</button>
							</footer>
						</div>
					)
					: <h2 className="error__msg" >Your cart is empty</h2>
			}
		</div>
	)
};

export default CartPage;
