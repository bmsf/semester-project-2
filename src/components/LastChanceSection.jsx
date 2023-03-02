import ProductCard from './ProductCard';

function LastChanceSection({ listings }) {
	return (
		<section className='py-32 mx-auto md:mt-20 lg:mt-0'>
			<h2 className='px-5 text-xl pl-10'>Last chance</h2>
			<div className='grid mx-auto'>
				{listings
					.map((listing) => {
						const date = new Date(listing.endsAt).getTime();

						const now = new Date().getTime();

						const timeleft = date - now;

						const remainingDays = Math.floor(timeleft / (1000 * 60 * 60 * 24));

						return remainingDays < 1 ? (
							<ProductCard listing={listing} key={listing.id} />
						) : null;
					})
					.slice(2)}
			</div>
		</section>
	);
}

export default LastChanceSection;
