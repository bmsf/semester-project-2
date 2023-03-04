import ProductCard from '../ProductCard';

const Trending = ({ listings }) => {
	return (
		<section className='py-32 mx-auto'>
			<h2 className='px-5 text-xl lg:pl-44'>Trending</h2>
			<div className='grid mx-auto'>
				{listings
					.filter((listing) => listing._count.bids > 6)
					.slice(0, 4)
					.map((listing) => (
						<ProductCard listing={listing} key={listing.id} />
					))}
			</div>
		</section>
	);
};

export default Trending;
