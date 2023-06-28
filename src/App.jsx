/* eslint-disable react-hooks/exhaustive-deps */
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Navbar from './components/shared/Navbar'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getAllProductsThunk } from './store/slices/products.slice'
import ProductIdPage from './pages/ProductIdPage'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import CartPage from './pages/CartPage'
import { getCartThunk } from './store/slices/cart.slice'
import PurchasesPage from './pages/PurchasesPage'

function App() {

	const dispatch =  useDispatch()
	
	useEffect(() => {
		dispatch(getAllProductsThunk())
		dispatch(getCartThunk())
	}, []);

	return (
		<div id='app'>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/product/:id' element={<ProductIdPage />} />
				<Route path='/register' element={<RegisterPage />} />
				<Route path='/login' element={<LoginPage />} />
				<Route path='/cart' element={<CartPage />} />
				<Route path='/purchases' element={<PurchasesPage />} />
			</Routes>
		</div>
	)
}

export default App
