/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";
import useFetch from "../hooks/useFetch";
import useAuth from "../hooks/useAuth";
import './styles/RegisterPage.css'

const RegisterPage = () => {

	const { register, handleSubmit, reset } = useForm()
	const { registerUser } = useAuth()

	const submit = (data) => {
		const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/users'
		registerUser(url, data);
		reset({
			firstName: '',
			lastName: '',
			email: '',
			password: '',
			phone: '',
		})
	}

	return (
		<div id="register__page">
			<form onSubmit={handleSubmit(submit)} className='register__form'>
				<div className='register__item'>
					<label className='register__label' htmlFor="firstName">First name</label>
					<input {...register('firstName')} className='register__input' type="text" id="firstName" placeholder="first name" />
				</div>
				<div className='register__item'>
					<label className='register__label' htmlFor="lastName">Last name</label>
					<input {...register('lastName')} className='register__input' type="text" id="lastName" placeholder="last name" />
				</div>
				<div className='register__item'>
					<label className='register__label' htmlFor="email">Email</label>
					<input {...register('email')} className='register__input' type="text" id="email" placeholder="email" />
				</div>
				<div className='register__item'>
					<label className='register__label' htmlFor="password">Password</label>
					<input {...register('password')} className='register__input' type="password" id="password" placeholder="password" />
				</div>
				<div className='register__item'>
					<label className='register__label' htmlFor="phone">Phone</label>
					<input {...register('phone')} className='register__input' type="number" id="phone" placeholder="phone" />
				</div>
				<button className="register__button">Register</button>
			</form>
		</div>
	)
};

export default RegisterPage;
