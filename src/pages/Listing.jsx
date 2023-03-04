import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { motion as m, AnimatePresence } from 'framer-motion';

import {
	ImageCarousel,
	Button,
	Navbar,
	InfoBox,
	Footer,
} from '../components/index';

import FetchProduct from '../api/fetchProduct';
import bid from '../api/bid';
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

		const highestBid = findHighestBid(bids);
		const newBidAmount = parseFloat(formData.amount);

		if (!newBidAmount || newBidAmount <= highestBid.amount) {
			alert(
				'Please enter a valid bid amount higher than the current highest bid'
			);
			return;
		}

		bid(id, formData);
	};

	return (
		<>
			<Navbar handleLogout={handleLogout} profile={profile} />
			<div className='flex flex-col items-center lg:flex-row xl:justify-around m-20'>
				<div className='mb-8 lg:mr-10 lg:w-2/5'>
					{media.length > 0 ? (
						<ImageCarousel media={media} />
					) : (
						<div className='w-full border rounded-lg border-gray'>
							<img src={placeholder} alt='image is missing' />
						</div>
					)}
				</div>
				<div className='flex flex-col  border rounded-md m-10 lg:m-0 mx-auto border-gray w-full lg:w-3/5 xl:w-3/5'>
					<div className='border-b border-gray w-full flex flex-between p-8'>
						<h1 className='text-xl font-bold'>{title}</h1>
					</div>
					<InfoBox title='Details' children={description} />
					<InfoBox title='Seller' children={seller.name} />
					<InfoBox title='Time left' endsAt={endsAt} />
					<div
						className='hidden lg:flex justify-between items-center py-12
					px-3 xl:px-8'
					>
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
						{profile ? (
							<Button
								children='Make bid'
								textColor='White'
								backgroundColor='black'
								handleClick={handleClick}
							/>
						) : (
							<p className='text-black'>
								<Link className='font-bold' to='/login'>
									Login
								</Link>{' '}
								to make bid
							</p>
						)}
					</div>
				</div>
				<div className='bg-white w-full h-20 px-6 py-2 flex justify-between items-center lg:hidden text-gray-font fixed bottom-0 shadow-lg z-10 border-t border-gray-99'>
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
									<div className='bg-white flex flex-col items-center p-12 justify-center h-full md:h-1/3  w-full md:w-2/3 lg:w-2/4 xl:w-1/3 rounded'>
										<div className='w-full flex flex-col gap-20 md:gap-10'>
											<div className='flex justify-between w-full'>
												<h2 className='self-center'>Make a bid</h2>

												<div className='hover:bg-gray rounded-full p-1'>
													<XMarkIcon
														className='h-8 w-8 hover:bg-gray rounded-full cursor-pointer'
														onClick={() => setOpenModal(!openModal)}
													/>
												</div>
											</div>
											<form className='flex flex-col gap-2' onSubmit={onSubmit}>
												<div className='relative '>
													<input
														type='number'
														id='amount'
														placeholder={`Current highest bid: ${
															highestBid ? highestBid.amount : 'No bids'
														}`}
														onChange={onChange}
														value={formData.amount}
														className='w-full border border-black rounded-lg p-2.5 text-black'
														title='The bid needs to be a number without space or any signs'
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
			<div className='mb-20 md:m-0'>
				<Footer />
			</div>
		</>
	);
};

export default Product;
