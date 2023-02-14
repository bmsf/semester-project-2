import Hero from '../components/Hero';
import Navbar from '../components/Navbar';

function Home() {
	return (
		<div className='relative'>
			<Navbar backgroundColor='#CACBD7' />
			<Hero />
		</div>
	);
}

export default Home;
