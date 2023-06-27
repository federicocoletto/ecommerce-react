import { useSelector } from "react-redux";
import ProductCard from "../components/Home/ProductCard";
import './styles/Home.css'

const Home = () => {
	const products = useSelector(states => states.products)
	
	return (
		<div id="home">
			<div className="products__cards container">
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
