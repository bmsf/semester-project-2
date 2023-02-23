import ProductCard from './ProductCard';

function LastChanceSection({ listings }) {
	return (
		<section className='py-32 mx-auto'>
			<h2 className='px-5 text-xl lg:pl-44'>Last chance</h2>
			<div className='grid mx-auto'>
				{listings.map((listing) => {
					const date = new Date(listing.endsAt).getTime();

					const now = new Date().getTime();

					const timeleft = date - now;

					const days = Math.floor(timeleft / (1000 * 60 * 60 * 24));

					return days < 1 ? (
						<ProductCard listing={listing} key={listing.id} />
					) : null;
				})}
			</div>
		</section>
	);
}

export default LastChanceSection;
