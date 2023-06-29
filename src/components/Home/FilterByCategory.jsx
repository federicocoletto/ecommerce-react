/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import { getAllProductsThunk } from "../../store/slices/products.slice";
import { useDispatch } from "react-redux";

const FilterByCategory = () => {

	const base_URL = 'https://e-commerce-api-v2.academlo.tech/api/v1'
	const [categories, , hasError, isLoading, getAllCategories] = useFetch(base_URL)
	const dispatch = useDispatch()

	useEffect(() => {
		getAllCategories('/categories')
	}, []);

	const handleFilterCategory = (id) => {
		if (id) {
			const url = `https://e-commerce-api-v2.academlo.tech/api/v1/products?categoryId=${id}`
			dispatch(getAllProductsThunk(url))
		} else {
			dispatch(getAllProductsThunk())
		}
	}

	return (
		<>
			{
				hasError
					? <h1 className="error__msg">Error. Category not found</h1>
					: isLoading
						? <h1 className="error__msg">Loading...</h1>
						:
						(
							<ul className="categories">
								<li onClick={() => handleFilterCategory()} className="category">All categories</li>
								{
									categories?.map(cat => (
										<li
											key={cat.id}
											// extendemos el handleClick by convirtiendolo en una arrow funct. que ejecutará la funcion handleCategory, pasándole a ésta el el id de la categoría como param
											onClick={() => handleFilterCategory(cat.id)}
											className="category"
										>{cat.name}</li>
									))
								}
							</ul>
						)
			}
		</>

	)
};

export default FilterByCategory;
