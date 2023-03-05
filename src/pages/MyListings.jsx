import { useEffect, useState } from 'react';
import { Navbar } from '../components';
import getListings from '../api/getListings';
import deleteListing from '../api/deleteListing';
import placeholder from '../assets/placeholder-image.png';

const MyListings = ({ handleLogout, profile }) => {
	const [listings, setListings] = useState([]);
	const { name } = profile;

	const handleDelete = async (listingId) => {
		try {
			await deleteListing(listingId);
			
		} catch (error) {
			console.log(`Error deleting listing ${listingId}: ${error}`);
		}
	};

	useEffect(() => {
		const fetchListings = async () => {
			const data = await getListings(name);
			setListings(data.listings);
		};

		fetchListings();
	}, [name]);

	return (
		<>
			<Navbar handleLogout={handleLogout} profile={profile} />
			<main className='flex flex-col items-center h-screen w-full mt-10'>
				<h1 className='text-2xl'>My Listings</h1>
				<div className='flex flex-col gap-2 mt-10 w-full md:w-2/3 lg:w-2/3 my-2'>
					{listings.map((listing) => (
						<div
							key={listing.id}
							className='bg-white border border-gray rounded-lg shadow-md p-10 mx-4 flex flex-col justify-between'
						>
							<div>
								<h2 className='text-xl font-semibold'>{listing.title}</h2>
								<p>{listing.description}</p>
							</div>
							<div className='mt-4 flex justify-end gap-3'>
								<button className='bg-black text-white rounded-lg px-4 py-2 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'>
									Edit
								</button>
								<button
									className='bg-white text-black border rounded-lg px-4 py-2 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
									onClick={() => handleDelete(listing.id)}
								>
									Delete
								</button>
							</div>
						</div>
					))}
				</div>
			</main>
		</>
	);
};

export default MyListings;
