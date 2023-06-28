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
		updateProductCartG: (state, action) => {
			return state.map((prod) => {
				if (prod.id !== action.payload) {
					return prod;
				} else {
					return action.payload;
				}
			});
		},
	},
});

export const {
	setCartG,
	addProductCartG,
	deleteProductCartG,
	updateProductCartG,
} = cartSlice.actions;

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
export const postCartThunk =
	(prod, quantity = 1) =>
	(dispatch) => {
		const url = base_URL;

		const data = {
			// si no ponemos algo con :,
			quantity,
			productId: prod.id,
		};

		axios
			.post(url, data, getConfigAuth())
			.then((res) => {
				const obj = {
					...res.data,
					product: prod,
				};
				console.log(res.data);
				dispatch(addProductCartG(obj));
			})
			.catch((err) => console.log(err));
	};

// delete
export const deleteCartThunk = (id) => (dispatch) => {
	const url = `${base_URL}/${id}`;
	axios
		.delete(url, getConfigAuth())
		.then((res) => {
			console.log(res.data);
			dispatch(deleteProductCartG(id));
		})
		.catch((err) => console.log(err));
};

// put
export const updateCartThunk = (prod, qnt) => (dispatch) => {
	const url = `${base_URL}/${prod.id}`;
	const data = {
		quantity: qnt,
	};
	axios
		.put(url, data, getConfigAuth())
		.then((res) => {
			console.log(res.data);
			dispatch(updateProductCartG(prod));
		})
		.catch((err) => console.log(err));
};
