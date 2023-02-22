import image1 from '../assets/Group 1.png';
import image2 from '../assets/Group 2.png';

function ProductCard({ listing }) {
	const { id, title, description, media, tags } = listing;

	console.log(id);
	return (
		<>
			<div className='bg-teal innerContainer'>
				<img src={media} alt={title} className='mx-auto object-contain' />
			</div>
			<p className='py-1'>{title}</p>
			<p className='py-1'>Highest bid: 799$</p>
			<p className='py-1'>Time left: 1h 32m</p>
		</>
	);
}

export default ProductCard;
