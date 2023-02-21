import { useState } from 'react';
import {
	UserIcon,
	Bars3Icon,
	XMarkIcon,
	CircleStackIcon,
} from '@heroicons/react/24/outline';
import { AnimatePresence, motion as m } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from './Button';
import logo from '../assets/logo-no-background.png';

function Navbar({ backgroundColor, handleLogout, profile }) {
	const [openMenu, setOpenMenu] = useState(false);
	

	const { name, email, credits, avatar } = profile || {};

	return (
		<>
			<nav
				className='w-full p-5 flex justify-between items-center lg:p-10'
				style={{ backgroundColor: backgroundColor }}
			>
				<div className='w-16'>
					<img src={logo} alt='Image of logo' />
				</div>

				<ul className='hidden lg:flex gap-10'>
					<li>
						<Link to='/'>Home</Link>
					</li>
					<li>
						<a href='#'>Discover</a>
					</li>
					<li>
						<a href='#'>Market</a>
					</li>
					<li>
						<a href='#'>Best offers</a>
					</li>
				</ul>
				{profile ? (
					<div className='hidden lg:flex lg:gap-5 lg:items-center'>
						<div className='flex gap-2 bg-gray py-1.5 px-3 rounded-full text-white'>
							<p className='text-black'>{credits}</p>
							<CircleStackIcon className='h-6 w-6 text-black' />
						</div>
						<Link to='/profile'>
							<UserIcon className='h-6 w-6 cursor-pointer' />
						</Link>
					</div>
				) : (
					<div className='hidden lg:block'>
						<Link to='/login' className='uppercase mr-3'>
							Login
						</Link>
						<Link to='/register'>
							<Button
								children='Register'
								backgroundColor='transparent'
								textColor='black'
							/>
						</Link>
					</div>
				)}

				<div className='absolute z-50 right-6 lg:left-6 lg:hidden'>
					{!openMenu ? (
						<Bars3Icon
							className='h-8 w-8 cursor-pointer'
							onClick={() => setOpenMenu(!openMenu)}
						/>
					) : (
						<XMarkIcon
							className='h-8 w-8 cursor-pointer'
							onClick={() => setOpenMenu(!openMenu)}
						/>
					)}
				</div>
			</nav>
			<AnimatePresence>
				{openMenu && (
					<>
						<m.div
							initial={{ x: '150%' }}
							animate={{ x: '0%' }}
							transition={{ duration: 0.75 }}
							exit={{ x: '150%' }}
							className='bg-primary w-full h-screen absolute right-0 top-0 flex flex-col align-middle items-center text-center text-3xl z-40 gap-20'
						>
							<ul className='flex flex-col gap-10 mt-44'>
								<li>
									<Link to='./' reloadDocument>
										Home
									</Link>
								</li>
								<li>
									<Link to='./' reloadDocument>
										Discover
									</Link>
								</li>
								<li>
									<Link to='./' reloadDocument>
										Market
									</Link>
								</li>
							</ul>
							<div className='flex flex-col gap-5'>
								<Link to='/login' reloadDocument>
									<Button
										children='Login'
										backgroundColor='black'
										textColor='white'
									/>
								</Link>
								<Link to='/register' reloadDocument>
									<Button
										children='Sign Up'
										backgroundColor='transparent'
										textColor='black'
									/>
								</Link>

								{/* <Button
									children='Logout'
									backgroundColor='black'
									textColor='white'
									reloadDocument
								/> */}
							</div>
						</m.div>
					</>
				)}
			</AnimatePresence>
		</>
	);
}

export default Navbar;
