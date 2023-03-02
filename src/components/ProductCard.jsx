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

	return (
		<Link to={`/products/${id}`}>
			<div className='flex flex-col justify-center items-center text-sm font-thin container'>
				<div className='bg-teal innerContainer text-sm'>
					{media ? (
						<img src={media} alt={title} className='mx-auto object-contain' />
					) : (
						<img src={placeholder} alt='there is no image for this auction' />
					)}
				</div>
				<div className='flex-1 textContainer'>
					<p className='pt-2 uppercase font-bold'>{title}</p>
					<p className='py-1 capitalize'>{description}</p>

					<p className='py-1'>
						Time Left: <span className='font-bold'>{remainingDays}d</span>
						<span className='pl-1 font-bold'>{remainingHours}h</span>
						<span className='font-bold pl-1'>{remainingMinutes}m</span>
					</p>
					<p className='py-1'>
						Current bids: <span className='font-bold'>{bids}</span>
					</p>
				</div>
			</div>
		</Link>
	);
}

export default ProductCard;
