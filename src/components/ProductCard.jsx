function ProductCard({ listing }) {
	const { id, title, description, media, tags, endsAt } = listing;

	const date = new Date(endsAt).getTime();

	const now = new Date().getTime();

	const timeleft = date - now;

	const days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
	const hours = Math.floor(
		(timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
	);
	const minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));

	const bids = listing._count.bids;

	return (
		<>
			<div className='flex flex-col justify-center items-center text-sm container'>
				<div className='bg-teal innerContainer text-sm'>
					<img src={media} alt={title} className='mx-auto object-contain' />
				</div>
				<div className='flex-1 textContainer'>
					<p className='pt-2 uppercase'>{title}</p>
					<p className='py-1 capitalize'>{description}</p>

					<p className='py-1'>
						Time Left: <span>{days}d</span>
						<span className='pl-1'>{hours}h</span>
						<span className='pl-1'>{minutes}m</span>
					</p>
					<p className='py-1'>Current bids: {bids}</p>
				</div>
			</div>
		</>
	);
}

export default ProductCard;
