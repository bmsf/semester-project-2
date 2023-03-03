import { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { motion as m, AnimatePresence } from 'framer-motion';

import { ImageCarousel, Button, Navbar, InfoBox } from '../components/index';

import FetchProduct from '../api/FetchProduct';
import Bid from '../api/Bid';
import placeholder from '../assets/placeholder-image.png';

const Product = ({ profile, handleLogout }) => {
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

		Bid(id, formData);
	};

	return (
		<>
			<Navbar handleLogout={handleLogout} profile={profile} />
			<div className='flex flex-col gap-12 mt-10 mb-32 lg:flex-row lg:justify-between xl:justify-around lg:mx-20'>
				<div className='mb-20'>
					{media.length > 0 ? (
						<ImageCarousel media={media} />
					) : (
						<div className='w-screen md:w-1/3 md:m-10 border-b border-t'>
							<img src={placeholder} alt='image is missing' />
						</div>
					)}
				</div>
				<div className='flex flex-col  border rounded-md m-10 lg:m-0 mx-auto border-gray w-3/4 lg:w-3/5 xl:w-2/5'>
					<div className='border-b border-gray w-full flex flex-between p-8'>
						<h1 className='text-xl font-bold'>{title}</h1>
					</div>
					<InfoBox title='Details' children={description} />
					<InfoBox title='Seller' children={seller.name} />
					<InfoBox title='Time left' children={endsAt} />
					<div className='hidden lg:flex justify-between items-center px-6 h-full'>
						<div className='flex flex-col'>
							<p>
								Current highest bid:{' '}
								<span className='font-bold'>
									{highestBid.amount ?? 'No bids'}
								</span>
							</p>
							<p className='text-sm'>
								By: {highestBid.bidderName ?? 'No bids'}
							</p>
						</div>
						{profile && (
							<Button
								children='Make bid'
								textColor='White'
								backgroundColor='black'
								handleClick={handleClick}
							/>
						)}
					</div>
				</div>
				<div className='bg-white w-full h-20 px-6 py-2 flex justify-between items-center lg:hidden text-gray-font fixed bottom-0 shadow-lg z-40 border-t border-gray-99'>
					<div className='flex flex-col '>
						<p>
							Current highest bid:{' '}
							<span className='font-bold'>
								{highestBid.amount ?? 'No bids'}
							</span>
						</p>
						<p className='text-sm'>By: {highestBid.bidderName ?? 'No bids'}</p>
					</div>
					{profile && (
						<Button
							children='Make bid'
							textColor='White'
							backgroundColor='black'
							handleClick={handleClick}
						/>
					)}
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
};

export default Product;