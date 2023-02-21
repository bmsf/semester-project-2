import FeaturedProducts from '../components/FeaturedProducts';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';

function Home({ handleLogout, profile }) {
	return (
		<>
			<Navbar handleLogout={handleLogout} profile={profile} />
			<main>
				<Hero />
				<FeaturedProducts />
				<Footer />
			</main>
		</>
	);
}

export default Home;
