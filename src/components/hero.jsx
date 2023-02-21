import image1 from '../assets/Group 1.png';
import image2 from '../assets/Group 2.png';
import image3 from '../assets/Group 3.png';

function Hero() {
	const images = [
		{
			src: image1,
			alt: 'Image of faucet',
			styling: 'top-20 left-10 md:left-20 xl:left-2/4',
		},
		{
			src: image2,
			alt: 'Image of pen',
			styling: 'left-10 top-3/4 lg:left-1/3',
		},
		{
			src: image3,
			alt: 'Image of macbook',
			styling: 'bottom-10 -right-20 xl:left-3/4',
		},
	];
	return (
		<section className='bg-primary flex flex-col flex-1 items-center justify-center -z-10 relative'>
			{images.map((image, index) => (
				<div className='flex' key={index}>
					<div className={`absolute ${image.styling}`}>
						<img src={image.src} alt={`${image.alt}`} />
					</div>
				</div>
			))}
			<h1 className='font-title text-black text-6xl md:text-8xl lg:text-9xl font-light'>
				<span className='text-xl'>Auction</span>
				<br />
				BidCircle
			</h1>
		</section>
	);
}

export default Hero;
