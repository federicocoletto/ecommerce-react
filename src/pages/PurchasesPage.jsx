/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import usePurchase from "../hooks/usePurchase";
import PurchaseCard from "../components/Purchases/PurchaseCard";
import './styles/PurchasesPage.css'


const PurchasesPage = () => {

	const { purchases, getAllPurchases } = usePurchase()

	useEffect(() => {
		getAllPurchases()
	}, []);

	return (
		<>
			{
				purchases.length === 0
					? <h2 className="error__msg">You havent purchased anything yet.</h2>
					: (
						<article id='purchases__page'>
							<h1 className="cart__h1">Purchases</h1>
							<section className='cards__conatiner purchases'>
								{
									purchases?.map(prod => (
										<PurchaseCard
											prod={prod}
											key={prod.id}
										/>
									))
								}
							</section>
						</article>
					)}
		</>
	)
};

export default PurchasesPage;
