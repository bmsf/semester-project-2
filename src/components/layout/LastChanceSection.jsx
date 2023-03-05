import ListingCard from '../ListingCard';
import calculateTimeRemaining from '../../utils/calculateTimeRemaining';

/**
 * Renders a section of "last chance" listings, showing listings that have less than 2 days remaining.
 * @param {Object[]} listings - An array of listing objects to be rendered.
 * @param {number} listings[].id - The unique ID of the listing.
 * @param {string} listings[].title - The title of the listing.
 * @param {string} listings[].description - The description of the listing.
 * @param {string} listings[].image - The URL of the image for the listing.
 * @param {number} listings[].price - The price of the listing in credits.
 * @param {string} listings[].endsAt - The date and time when the listing ends, in ISO 8601 format.
 * @returns {JSX.Element} - A section component displaying "last chance" listings.
 */

const LastChanceSection = ({ listings }) => {
	return (
		<section className='py-32 mx-auto mt-20 lg:mt-0'>
			<h2 className='text-2xl'>Last chance</h2>
			<div className='grid mx-auto'>
				{listings
					.filter((listing) => {
						const timeleft = calculateTimeRemaining(listing.endsAt);
						return timeleft.remainingDays < 2;
					})
					.slice(0, 4)
					.map((listing) => (
						<ListingCard listing={listing} key={listing.id} />
					))}
			</div>
		</section>
	);
};

export default LastChanceSection;
