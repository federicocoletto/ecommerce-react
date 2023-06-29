/* eslint-disable react/prop-types */
const PurchaseCard = ({ prod }) => {

	// console.log(prod);

	return (

		<div className="purchases__div">
			<article className="product__card purchase">
				<header className="purchase__header">
					<img className="purchase__img purch" src={prod.product?.images[0].url} alt="" />
				</header>
				<h3 className="purchase__title label">{prod.product?.title}</h3>
				<footer className="purchase__footer">
					<h4 className="purchase__quantity label">Units</h4>
					<h4 className="purchase__total label">Total</h4>
					<h5 className="purchase__quantity value">{prod.quantity}</h5>
					<h5 className="purchase__total value">${prod.product?.price * prod.quantity}</h5>
				</footer>
			</article>
		</div>
	)

};

export default PurchaseCard;
