/* eslint-disable react-hooks/exhaustive-deps */
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Navbar from './components/shared/Navbar'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getAllProductsThunk } from './store/slices/products.slice'

function App() {

	const dispatch =  useDispatch()
	
	useEffect(() => {
		dispatch(getAllProductsThunk())
	}, []);

	return (
		<div className='app'>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
			</Routes>
		</div>
	)
}

export default App
