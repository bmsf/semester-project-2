import { useState } from 'react';
import { Link } from 'react-router-dom';
import { EyeIcon, LockClosedIcon, UserIcon } from '@heroicons/react/24/outline';
import Button from '../components/Button';
import LoginAuth from '../api/auth/LoginAuth';

function Login() {
	const [showPassword, setShowPassword] = useState(false);
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});

	const { email, password } = formData;

	const onChange = (e) => {
		setFormData((prevState) => ({
			...prevState,
			[e.target.id]: e.target.value,
		}));
	};

	const onSubmit = async (e) => {
		e.preventDefault();
		LoginAuth(formData);
	};

	return (
		<div className='flex flex-col justify-center items-center h-screen w-full gap-5'>
			<h1 className='text-xl'>Login</h1>
			<form
				onSubmit={onSubmit}
				className='flex flex-col w-2/3 md:w-1/3 lg:w-1/4 space-y-4 md:space-y-6'
			>
				<div className='flex flex-col'>
					<label className='mb-2 text-sm font-medium'>Email</label>
					<div className='relative '>
						<UserIcon className='absolute h-4 w-4 cursor-pointer top-4 left-3' />
						<input
							id='email'
							className='pl-8 w-full border border-black rounded-lg p-2.5 text-gray'
							value={email}
							onChange={onChange}
							required
							pattern='^[\w\-.]+@(stud.)?noroff.no$'
							title='Email must be associated with a noroff email. @noroff.no or @stud.noroff.no'
						/>
					</div>
				</div>
				<div className='flex flex-col'>
					<label className='mb-2 text-sm font-medium text-gray-900'>
						Password
					</label>
					<div className='relative'>
						<LockClosedIcon className='absolute h-4 w-4 cursor-pointer top-4 left-3' />
						<input
							id='password'
							type={showPassword ? 'text' : 'password'}
							className='pl-8 w-full border border-black rounded-lg p-2.5 text-gray'
							value={password}
							onChange={onChange}
							required
							minLength='8'
							title='Password has a minimum length of 8 characters'
						/>
						<EyeIcon
							className='absolute h-4 w-4 cursor-pointer top-4 right-3'
							onClick={() => setShowPassword((prevState) => !prevState)}
						/>
					</div>
				</div>
				<Button
					backgroundColor='black'
					children='Login'
					textColor='white'
					type='Submit'
				/>
				<p className=''>
					Don't have an account?{' '}
					<Link to={'/register'} className='font-extrabold'>
						Sign Up
					</Link>
				</p>
			</form>
		</div>
	);
}

export default Login;
