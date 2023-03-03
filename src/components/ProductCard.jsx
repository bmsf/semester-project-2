import { Link } from 'react-router-dom';

import placerholder from '../assets/placeholder-image.png';

function ProductCard({ listing }) {
	const { id, title, description, media, tags, endsAt } = listing;

	const date = new Date(endsAt).getTime();

	const now = new Date().getTime();

	let timeleft = date - now;

	const remainingDays = Math.floor(timeleft / (1000 * 60 * 60 * 24));
	const remainingHours = Math.floor(
		(timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
	);
	const remainingMinutes = Math.floor(
		(timeleft % (1000 * 60 * 60)) / (1000 * 60)
	);

	const bids = listing._count.bids;

	const mediaSrc = media || placeholder;

	//Reducing the amount of words shown by description
	const descriptionWords = description.split(' ');

	const truncatedDescription = descriptionWords.slice(0, 10).join(' ');

	const displayDescription =
		descriptionWords.length > 10
			? truncatedDescription + '...'
			: truncatedDescription;

	return (
		<Link to={`/products/${id}`}>
			<div className='bg-white container rounded-lg overflow-hidden  hover:shadow-lg transition-shadow duration-300'>
				<div className='innerContainer w-full h-full overflow-hidden border-gray border'>
					{mediaSrc ? (
						<img
							src={mediaSrc}
							alt={title}
							className='w-full h-full object-cover'
						/>
					) : (
						<div className='w-full h-full bg-gray-200'></div>
					)}
				</div>
				<div className='py-4'>
					<h3 className='text-lg font-bold'>{title}</h3>

					<p className='text-sm py-2'>{displayDescription}</p>

					<div className='mt-4 flex items-center justify-between'>
						<div>
							<p className='text-gray-500 text-sm'>
								Time Left:{' '}
								<span className='font-bold'>
									{remainingDays}d {remainingHours}h {remainingMinutes}m
								</span>
							</p>
							<p className='text-gray-500 text-sm'>
								Current bids: <span className='font-bold'>{bids}</span>
							</p>
						</div>
					</div>
				</div>
			</div>
		</Link>
	);
}

export default ProductCard;
