import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Button from '../components/Button';

function Login() {
	const [loginDetails, setLoginDetails] = '';
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();
	const onSubmit = (data) => console.log(data);

	return (
		<div className='flex flex-col justify-center items-center h-screen border w-full gap-5'>
			<h1 className='text-xl'>Login</h1>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className='flex flex-col w-2/3 space-y-4 md:space-y-6"'
			>
				{/* register your input into the hook by invoking the "register" function */}
				<div className='flex flex-col'>
					<label className='mb-2 text-sm font-medium'>Email</label>
					<input
						defaultValue='testuser@stud.noroff.no'
						{...register('example')}
						className=' border-2 border-black rounded-lg p-2.5 text-gray'
					/>
				</div>
				<div className='flex flex-col'>
					<label className='mb-2 text-sm font-medium text-gray-900'>
						Password
					</label>
					<input
						defaultValue='*********'
						{...register('pw')}
						className='border-2 border-black rounded-lg p-2.5 text-gray'
					/>
				</div>

				{/* include validation with required or other standard HTML validation rules */}
				{/* <input {...register('exampleRequired', { required: true })} /> */}
				{/* errors will return when field validation fails  */}
				{errors.exampleRequired && <span>This field is required</span>}

				<Button
					backgroundColor='black'
					children='Login'
					textColor='white'
					type='Submit'
				/>
			</form>
		</div>
	);
}

export default Login;
