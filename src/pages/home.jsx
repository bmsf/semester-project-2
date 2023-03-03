import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero';
import LastChanceSection from '../components/LastChanceSection';
import TrendingSection from '../components/Trending';
import Footer from '../components/Footer';

function Home({ handleLogout, profile, listings }) {
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
			<LastChanceSection listings={listings} />
			<TrendingSection listings={listings} />
			<Footer />
		</>
	);
}

export default Home;
