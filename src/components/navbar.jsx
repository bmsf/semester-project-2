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

function Navbar({ backgroundColor, handleLogout, profile }) {
	const [openMenu, setOpenMenu] = useState(false);
	const [openLoggedInMenu, setOpenLoggedInMenu] = useState(false);

	const { name, email, credits, avatar } = profile || {};

	openMenu
		? (document.body.style.overflow = 'hidden')
		: (document.body.style.overflow = 'unset');

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
											initial={{ opacity: 0, y: '70px', x: '70%' }}
											animate={{ opacity: 1 }}
											exit={{ opacity: 0 }}
											transition={{ duration: 0.2, opacity: 1 }}
											className='absolute right-16 -top-5'
										>
											<div className='w-full '>
												<div className='bg-white rounded-md py-10 items-center'>
													<div className='left-[49%] absolute top-[-12px] transform -translate-x-1/2 translate-y-1/2 rotate-45 w-4 h-4 bg-white -z-10'></div>
													<div className='flex flex-col'>
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
															<Button children='Manage your profile' />
														</div>
														<ul className='flex flex-col  gap-2 px-8 w-full pt-4'>
															<li className='flex h-12 py-6'>
																<UserIcon className='h-6 w-6 text-gray' />
																<Link to='/' className='pl-8'>
																	Profile
																</Link>
															</li>
															<li className='flex h-12 py-6'>
																<PlusCircleIcon className='h-6 w-6 text-success' />
																<Link to='/create' className='pl-8'>
																	Create listing
																</Link>
															</li>
															<li className='flex h-12 py-6'>
																<ArrowLeftOnRectangleIcon className='h-6 w-6 text-decline' />
																<Link
																	to='/'
																	className='pl-8'
																	onClick={handleLogout}
																>
																	Logout
																</Link>
															</li>
														</ul>
													</div>
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
							className='overflow-y-hidden backdrop-blur-sm overflow-x-hidden fixed w-full h-screen right-0 top-0  z-40'
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
										handleClick={handleLogout}
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
