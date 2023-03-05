import { Link } from 'react-router-dom';

import placeholder from '../assets/placeholder-image.png';
import calculateTimeRemaining from '../utils/calculateTimeRemaining';
import truncateDescription from '../utils/truncateDescription';

/**
 * Renders a product card component with title, image, description, time left, and current bids.
 * @param {Object} props - The props object for the component.
 * @param {Object} props.listing - The listing object containing information about the product.
 * @param {string} props.listing.id - The unique ID of the product.
 * @param {string} props.listing.title - The title of the product.
 * @param {string} props.listing.description - The description of the product.
 * @param {string} props.listing.media - The URL of the product image.
 * @param {string[]} props.listing.tags - An array of tags associated with the product.
 * @param {Date} props.listing.endsAt - The date and time when the auction for the product ends.
 * @returns {JSX.Element} - Returns a JSX element of the product card component.
 */

const ListingCard = ({ listing }) => {
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

export default ListingCard;
