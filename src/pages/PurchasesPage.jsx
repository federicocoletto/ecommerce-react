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
		<article id='purchases'>
			<h1>Purchases</h1>
			<section id='purchases__conatiner'>
				{
					purchases.map(prod => (
						<PurchaseCard
							prod={prod}
							key={prod.id}
						/>
					))
				}
			</section>
		</article>
	)
};

export default PurchasesPage;
