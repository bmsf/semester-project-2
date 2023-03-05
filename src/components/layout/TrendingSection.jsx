import ListingCard from '../ListingCard';

/**
 * A component that displays a section of trending listings.
 *
 * @param {Object[]} listings - An array of listing objects to display.
 * @param {string} listings.id - The unique ID of the listing.
 * @param {string} listings.title - The title of the listing.
 * @param {string} listings.description - The description of the listing.
 * @param {string} listings.image - The URL of the listing's image.
 * @param {string} listings.endsAt - The timestamp for when the listing ends.
 * @param {Object} listings._count - The count object for the listing, containing bid count and watch count.
 * @param {number} listings._count.bids - The number of bids on the listing.
 * @param {number} listings._count.watches - The number of watches on the listing.
 *
 * @returns {JSX.Element} A JSX element that displays the trending listings section.
 */

const TrendingSection = ({ listings }) => {
	return (
		<section className='py-32 mx-auto'>
			<h2 className='text-xl'>Trending</h2>
			<div className='grid mx-auto'>
				{listings
					.filter((listing) => listing._count.bids > 6)
					.slice(0, 4)
					.map((listing) => (
						<ListingCard listing={listing} key={listing.id} />
					))}
			</div>
		</section>
	);
};

export default TrendingSection;
