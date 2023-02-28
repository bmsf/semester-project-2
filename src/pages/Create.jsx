import { useState } from 'react';
import { Link } from 'react-router-dom';

import CreateListing from '../api/CreateListing';
import Navbar from '../components/Navbar';

function Create({ handleLogout, profile }) {
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

		CreateListing(formData);
	};

	return (
		<>
			<Navbar handleLogout={handleLogout} profile={profile} />
			<main className='flex flex-col items-center h-screen w-full gap-5 mt-20'>
				<h1 className='text-xl'>Create an Auction Listing</h1>
				<form
					onSubmit={onSubmit}
					className='flex flex-col w-2/3 md:w-1/3 lg:w-2/5 space-y-2 md:space-y-6'
				>
					<div className='flex flex-col'>
						<label className='mb-2 text-sm font-medium'>Title*</label>
						<div className='relative '>
							<input
								id='title'
								className='w-full border border-black rounded-lg p-2.5 text-black'
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
					<div className='flex flex-col pb-2 w-2/4 lg:w-1/3'>
						<label className='mb-2 text-sm font-medium'>
							Auction End Date*
						</label>
						<div className='relative '>
							<input
								type='date'
								id='endsAt'
								className='w-full border border-black rounded-lg p-2.5 text-black'
								value={endsAt}
								onChange={onChange}
								required
								placeholder='"https://url.com/image.jpg"'
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
			</main>
		</>
	);
}

export default Create;
