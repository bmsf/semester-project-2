import { Link } from 'react-router-dom';

import placeholder from '../assets/placeholder-image.png';
import calculateTimeRemaining from '../utils/calculateTimeRemaining';
import truncateDescription from '../utils/truncateDescription';

const ProductCard = ({ listing }) => {
	const { id, title, description, media, tags, endsAt } = listing;

	const timeRemaining = calculateTimeRemaining(endsAt);

	const { remainingDays, remainingHours, remainingMinutes } = timeRemaining;

	const bids = listing._count.bids;

	const display = truncateDescription(description, 10);

	return (
		<Link to={`/listings/${id}`}>
			<div className='bg-white overflow-hidden'>
				<div className='w-full flex justify-center'>
					{media.length > 0 ? (
						<img src={media} alt={title} />
					) : (
						<img src={placeholder} alt='image is missing' />
					)}
				</div>
				<div className='py-4'>
					<h3 className='text-lg font-bold'>{title}</h3>

					<p className='text-sm py-2'>{display}</p>

					<div className='mt-4 flex items-center justify-between'>
						<div>
							<p className='text-gray-500 text-sm'>
								Time Left:{' '}
								<span className='font-bold'>
									{remainingDays}d {remainingHours}h {remainingMinutes}m
								</span>
							</p>
							<p className='text-gray-500 text-sm'>
								Current bids: <span className='font-bold'>{bids}</span>
							</p>
						</div>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default ProductCard;
