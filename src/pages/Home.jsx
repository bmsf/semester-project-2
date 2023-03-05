import {
	Navbar,
	Hero,
	LastChanceSection,
	TrendingSection,
	Footer,
} from '../components/index';
/**
# React component for the home page of the application.
#
# @param {function} handleLogout - Function to handle user logout.
# @param {Object} profile - Object containing user profile information.
# @param {Array} listings - Array of listings to display on the page.
#
# @returns {JSX.Element} - React JSX element representing the home page.
##
 */

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
