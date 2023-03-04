import { useState } from 'react';
import { AnimatePresence, motion as m } from 'framer-motion';
import {
	UserCircleIcon,
	CircleStackIcon,
	UserIcon,
	ArrowLeftOnRectangleIcon,
	PlusCircleIcon,
	ChevronDownIcon,
	NewspaperIcon,
} from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

/**
 * @description
 * A component that displays the logged in menu options and handles user interactions
 * @component
 * @param {string} avatar - The URL of the user's avatar image
 * @param {string} name - The name of the logged in user
 * @param {function} handleLogout - The function to handle user logout
 * @param {number} credits - The number of credits that the user has
 * @returns {JSX.Element} - JSX element representing the LoggedInMenu component
 */

const LoggedInMenu = ({ avatar, name, handleLogout, credits }) => {
	const [openLoggedInMenu, setOpenLoggedInMenu] = useState(false);

	const handleBackdropClick = () => {
		setOpenLoggedInMenu(false);
	};

	return (
		<m.div className='hidden lg:flex items-center border rounded relative'>
			<div className='flex gap-1 p-3 border-r'>
				<p className=''>{credits}</p>
				<CircleStackIcon className='h-6 w-6' />
			</div>

			<div
				className='flex items-center gap-2 p-3 cursor-pointer z-50'
				onClick={() => setOpenLoggedInMenu(!openLoggedInMenu)}
			>
				{avatar ? (
					<img
						src={avatar}
						alt='User avatar'
						className='h-8 w-8 rounded-full'
					/>
				) : (
					<UserCircleIcon className='h-10 w-10' />
				)}
				<p>{name}</p>
				<ChevronDownIcon className='h-4 w-4' />
				<AnimatePresence>
					{openLoggedInMenu && (
						<>
							<m.div
								key='menu'
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								transition={{ duration: 0.2 }}
								onClick={handleBackdropClick}
								className='absolute z-50 top-20 right-0 bg-black text-white rounded-lg px-4 py-6  w-2/3'
							>
								<div className='left-[50%] absolute -top-3 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-4 h-4 bg-black -z-10'></div>

								<ul className='flex flex-col px-2 gap-5'>
									<li className='flex items-center justify-between cursor-pointer'>
										<div className='flex gap-2'>
											<UserIcon className='h-6 w-6' />
											<Link to='/profile' reloadDocument>
												Profile
											</Link>
										</div>
									</li>
									<li className='flex items-center justify-between cursor-pointer '>
										<div className='flex gap-1'>
											<PlusCircleIcon className='h-6 w-6' />
											<Link to='/create' reloadDocument>
												Create Listing
											</Link>
										</div>
									</li>
									<li className='flex items-center justify-between cursor-pointer border-b pb-5'>
										<div className='flex gap-2'>
											<NewspaperIcon className='h-6 w-6' />
											<Link to='/mylistings' reloadDocument>
												My Listings
											</Link>
										</div>
									</li>
									<li className='flex items-center justify-between cursor-pointer '>
										<div className='flex gap-2'>
											<ArrowLeftOnRectangleIcon className='h-6 w-6' />
											<Link to='/profile' reloadDocument onClick={handleLogout}>
												Sign out
											</Link>
										</div>
									</li>
								</ul>
							</m.div>
						</>
					)}
				</AnimatePresence>
			</div>
		</m.div>
	);
};

export default LoggedInMenu;
