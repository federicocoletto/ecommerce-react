import { useSelector } from "react-redux";
import ProductCard from "../components/Home/ProductCard";
import './styles/Home.css'
import { useRef, useState } from "react";
import FilterByCategory from "../components/Home/FilterByCategory";
import FilterByPrice from "../components/Home/FilterByPrice";

const Home = () => {

	const products = useSelector(states => states.products)
	const input_ref = useRef();
	const [inputValue, setInputValue] = useState('');
	const [priceMinMax, setPriceMinMax] = useState({
		min: 0,
		max: Infinity
	});

	const cb_filterByCategory = prod => prod.title.toLowerCase().includes(inputValue)

	const cb_filterByPrice = prod => priceMinMax.min <= Number(prod.price) && Number(prod.price) <= priceMinMax.max

	const handleChange = () => {
		setInputValue(input_ref.current.value.trim().toLowerCase())
	}

	return (
		<div id="home">
			<header className="home__header">
				<div className="filter__title">
					<input
						className="title__filter"
						type="text"
						name='filterByTitle'
						id="title"
						onChange={handleChange}
						ref={input_ref}
						placeholder="Product name" />
					<label htmlFor="title">
						<i className="fa-solid fa-magnifying-glass"></i>
					</label>
				</div>
				<div className="filter__category">
					<h2 className="filter__h2">Filter by category</h2>
					<FilterByCategory />
				</div>
				<div className="filter__price">
					<h2 className="filter__h2">Filter by price</h2>
					<FilterByPrice
						setPriceMinMax={setPriceMinMax}
						priceMinMax={priceMinMax} />
				</div>
			</header>

			<div id="cards__container">
				{products
					?.filter(cb_filterByCategory)
					.filter(cb_filterByPrice)
					.map(prod => (
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
