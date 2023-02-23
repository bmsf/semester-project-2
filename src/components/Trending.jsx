import ProductCard from './ProductCard';

function Trending({ listings }) {
	return (
		<section className='py-32 mx-auto'>
			<h2 className='px-5 text-xl lg:pl-44'>Trending</h2>
			<div className='grid mx-auto'>
				{listings.map((listing) => {
					return listing._count.bids > 10 ? (
						<ProductCard listing={listing} key={listing.id} />
					) : null;
				})}
			</div>
		</section>
	);
}

export default Trending;
