import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { AnimatePresence, motion as m } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from './Button';
import logo from '../assets/logo-no-background.png';

function Navbar({ backgroundColor, handleLogout, user }) {
	const [openMenu, setOpenMenu] = useState(false);

	// const { name, email, credits, avatar } = user;

	return (
		<>
			<nav
				className='w-full p-5 flex justify-between items-center lg:p-10'
				style={{ backgroundColor: backgroundColor }}
			>
				<div className='w-16'>
					<img src={logo} alt='Image of logo' />
				</div>

				{/* <div>{credits}</div> */}
				<ul className='hidden lg:flex gap-10'>
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
				<div className='hidden lg:block'>
					<Button children='Bids' backgroundColor='black' textColor='white' />
				</div>
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
							className='bg-primary w-full h-screen absolute right-0 top-0 flex flex-col align-middle items-center text-center text-3xl z-40'
						>
							<ul className='flex flex-col gap-10 mt-20'>
								<li>
									<a href='./'>Home</a>
								</li>
								<li>
									<a href='#'>Discover</a>
								</li>
								<li>
									<a href='#'>Categories</a>
								</li>
								<li>
									<a href='#'></a>
								</li>
							</ul>
							<div className='flex flex-col gap-5'>
								<Link to='/login' reloadDocument>
									<Button children='Login' backgroundColor='transparent' />
								</Link>
								<Link to='/register' reloadDocument>
									<Button
										children='Sign Up'
										backgroundColor='black'
										textColor='white'
									/>
								</Link>

								<Button
									children='Logout'
									backgroundColor='black'
									textColor='white'
									reloadDocument
								/>
							</div>
						</m.div>
					</>
				)}
			</AnimatePresence>
		</>
	);
}

export default Navbar;
