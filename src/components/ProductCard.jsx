import image1 from '../assets/Group 1.png';
import image2 from '../assets/Group 2.png';

function ProductCard() {
	return (
		<div className='flex flex-col justify-center text-sm container'>
			<div className='bg-teal innerContainer'>
				<img
					src={image1}
					alt='Image of product is missing'
					className='mx-auto object-contain'
				/>
			</div>
			<p className='py-1'>MacBook Pro M1</p>
			<p className='py-1'>Highest bid: 799$</p>
			<p className='py-1'>Time left: 1h 32m</p>
		</div>
	);
}

export default ProductCard;
