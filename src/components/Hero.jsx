import heroImage from '../assets/undraw_business_deal_re_up4u.svg';

const Hero = () => {
	return (
		<section className='bg-primary flex flex-col pb-20 lg:px-10 lg:pb-0 lg:flex-row flex-1 items-center justify-center -z-10 relative'>
			<div className='w-2/3 md:w-2/4 lg:w-2/4'>
				<img src={heroImage} alt='Svg image of two people doing a deal' />
			</div>
			<div className='w-2/3 md:w-3/4 lg:w-2/3'>
				<span>Auction</span>
				<h1 className='font-title text-black text-6xl md:text-8xl font-light'>
					BidCircle
				</h1>
				<p className='text-lg font-thin leading-relaxed pt-6 lg:w-5/6'>
					Welcome to BidCircle - the online auction site where you can buy and
					sell items for credits. Browse a wide selection of items, from
					electronics to fashion, and bid with ease. Sell your items for credits
					and use them to bid on other items you want. Join our community and
					start buying and selling today.
				</p>
			</div>
		</section>
	);
};

export default Hero;
