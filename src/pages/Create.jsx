import { useState } from 'react';
import { Link } from 'react-router-dom';
import { EyeIcon, LockClosedIcon, UserIcon } from '@heroicons/react/24/outline';

import Button from '../components/Button';
import LoginAuth from '../api/auth/LoginAuth';
import logo from '../assets/logo-no-background.png';

function Create() {
	const [formData, setFormData] = useState({
		title: '',
		description: '',
		tags: [],
		media: [],
	});

	const { title, description, tags, media } = formData;

	const onChange = (e) => {
		setFormData((prevState) => ({
			...prevState,
			[e.target.id]: e.target.value,
		}));
	};

	const onSubmit = async (e) => {
		e.preventDefault();
		console.log(formData);
	};

	return (
		<>
			<nav>
				<div className='w-16 m-5'>
					<Link to='/'>
						<img src={logo} alt='Image of logo' />
					</Link>
				</div>
			</nav>
			<main className='flex flex-col justify-center items-center h-screen w-full gap-5'>
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
								onChange={onChange}
								required
								placeholder='Electronics, Apple, Mac'
								pattern='^[a-zA-Z0-9]+(?:[,]+[a-zA-Z0-9]+){0,5}$'
								title='The tags need to be separated with a comma'
							/>
						</div>
					</div>
					<div className='flex flex-col'>
						<label className='mb-2 text-sm font-medium'>
							Gallery Images(optional)
						</label>
						<div className='relative '>
							<input
								id='tags'
								className='w-full border border-black rounded-lg p-2.5 text-black'
								value={media}
								onChange={onChange}
								required
								placeholder='"https://url.com/image.jpg"'
								pattern='^[a-zA-Z0-9]+(?:[,]+[a-zA-Z0-9]+){0,5}$'
								title='The tags need to be separated with a comma'
							/>
						</div>
					</div>
					<div className='flex flex-col pb-2 w-1/3'>
						<label className='mb-2 text-sm font-medium'>
							Auction End Date*
						</label>
						<div className='relative '>
							<input
								type='date'
								id='tags'
								className='w-full border border-black rounded-lg p-2.5 text-black'
								value={media}
								onChange={onChange}
								required
								placeholder='"https://url.com/image.jpg"'
								pattern='^[a-zA-Z0-9]+(?:[,]+[a-zA-Z0-9]+){0,5}$'
								title='The tags need to be separated with a comma'
							/>
						</div>
					</div>
					<Button
						backgroundColor='black'
						children='Create Auction'
						textColor='white'
						type='Submit'
						width='100%'
					/>
				</form>
			</main>
		</>
	);
}

export default Create;
