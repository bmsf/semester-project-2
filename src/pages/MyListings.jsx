import { Navbar } from '../components/index';

const MyListings = ({ handleLogout, profile }) => {
	console.log(profile);
	return (
		<>
			<Navbar handleLogout={handleLogout} profile={profile} />
			<main className='flex flex-col items-center h-screen w-full mt-10'>
				<h1 className='text-2xl'>My Listings</h1>
			</main>
		</>
	);
};

export default MyListings;
