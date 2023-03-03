import {
	Navbar,
	Hero,
	LastChanceSection,
	TrendingSection,
	Footer,
} from '../components/index';

const Home = ({ handleLogout, profile, listings }) => {
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
};

export default Home;
