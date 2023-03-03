import ProductCard from './ProductCard';

const LastChanceSection = ({ listings }) => {
	return (
		<section className='py-32 mx-auto mt-20 lg:mt-0'>
			<h2 className='px-5 text-xl pl-10 lg:pl-44'>Last chance</h2>
			<div className='grid mx-auto'>
				{listings
					.filter((listing) => {
						const date = new Date(listing.endsAt).getTime();
						const now = new Date().getTime();
						const timeleft = date - now;
						const remainingDays = Math.floor(timeleft / (1000 * 60 * 60 * 24));
						return remainingDays < 2;
					})
					.slice(0, 4)
					.map((listing) => (
						<ProductCard listing={listing} key={listing.id} />
					))}
			</div>
		</section>
	);
};

export default LastChanceSection;
