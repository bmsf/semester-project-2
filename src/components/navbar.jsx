import { useState, useEffect } from 'react';
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

	if (openMenu) {
		document.body.style.overflow = 'hidden';
	} else {
		document.body.style.overflow = 'unset';
	}

	return (
		<>
			<nav
				className='w-full p-5 flex justify-between items-center lg:p-10'
				style={{ backgroundColor: backgroundColor }}
			>
				<div className='w-16'>
					<Link to='/'>
						<img src={logo} alt='Image of logo' />
					</Link>
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
					<div className='hidden lg:flex lg:gap-2 lg:items-center'>
						<p>Credit</p>
						<div className='flex gap-1 border-2 border-black py-1 px-3 mr-3 rounded-full '>
							<p className='text-#E1B530'>{credits}</p>
							<CircleStackIcon className='h-6 w-6' />
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
						<div
							className='flex gap-2 cursor-pointer'
							onClick={() => setOpenMenu(!openMenu)}
						>
							<Bars3Icon className='h-6 w-6' />
							<p>Menu</p>
						</div>
					) : (
						<div
							className='flex flex-col items-center cursor-pointer'
							onClick={() => setOpenMenu(!openMenu)}
						>
							<XMarkIcon className='h-6 w-6' />
							<p>Close</p>
						</div>
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
							{profile ? (
								<Button
									children='Logout'
									backgroundColor='black'
									textColor='white'
									reloadDocument
									handleClick={() => handleLogout}
								/>
							) : (
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
								</div>
							)}
						</m.div>
					</>
				)}
			</AnimatePresence>
		</>
	);
}

export default Navbar;
