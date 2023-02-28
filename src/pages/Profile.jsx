import { useState } from 'react';
import { UserCircleIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { AnimatePresence, motion as m } from 'framer-motion';

import Navbar from '../components/Navbar';
import Button from '../components/Button';
import { API_AUCTION_URL } from '../api/Constants';

function Profile({ handleLogout, profile, token, updateProfile }) {
	const [openModal, setOpenModal] = useState(false);

	const { name, email, credits, avatar } = profile || {};

	const handleBackdropClick = (e) => {
		// Check if the target element is the backdrop (i.e., has the 'backdrop' id)
		if (e.target.id === 'backdrop') {
			// Close the menu
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

	const action = `/profiles/${name}/media`;
	const method = 'put';
	const updateMediaURL = API_AUCTION_URL + action;

	const onSubmit = async (e) => {
		e.preventDefault();

		try {
			const response = await fetch(updateMediaURL, {
				method: method,
				headers: {
					'Content-Type': 'application/json',
					Authorization: `bearer ${token}`,
				},
				body: JSON.stringify(formData),
			});
			if (response.ok) {
				const updatedProfile = {
					...profile,
					avatar: formData.avatar,
				};
				updateProfile(updatedProfile);

				window.location.reload(true);
			}
			if (!response.ok) {
				alert("The image didn't get updated, please try again");
			}
		} catch (error) {
			alert("The image didn't get updated, please try again");
		}
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
						<div className='text-center md:text-left'>
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
		</>
	);
}
export default Profile;
