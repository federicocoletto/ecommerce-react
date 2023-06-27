import { useSelector } from "react-redux";
import ProductCard from "../components/Home/ProductCard";

const Home = () => {
	const products = useSelector(states => states.products)
	
	return (
		<div id="home">
			<div id="products">
				{products?.map(prod => (
					<ProductCard
						key={prod.id}
						prod={prod}
					/>
				))}
			</div>
		</div>
	);
};

export default Home;
