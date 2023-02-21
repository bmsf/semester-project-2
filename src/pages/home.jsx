import FeaturedProducts from '../components/FeaturedProducts';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';

function Home({ handleLogout, profile }) {
	return (
		<>
			<div className='flex flex-col h-screen'>
				<Navbar
					handleLogout={handleLogout}
					profile={profile}
					backgroundColor='#CACBD7'
				/>
				<Hero />
			</div>
			<FeaturedProducts />
			<Footer />
		</>
	);
}

export default Home;
