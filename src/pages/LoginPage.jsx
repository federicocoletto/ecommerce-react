/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";

const LoginPage = () => {

	const { register, handleSubmit, reset } = useForm()
	const { loginUser } = useAuth()

	const submit = (data) => {
		const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/users/login'
		loginUser(url, data)
		reset({
			email: '',
			password: '',
		})
	}

	return (
		<form onSubmit={handleSubmit(submit)} className='register__form'>
			<div className='register__item'>
				<label className='register__label' htmlFor="email">Email</label>
				<input {...register('email')} className='register__input' type="text" />
			</div>
			<div className='register__item'>
				<label className='register__label' htmlFor="password">Password</label>
				<input {...register('password')} className='register__input' type="password" />
			</div>
			<button>Log in →</button>
		</form>
	)
};

export default LoginPage;
