import ListingCard from '../ListingCard';

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
