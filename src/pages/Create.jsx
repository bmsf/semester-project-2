import { useState } from 'react';

import { createListing } from '../api/index';
import { Footer, Navbar } from '../components/index';

/**

React Component for creating a new auction listing.
@component
@param {Object} props - Component props
@param {Function} props.handleLogout - Logout function
@param {Object} props.profile - User profile object
@returns {JSX.Element} - Rendered component
*/

const Create = ({ handleLogout, profile }) => {
	const [formData, setFormData] = useState({
		title: '',
		description: '',
		tags: '',
		media: '',
		endsAt: '',
	});

	const { title, description, tags, media, endsAt } = formData;

	const onChange = (e) => {
		setFormData((prevState) => ({
			...prevState,
			[e.target.id]: e.target.value,
		}));
	};

	const returnArray = (e) => {
		setFormData({
			...formData,
			[e.target.id]: e.target.value.split(' '),
		});
	};

	const onSubmit = async (e) => {
		e.preventDefault();
		if (formData.tags === '') {
			delete formData.tags;
		}
		createListing(formData);
	};

	return (
		<>
			<Navbar handleLogout={handleLogout} profile={profile} />
			<main>
				<div className='bg-[#F0F0F0] flex flex-col justify-center mt-12 items-center p-8 w-4/5 md:w-2/4 py-10 mx-auto rounded-lg gap-5'>
					<h1 className='text-xl'>Create an Auction Listing</h1>
					<form
						onSubmit={onSubmit}
						className='flex flex-col w-full lg:w-2/3 space-y-4 md:space-y-6 mb-10'
					>
						<div className='flex flex-col'>
							<label className='mb-2 text-sm font-medium'>Title*</label>
							<div className='relative '>
								<input
									id='title'
									className='w-full border border-black rounded-lg p-2.5 text-black -z-10'
									value={title}
									onChange={onChange}
									required
									placeholder='Macbook Pro'
									maxLength={280}
									title='The title has a max length of 280 characters'
								/>
							</div>
						</div>
						<div className='flex flex-col'>
							<label className='mb-2 text-sm font-medium text-black'>
								Description(optional)
							</label>
							<div className='relative'>
								<textarea
									id='description'
									rows='4'
									value={description}
									onChange={onChange}
									placeholder='2020 model with M1 processor'
									className=' border-black p-2.5 text-black w-full text-sm border  rounded-lg '
								></textarea>
							</div>
						</div>
						<div className='flex flex-col'>
							<label className='mb-2 text-sm font-medium'>Tags(optional)</label>
							<div className='relative '>
								<input
									id='tags'
									className='w-full border border-black rounded-lg p-2.5 text-black'
									value={tags}
									onChange={returnArray}
									placeholder='Electronics, Apple, Mac'
									pattern='^[a-zA-Z0-9]+(?:[,]+[a-zA-Z0-9]+){0,5}$'
									title='The tags need to be separated with a comma and without spaces'
								/>
							</div>
						</div>
						<div className='flex flex-col'>
							<label className='mb-2 text-sm font-medium'>
								Gallery Images(optional)
							</label>
							<div className='relative '>
								<input
									id='media'
									className='w-full border border-black rounded-lg p-2.5 text-black'
									value={media}
									onChange={returnArray}
									placeholder='"https://url.com/image.jpg"'
									title='The links need to be separated with a comma and without spaces'
								/>
							</div>
						</div>
						<div className='flex flex-col pb-2 w-3/4 lg:w-1/3'>
							<label className='mb-2 text-sm font-medium'>
								Auction End Date*
							</label>
							<div className='relative '>
								<input
									type='date'
									id='endsAt'
									className='w-full border border-black rounded-lg p-3 text-black'
									value={endsAt}
									onChange={onChange}
									required
									placeholder='01.01.2023'
									// pattern='^[a-zA-Z0-9]+(?:[,]+[a-zA-Z0-9]+){0,5}$'
									title='The tags need to be separated with a comma'
								/>
							</div>
						</div>
						<button
							className='rounded-md font-thin py-2 text-white bg-transparent text-lg border border-black bg-black w-full'
							type='submit'
						>
							Create Auction
						</button>
					</form>
				</div>
			</main>
			<div className='mt-20'>
				<Footer />
			</div>
		</>
	);
};

export default Create;
