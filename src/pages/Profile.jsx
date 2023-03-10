import { useState } from 'react';
import { UserCircleIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { AnimatePresence, motion as m } from 'framer-motion';

import { Navbar, Button, Footer } from '../components/index';
import updateAvatar from '../api/updateAvatar';

/**

A component that renders the user's profile and allows them to edit their avatar.
@param {Object} props - The component props.
@param {Function} props.handleLogout - The function to handle logout.
@param {Object} props.profile - The user profile object.
@param {string} props.token - The user authentication token.
@param {Function} props.updateProfile - The function to update the user profile.
@returns {JSX.Element} - The JSX code for the Profile component.
*/

const Profile = ({ handleLogout, profile, token, updateProfile }) => {
	const [openModal, setOpenModal] = useState(false);

	const { name, email, avatar } = profile || {};

	const handleBackdropClick = (e) => {
		if (e.target.id === 'backdrop') {
			setOpenModal(false);
		}
	};

	const [formData, setFormData] = useState({
		avatar: '',
	});

	const onChange = async (e) => {
		setFormData((prevState) => ({
			...prevState,
			[e.target.id]: e.target.value,
		}));
	};

	const onSubmit = async (e) => {
		e.preventDefault();

		updateAvatar(name, formData, updateProfile, token, profile);
	};

	return (
		<>
			<Navbar handleLogout={handleLogout} profile={profile} />
			<main className='flex flex-col items-center h-screen w-full mt-10'>
				<div className='flex flex-col md:flex-row items-center md:justify-between gap-4 md:w-2/3 lg:w-2/4 xl:w-1/3'>
					<div className='flex flex-col items-center'>
						<div>
							{!avatar ? (
								<UserCircleIcon className='h-16 w-16' />
							) : (
								<img
									src={avatar}
									alt='User avatar'
									className='h-16 w-16 rounded-full'
								/>
							)}
						</div>
						<div className='text-center '>
							<p className='capitalize text-3xl'>{name}</p>
							<p className='pb-3 font-thin text-md'>{email}</p>
						</div>
					</div>
					<Button
						children='Edit avatar'
						backgroundColor='transparent'
						borderColor='1px solid black'
						handleClick={() => setOpenModal(!openModal)}
					/>
				</div>
				<AnimatePresence>
					{openModal && (
						<>
							<m.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								transition={{ duration: 0.2, opacity: 1 }}
								onClick={handleBackdropClick}
								id='backdrop'
								className='overflow-y-hidden backdrop-blur-md bg-[#BCBCBF] overflow-x-hidden fixed top-0 right-0 left-0 z-50 h-screen flex items-center justify-center w-screen'
							>
								<div className='bg-white flex flex-col items-center p-12 h-full md:h-1/3  w-full md:w-2/3 lg:w-2/4 xl:w-1/3 rounded'>
									<div className='w-full flex flex-col gap-20 md:gap-10'>
										<div className='flex justify-between w-full'>
											<h2 className='self-center'>Change Avatar</h2>
											<XMarkIcon
												className='w-6 h-6 cursor-pointer'
												onClick={() => setOpenModal(!openModal)}
											/>
										</div>
										<form className='flex flex-col gap-2' onSubmit={onSubmit}>
											<div className='relative '>
												<input
													id='avatar'
													onChange={onChange}
													value={formData.avatar}
													className='w-full border border-black rounded-lg p-2.5 text-black'
													placeholder='"https://url.com/image.jpg"'
													title='The links need to be separated with a comma and without spaces'
												/>
											</div>

											<button
												className='rounded-md font-thin py-2 text-white bg-transparent text-lg border border-black bg-black w-full'
												type='submit'
											>
												Update avatar
											</button>
										</form>
									</div>
								</div>
							</m.div>
						</>
					)}
				</AnimatePresence>
			</main>
			<Footer />
		</>
	);
};

export default Profile;
