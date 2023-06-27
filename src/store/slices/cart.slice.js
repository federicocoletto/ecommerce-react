import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import getConfigAuth from "../../services/getConfigAuth";

const cartSlice = createSlice({
	name: "cart",
	initialState: [],
	reducers: {
		setCartG: (state, action) => action.payload,
		addProductCartG: (state, action) => [...state, action.payload],
		deleteProductCartG: (state, action) => {
			return state.filter((prod) => prod.id !== action.payload);
		},
	},
});

export const { setCartG, addProductCartG, deleteProductCartG } =
	cartSlice.actions;

export default cartSlice.reducer;

// thunks //
const base_URL = "https://e-commerce-api-v2.academlo.tech/api/v1/cart";
// get
export const getCartThunk = () => (dispatch) => {
	const url = base_URL;
	axios
		.get(url, getConfigAuth())
		.then((res) => dispatch(setCartG(res.data)))
		.catch((err) => console.log(err));
};

// post
export const postCartThunk = (prod) => (dispatch) => {
	const url = base_URL;
	const data = {
		quantity: 1,
		productId: prod.id,
	};
	axios
		.get(url, data, getConfigAuth())
		.then((res) => {
			console.log(res.data)
			dispatch(addProductCartG(res.data))
		})
		.catch((err) => console.log(err));
};
