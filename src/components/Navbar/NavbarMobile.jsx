import {
	UserCircleIcon,
	UserIcon,
	ArrowLeftOnRectangleIcon,
	PlusCircleIcon,
	HomeIcon,
	BuildingLibraryIcon,
	ChevronRightIcon,
	NewspaperIcon,
} from '@heroicons/react/24/outline';
import { motion as m } from 'framer-motion';
import { Link } from 'react-router-dom';

import Button from '../Button';

/**
 * @description
 * A mobile navigation bar component that displays a menu for navigation
 * @component
 * @param {Object} props - The props object
 * @param {boolean} props.profile - A boolean indicating if the user has a profile
 * @param {string} props.avatar - The URL of the user's avatar
 * @param {string} props.name - The name of the user
 * @param {string} props.email - The email address of the user
 * @param {Function} props.handleLogout - A function to handle logout
 * @returns {JSX.Element} - A React component that displays a mobile navigation bar
 * @returns
 */

const NavbarMobile = ({ profile, avatar, name, email, handleLogout }) => {
	return (
		<>
			<m.div
				initial={{ x: '150%' }}
				animate={{ x: '0%' }}
				transition={{ duration: 0.75 }}
				exit={{ x: '150%' }}
				className='fixed bottom-0 w-full h-screen right-0 top-0 z-20'
			>
				<div className='bg-primary w-full h-full flex flex-col text-lg'>
					<div className='flex flex-col items-center mt-16'>
						{profile ? (
							<>
								<div>
									{!avatar ? (
										<UserCircleIcon className='h-12 w-12' />
									) : (
										<img
											src={avatar}
											alt='User avatar'
											className='h-12 w-12 rounded-full'
										/>
									)}
								</div>
								<div className='text-center'>
									<p className='capitalize text-xl'>{name}</p>
									<p className='pb-3 font-thin text-md'>{email}</p>
								</div>
							</>
						) : (
							<UserCircleIcon className='h-12 w-12' />
						)}
					</div>

					<ul className='flex flex-col gap-6 m-6 pb-10'>
						<Link to='/'>
							<li className='flex items-center justify-between cursor-pointer'>
								<div className='flex gap-6'>
									<HomeIcon className='h-6 w-6' />
									<p>Home</p>
								</div>
								<ChevronRightIcon className='h-6 w-6' />
							</li>
						</Link>

						<Link to='/listings' reloadDocument>
							<li className='flex items-center border-b pb-10 justify-between cursor-pointer'>
								<div className='flex gap-6 '>
									<BuildingLibraryIcon className='h-6 w-6' />
									<p> Listings</p>
								</div>
								<ChevronRightIcon className='h-6 w-6' />
							</li>
						</Link>

						{profile ? (
							<>
								<Link to='/profile' reloadDocument>
									<li className='flex  items-center justify-between cursor-pointer'>
										<div className='flex gap-6'>
											<UserIcon className='h-6 w-6' />

											<p>Profile</p>
										</div>
										<ChevronRightIcon className='h-6 w-6' />
									</li>
								</Link>

								<Link to='/create' reloadDocument>
									<li className='flex  items-center justify-between cursor-pointer'>
										<div className='flex gap-6'>
											<PlusCircleIcon className='h-6 w-6' />
											<p>Create Listing</p>
										</div>
										<ChevronRightIcon className='h-6 w-6' />
									</li>
								</Link>

								<Link to='/mylistings' reloadDocument>
									<li className='flex  items-center justify-between border-b pb-10 cursor-pointer'>
										<div className='flex gap-6'>
											<NewspaperIcon className='h-6 w-6' />
											<p>My listings</p>
										</div>
										<ChevronRightIcon className='h-6 w-6' />
									</li>
								</Link>

								<Link to='./' reloadDocument onClick={handleLogout}>
									<li className='flex  items-center justify-between cursor-pointer'>
										<div className='flex gap-6'>
											<ArrowLeftOnRectangleIcon className='h-6 w-6' />
											<p>Sign out</p>
										</div>
										<ChevronRightIcon className='h-6 w-6' />
									</li>
								</Link>
							</>
						) : (
							<div className='flex gap-5 justify-center mt-10'>
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
					</ul>
				</div>
			</m.div>
		</>
	);
};

export default NavbarMobile;
