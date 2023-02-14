import faucet from '../assets/faucet.png';

function Hero() {
	return (
		<div className='bg-primary h-screen'>
			<div className='w-12'>
				<img src={faucet} alt='image of example item' />
			</div>
		</div>
	);
}

export default Hero;
