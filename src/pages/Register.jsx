import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
	EyeIcon,
	LockClosedIcon,
	UserIcon,
	EnvelopeIcon,
	PhotoIcon,
} from '@heroicons/react/24/outline';

import Button from '../components/Button';
import RegisterAuth from '../api/auth/RegisterAuth';
import logo from '../assets/logo-no-background.png';

function Register() {
	const [showPassword, setShowPassword] = useState(false);
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		avatar: '',
		password: '',
	});

	const { name, email, password, avatar } = formData;

	const onChange = (e) => {
		setFormData((prevState) => ({
			...prevState,
			[e.target.id]: e.target.value,
		}));
	};

	const onSubmit = async (e) => {
		e.preventDefault();

		RegisterAuth(formData);
	};

	return (
		<>
			<nav>
				<div className='w-16 m-5'>
					<Link to='/'>
						<img src={logo} alt='Image of logo' />
					</Link>
				</div>
			</nav>
			<main className='flex flex-col justify-center items-center h-screen w-full gap-5'>
				<h1 className='text-xl'>Sign Up</h1>
				<form
					className='flex flex-col w-2/3 md:w-1/3 lg:w-1/4 space-y-4 md:space-y-6'
					onSubmit={onSubmit}
				>
					<div className='flex flex-col'>
						<label className='mb-2 text-sm font-medium'>Name</label>
						<div className='relative '>
							<UserIcon className='absolute h-4 w-4 cursor-pointer top-4 left-3' />
							<input
								id='name'
								className='pl-10  w-full border border-black rounded-lg p-2.5 '
								value={name}
								onChange={onChange}
								required
								pattern='^[\w]+$'
								maxLength='20'
								placeholder='Jon Doe'
								title='Name can maximum contain 20 letters and no numbers. The name value must not contain punctuation symbols apart from underscore'
							/>
						</div>
					</div>
					<div className='flex flex-col'>
						<label className='mb-2 text-sm font-medium'>Email</label>
						<div className='relative '>
							<EnvelopeIcon className='absolute h-4 w-4 cursor-pointer top-4 left-3' />
							<input
								id='email'
								className='pl-10  w-full border border-black rounded-lg p-2.5'
								value={email}
								onChange={onChange}
								required
								placeholder='jondoe@stud.noroff.no'
								pattern='^[\w\-.]+@(stud.)?noroff.no$'
								title='Email must be associated with a noroff email. @noroff.no or @stud.noroff.no'
							/>
						</div>
					</div>
					<div className='flex flex-col'>
						<label className='mb-2 text-sm font-medium'>Avatar(optional)</label>
						<div className='relative '>
							<PhotoIcon className='absolute h-4 w-4 cursor-pointer top-4 left-3' />
							<input
								id='avatar'
								className='pl-10  w-full border border-black rounded-lg p-2.5 '
								value={avatar}
								onChange={onChange}
								placeholder='"https://url.com/image.jpg"'
								pattern='^[\w]+$'
								title='Name can maximum contain 20 letters and no numbers'
							/>
						</div>
					</div>
					<div className='flex flex-col'>
						<label className='mb-2 text-sm font-medium'>Password</label>
						<div className='relative'>
							<LockClosedIcon className='absolute h-4 w-4 cursor-pointer top-4 left-3' />
							<input
								id='password'
								type={showPassword ? 'text' : 'password'}
								className='pl-10  w-full border border-black rounded-lg p-2.5 '
								value={password}
								onChange={onChange}
								required
								placeholder='********'
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
						children='Sign Up'
						textColor='white'
						type='Submit'
					/>
					<p className=''>
						Already have an account?{' '}
						<Link to={'/login'} className='font-extrabold'>
							Login
						</Link>
					</p>
				</form>
			</main>
		</>
	);
}

export default Register;
