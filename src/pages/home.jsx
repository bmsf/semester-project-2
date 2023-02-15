import FeaturedProducts from '../components/FeaturedProducts';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';

function Home() {
	return (
		<main>
			<div className='flex flex-col h-screen'>
				<Navbar backgroundColor='#CACBD7' />
				<Hero />
			</div>
			<FeaturedProducts />
			<Footer />
		</main>
	);
}

export default Home;
