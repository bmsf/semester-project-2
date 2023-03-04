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
			<div className='mx-20'>
				<LastChanceSection listings={listings} />
				<TrendingSection listings={listings} />
			</div>
			<Footer />
		</>
	);
};

export default Home;
