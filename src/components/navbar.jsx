import { useState } from 'react';
import {
	UserCircleIcon,
	Bars3Icon,
	XMarkIcon,
	CircleStackIcon,
	UserIcon,
	ArrowLeftOnRectangleIcon,
	PlusCircleIcon,
} from '@heroicons/react/24/outline';
import { AnimatePresence, motion as m } from 'framer-motion';
import { Link } from 'react-router-dom';

import Button from './Button';
import logo from '../assets/logo-no-background.png';

function Navbar({ backgroundColor, handleLogout, profile, bgDesktop }) {
	const [openMenu, setOpenMenu] = useState(false);
	const [openLoggedInMenu, setOpenLoggedInMenu] = useState(false);

	const { name, email, credits, avatar } = profile || {};

	const handleBackdropClick = (e) => {
		// Check if the target element is the backdrop (i.e., has the 'backdrop' id)
		if (e.target.id === 'backdrop') {
			// Close the menu
			setOpenLoggedInMenu(false);
		}
	};

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
						<div className='relative'>
							{!avatar ? (
								<UserCircleIcon
									className='h-8 w-8 cursor-pointer'
									onClick={() => setOpenLoggedInMenu(!openLoggedInMenu)}
								/>
							) : (
								<img
									src={avatar}
									alt='User avatar'
									className='h-8 w-8 rounded-full'
									onClick={() => setOpenLoggedInMenu(!openLoggedInMenu)}
								/>
							)}
							<AnimatePresence>
								{openLoggedInMenu && (
									<>
										<m.div
											initial={{ opacity: 0 }}
											animate={{ opacity: 1 }}
											exit={{ opacity: 0 }}
											transition={{ duration: 0.2, opacity: 1 }}
											onClick={handleBackdropClick}
											id='backdrop'
											className='overflow-y-auto backdrop-blur-sm overflow-x-hidden fixed top-0 right-0 left-0 w-full md:inset-0 z-44'
										>
											<div className='bg-black text-white rounded-md py-10 items-center w-1/4 relative top-24 -right-[72%]'>
												<div className='left-[50%] absolute top-[-12px] transform -translate-x-1/2 translate-y-1/2 rotate-45 w-4 h-4 bg-black -z-10'></div>
												<div className='flex flex-col items-center'>
													<div className='flex flex-col items-center gap-2 px-10 border-b pb-8 '>
														<div>
															{!avatar ? (
																<UserCircleIcon
																	className='h-10 w-10 cursor-pointer'
																	onClick={() =>
																		setOpenLoggedInMenu(!openLoggedInMenu)
																	}
																/>
															) : (
																<img
																	src={avatar}
																	alt='User avatar'
																	className='h-8 w-8 rounded-full'
																	onClick={() =>
																		setOpenLoggedInMenu(!openLoggedInMenu)
																	}
																/>
															)}
														</div>
														<p className='capitalize'>{name}</p>
														<p className='pb-3 font-thin text-sm'>{email}</p>
														{/* <Button
															children='Manage your profile'
															backgroundColor='black'
															textColor='white'
															borderColor='1px solid white'
															// handleClick={}
														/> */}
													</div>

													<ul
														className='flex flex-col items-center gap-2 px-12 w-full pt-10
											'
													>
														<li className='flex'>
															<UserIcon className='h-6 w-6 absolute left-12' />
															<Link to='/profile'>Profile</Link>
														</li>
														<li className='flex py-6 border-b border-black w-full justify-center '>
															<PlusCircleIcon className='h-6 w-6  absolute left-12' />
															<Link to='/create' className='m'>
																Create listing
															</Link>
														</li>
														<li className='flex py-2'>
															<ArrowLeftOnRectangleIcon className='h-6 w-6  absolute left-12' />
															<Link to='/' className='' onClick={handleLogout}>
																Logout
															</Link>
														</li>
													</ul>
												</div>
											</div>
										</m.div>
									</>
								)}
							</AnimatePresence>
						</div>
						<p>Credit</p>
						<div className='flex gap-1 border-2 border-black py-1 px-3 mr-3 rounded-full '>
							<p className='text-#E1B530'>{credits}</p>
							<CircleStackIcon className='h-6 w-6' />
						</div>
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

				<div className='absolute z-40 right-6 lg:left-6 lg:hidden'>
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
							className='overflow-y-hidden backdrop-blur-sm overflow-x-hidden fixed w-full h-screen right-0 top-0'
						>
							<div className='bg-primary w-full h-full flex flex-col align-middle items-center text-center text-3xl gap-20'>
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
							</div>
						</m.div>
					</>
				)}
			</AnimatePresence>
		</>
	);
}

export default Navbar;
