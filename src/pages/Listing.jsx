import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { BallTriangle } from 'react-loader-spinner';

import {
	ImageCarousel,
	Button,
	Navbar,
	InfoBox,
	Footer,
} from '../components/index';

import fetchProduct from '../api/fetchProduct';
import bid from '../api/bid';
import placeholder from '../assets/placeholder-image.png';
import MakeBidModal from '../components/layout/MakeBidModal';

const Product = ({ profile, handleLogout, token, updateProfile }) => {
	const { id } = useParams();

	const [product, setProduct] = useState(null);
	const [loading, setLoading] = useState(true);
	const [openModal, setOpenModal] = useState(false);
	const [formData, setFormData] = useState({
		amount: 0,
	});

	const handleClick = () => {
		setOpenModal(!openModal);
		setLoading(false);
	};

	useEffect(() => {
		const getProduct = async () => {
			const data = await fetchProduct(id);
			setProduct(data);
			setLoading(false);
		};
		getProduct();
	}, [id]);

	if (loading) {
		return (
			<div className='flex justify-center items-center h-screen'>
				<BallTriangle
					height={100}
					width={100}
					radius={5}
					color='#CACBD7'
					ariaLabel='ball-triangle-loading'
					wrapperClass={{}}
					wrapperStyle=''
					visible={true}
				/>
			</div>
		);
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
				`Please enter a valid bid amount higher than the current highest bid. Current highest: ${highestBid}`
			);
			return;
		}

		const newBid = { amount: newBidAmount };

		bid(id, newBid, token, profile, updateProfile);
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
							<>
								<Button
									children='Make bid'
									textColor='White'
									backgroundColor='black'
									handleClick={handleClick}
								/>
								<MakeBidModal
									open={openModal}
									handleClose={() => setOpenModal(!openModal)}
									highestBid={highestBid}
									onChange={onChange}
									onSubmit={onSubmit}
									formData={formData}
								/>
							</>
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
					<MakeBidModal
						open={openModal}
						handleClose={() => setOpenModal(!openModal)}
						highestBid={highestBid}
						onChange={onChange}
						onSubmit={onSubmit}
						formData={formData}
					/>
				</div>
			</div>
			<div className='mb-20 md:m-0'>
				<Footer />
			</div>
		</>
	);
};

export default Product;
