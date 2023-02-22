import ProductCard from './ProductCard';

function LastChanceSection({ listings }) {
	console.log(listings);

	return (
		<section className='py-32 mx-auto'>
			<h2 className='px-5 text-xl lg:pl-44'>Last chance</h2>
			<div className='grid w-5/6 mx-auto'>
				{listings.map((listing) => (
					<div
						className='flex flex-col justify-center text-sm container'
						key={listings.id}
					>
						<ProductCard listing={listing} />
					</div>
				))}
			</div>
		</section>
	);
}

export default LastChanceSection;
