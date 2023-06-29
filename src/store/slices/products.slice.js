import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const productsSlice = createSlice({
	name: "products",
	initialState: null,
	reducers: {
		setProductsG: (state, action) => action.payload,
	},
});

export const { setProductsG } = productsSlice.actions;

export default productsSlice.reducer;

// declaramos el valor por defecto de la url (solo cambiará si el usuario pasa otra url como param)
// si le pasamos la url ...?categoryId=${id}, el arr de los productos ya estará filtrado con el id que el usuario le pase como param
const base_URL = "https://e-commerce-api-v2.academlo.tech/api/v1/products";
export const getAllProductsThunk =
	(url = base_URL) =>
	(dispatch) => {
		axios
			.get(url)
			.then((res) => dispatch(setProductsG(res.data)))
			.catch((err) => console.log(err));
	};
