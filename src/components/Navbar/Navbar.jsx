import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { AnimatePresence, motion as m } from 'framer-motion';
import { Link } from 'react-router-dom';

import Button from '../Button';
import LoggedInMenu from './LoggedInMenuDesktop';
import NavbarMobile from './NavbarMobile';
import logo from '../../assets/logo-no-background.png';

/**
 * A navigation bar component that displays a logo, links, and user authentication status.
 * @component
 * @param {Object} props - Component props.
 * @param {string} props.backgroundColor - Background color of the navigation bar.
 * @param {Function} props.handleLogout - Function to handle user logout.
 * @param {Object} props.profile - User profile information.
 * @param {string} props.bgDesktop - Desktop background color.
 * @returns {JSX.Element} Navbar component.
 * @example
 * <Navbar backgroundColor='black' handleLogout={handleLogut profile={profile}}/>
 * */

const Navbar = ({ profile, backgroundColor, handleLogout }) => {
	const [openMenu, setOpenMenu] = useState(false);

	const { name, email, credits, avatar } = profile || {};

	return (
		<>
			<nav
				className='w-full p-5 flex justify-between items-center lg:p-6'
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
						<Link to='/listings'>Listings</Link>
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

				<div className='absolute z-30 right-6 lg:left-6 lg:hidden'>
					{!openMenu ? (
						<m.div
							className='flex gap-2 cursor-pointer'
							onClick={() => setOpenMenu(!openMenu)}
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.9 }}
						>
							<div className='hover:bg-gray rounded-full p-1'>
								<Bars3Icon className='h-8 w-8' />
							</div>
						</m.div>
					) : (
						<m.div
							className='flex flex-col items-center cursor-pointer'
							onClick={() => setOpenMenu(!openMenu)}
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.9 }}
						>
							<div className='hover:bg-gray rounded-full p-1'>
								<XMarkIcon className='h-8 w-8 hover:bg-gray rounded-full' />
							</div>
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
};

export default Navbar;
