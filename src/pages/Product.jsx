import { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import {
	ChevronRightIcon,
	ChevronLeftIcon,
	XMarkIcon,
} from '@heroicons/react/24/outline';
import { motion as m, AnimatePresence } from 'framer-motion';

import FetchProduct from '../api/FetchProduct';
import Bid from '../api/Bid';
import ImageCarousel from '../components/ImageCarousel';
import Button from '../components/Button';
import Navbar from '../components/Navbar';
import placeholder from '../assets/placeholder-image.png';

function Product({ profile, handleLogout }) {
	const { id } = useParams();

	const [product, setProduct] = useState(null);
	const [loading, setLoading] = useState(true);
	const [openModal, setOpenModal] = useState(false);
	const [formData, setFormData] = useState({
		amount: '',
	});

	const handleClick = () => {
		setOpenModal(!openModal);
		setLoading(false);
	};

	const handleBackdropClick = (e) => {
		// Check if the target element is the backdrop (i.e., has the 'backdrop' id)
		if (e.target.id === 'backdrop') {
			// Close the menu
			setOpenModal(false);
		}
	};

	useEffect(() => {
		const getProduct = async () => {
			const data = await FetchProduct(id);
			setProduct(data);
			setLoading(false);
		};
		getProduct();
	}, [id]);

	if (loading) {
		return <div>Loading...</div>;
	}

	const { title, description, endsAt, media, seller, bids } = product;

	const findHighestBid = (bids) => {
		return bids.reduce(
			(highestBid, bid) => {
				if (highestBid.amount === null || bid.amount > highestBid.amount) {
					return { amount: bid.amount, bidderName: bid.bidderName };
				} else {
					return highestBid;
				}
			},
			{ amount: null, bidderName: null }
		);
	};

	const highestBid = findHighestBid(bids);

	const onChange = async (e) => {
		setFormData((prevState) => ({
			...prevState,
			[e.target.id]: e.target.value,
		}));
	};

	const onSubmit = async (e) => {
		e.preventDefault();

		console.log(formData);
		Bid(id, formData);

		// UpdateAvatar(name, formData, updateProfile, token, profile);
	};

	return (
		<>
			<Navbar handleLogout={handleLogout} profile={profile} />
			<div className='flex flex-col items-center'>
				{media.length > 0 ? (
					<ImageCarousel
						description={description}
						endsAt={endsAt}
						media={media}
					/>
				) : (
					<div className='w-screen md:w-1/3 md:m-10 border-b border-t'>
						<img src={placeholder} alt='image is missing' />
					</div>
				)}

				<div className='flex flex-col  border rounded-md m-10 border-gray'>
					<div className='border-b border-gray w-full flex flex-between'>
						<h1 className='p-4 text-xl font-bold'>{title}</h1>
					</div>
					<div className='flex justify-between items-center p-4 border-b border-gray'>
						<div className='flex flex-col'>
							<p>Details</p>
						</div>
						<ChevronRightIcon className='h-4 w-4' />
					</div>
					<div className='flex justify-between items-center p-4'>
						<div className='flex flex-col'>
							<p>Seller</p>
							{/* <p>{seller.name}</p> */}
						</div>
						<ChevronRightIcon className='h-4 w-4' />
					</div>
				</div>
				<div className='bg-white w-full h-20 px-6 py-2 flex justify-between items-center text-gray-font fixed bottom-0 shadow-lg z-40 border-t border-gray-99'>
					<div className='flex flex-col '>
						<p>
							Current highest bid:{' '}
							<span className='font-bold'>
								{highestBid.amount ?? 'No bids'}
							</span>
						</p>
						<p className='text-sm'>By: {highestBid.bidderName ?? 'No bids'}</p>
					</div>
					<Button
						children='Make bid'
						textColor='White'
						backgroundColor='black'
						handleClick={handleClick}
					/>
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
												<h2 className='self-center'>Make a bid</h2>
												<XMarkIcon
													className='w-6 h-6 cursor-pointer'
													onClick={() => setOpenModal(!openModal)}
												/>
											</div>
											<form className='flex flex-col gap-2' onSubmit={onSubmit}>
												<div className='relative '>
													<input
														id='amount'
														onChange={onChange}
														value={formData.amount}
														className='w-full border border-black rounded-lg p-2.5 text-black'
														placeholder='"https://url.com/image.jpg"'
														title='The links need to be separated with a comma and without spaces'
													/>
												</div>

												<button
													className='rounded-md font-thin py-2 text-white bg-transparent text-lg border border-black bg-black w-full'
													type='submit'
												>
													Place Bid
												</button>
											</form>
										</div>
									</div>
								</m.div>
							</>
						)}
					</AnimatePresence>
				</div>
			</div>
		</>
	);
}

export default Product;
