import ListingCard from '../ListingCard';
import calculateTimeRemaining from '../../utils/calculateTimeRemaining';

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
