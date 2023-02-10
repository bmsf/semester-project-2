import React from 'react';
import logo from '../assets/logo-color.png';
import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { AnimatePresence, motion as m } from 'framer-motion';
import Button from './Button';

function Navbar({ backgroundColor }) {
	const [openMenu, setOpenMenu] = useState(false);

	console.log(openMenu);

	return (
		<header>
			<nav
				className='w-full p-5 flex justify-between items-center'
				style={{ backgroundColor: backgroundColor }}
			>
				<div className='w-16'>
					<img src={logo} alt='Image of logo' />
				</div>
				<div>
					{!openMenu ? (
						<Bars3Icon
							className='h-6 w-6 cursor-pointer'
							onClick={() => setOpenMenu(!openMenu)}
						/>
					) : (
						<XMarkIcon
							className='h-6 w-6 cursor-pointer'
							onClick={() => setOpenMenu(!openMenu)}
						/>
					)}
				</div>
			</nav>
			{openMenu && (
				<AnimatePresence>
					<m.div
						initial={{ x: '150%' }}
						animate={{ x: '0%' }}
						transition={{ duration: 0.75 }}
						exit={{ y: '150%' }}
						className='bg-primary w-full h-screen absolute right-0 flex flex-col align-middle items-center text-center text-3xl'
					>
						<ul className='flex flex-col gap-10 mt-20'>
							<li>
								<a href='#'>Home</a>
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
							<Button content='Login' backgroundColor='transparent' />
							<Button content='Sign Up' backgroundColor='black' />
							<Button content='Sign Up' backgroundColor='success' />
							<Button content='Sign Up' backgroundColor='decline' />
						</div>
					</m.div>
				</AnimatePresence>
			)}
		</header>
	);
}

export default Navbar;
