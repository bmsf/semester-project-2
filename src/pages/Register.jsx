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
import registerAuth from '../api/auth/registerAuth';
import logo from '../assets/logo-no-background.png';

/**

A React functional component for user registration form.
@component
@return {JSX.Element}
*/

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

		registerAuth(formData);
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
			<main>
				<div className='bg-[#F0F0F0] flex flex-col justify-center mt-12 items-center p-8 w-4/5 md:w-2/4 py-10 mx-auto rounded-lg gap-5'>
					<h1 className='text-xl'>Sign Up</h1>
					<form
						className='flex flex-col w-full lg:w-2/3 space-y-4 md:space-y-6'
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
									placeholder='jon_doe'
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
							<label className='mb-2 text-sm font-medium'>
								Avatar(optional)
							</label>
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
				</div>
			</main>
		</>
	);
}

export default Register;
