import ProductCard from './ProductCard';

function LastChanceSection({ listings }) {
	return (
		<section className='py-32 mx-auto'>
			<h2 className='px-5 text-xl lg:pl-44'>Last chance</h2>
			<div className='grid mx-auto'>
				{listings.map((listing) => (
					<ProductCard listing={listing} key={listing.id} />
				))}
			</div>
		</section>
	);
}

export default LastChanceSection;
