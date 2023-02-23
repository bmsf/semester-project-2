import image1 from '../assets/Group 1.png';
import image2 from '../assets/Group 2.png';
import image3 from '../assets/Group 3.png';

import heroImage from '../assets/undraw_business_deal_re_up4u.svg';

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
		<section className='bg-primary flex flex-1 items-center justify-center -z-10 relative gap-10'>
			{/* {images.map((image, index) => (
				<div className='flex' key={index}>
					<div className={`absolute ${image.styling}`}>
						<img src={image.src} alt={`${image.alt}`} />
					</div>
				</div>
			))} */}

			<div className='w-2/4'>
				<span>Auction</span>
				<h1 className='font-title text-black text-6xl md:text-8xl lg:text-9xl font-light'>
					BidCircle
				</h1>
				<p className='text-lg font-thin leading-relaxed pt-6'>
					Welcome to BidCircle - the online auction site where you can buy and
					sell items for credits. Browse a wide selection of items, from
					electronics to fashion, and bid with ease. Sell your items for credits
					and use them to bid on other items you want. Join our community and
					start buying and selling today.
				</p>
			</div>
			<div className='w-1/4'>
				<img src={heroImage} alt='Svg image of two people doing a deal' />
			</div>
		</section>
	);
}

export default Hero;
