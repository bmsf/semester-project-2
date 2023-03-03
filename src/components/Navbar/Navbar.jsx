import { useState, useEffect } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { AnimatePresence, motion as m } from 'framer-motion';
import { Link } from 'react-router-dom';

import Button from '../Button';
import LoggedInMenu from './LoggedInMenuDesktop';
import logo from '../../assets/logo-no-background.png';
import NavbarMobile from './NavbarMobile';

function Navbar({ backgroundColor, handleLogout, profile, bgDesktop }) {
	const [openMenu, setOpenMenu] = useState(false);
	const [openLoggedInMenu, setOpenLoggedInMenu] = useState(false);

	const { name, email, credits, avatar } = profile || {};

	const Path = (props) => (
		<m.path
			fill='transparent'
			strokeWidth='3'
			stroke='hsl(0, 0%, 18%)'
			strokeLinecap='round'
			{...props}
		/>
	);

	return (
		<>
			<nav
				className='w-full p-5 flex justify-between items-center lg:p-10 '
				style={{ backgroundColor: backgroundColor }}
			>
				<div className='w-20'>
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
					<LoggedInMenu
						handleLogout={handleLogout}
						avatar={avatar}
						email={email}
						name={name}
						credits={credits}
					/>
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
						<m.div
							className='flex gap-2 cursor-pointer'
							onClick={() => setOpenMenu(!openMenu)}
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.9 }}
						>
							<Bars3Icon className='h-8 w-8' />
						</m.div>
					) : (
						<m.div
							className='flex flex-col items-center cursor-pointer'
							onClick={() => setOpenMenu(!openMenu)}
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.9 }}
						>
							<XMarkIcon className='h-8 w-8' />
						</m.div>
					)}
				</div>
			</nav>
			<AnimatePresence>
				{openMenu && (
					<NavbarMobile
						handleLogout={handleLogout}
						avatar={avatar}
						profile={profile}
						name={name}
						email={email}
					/>
				)}
			</AnimatePresence>
		</>
	);
}

export default Navbar;
