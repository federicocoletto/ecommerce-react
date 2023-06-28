/* eslint-disable no-unused-vars */
import { useSelector } from "react-redux";
import CartElement from "../components/Cart/CartElement";
import "./styles/CartPage.css";

const CartPage = () => {

	const cart = useSelector(states => states.cart)

	const totalPrice = cart.reduce((acc, cur) => {
		const subTotal = cur.quantity * cur.product.price
		return acc + subTotal
	}, 0)

	return (
		<div id="cart__page">
			{
				cart.length !== 0
					? (
						<div id="cart">
							<section id="cart__products">
								{
									cart.map(prod => (
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
									<h2 className="cart__total-value">{totalPrice}</h2>
								</div>
								<button className="cart__checkout">Checkout</button>
							</footer>
						</div>
					)
					: <h2 style={{ color: '#222' }}>Your cart is empty</h2>
			}
		</div>
	)
};

export default CartPage;
