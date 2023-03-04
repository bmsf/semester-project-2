import { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

import Navbar from '../components/Navbar/Navbar';
import ListingCard from '../components/ListingCard';

const Listings = ({ handleLogout, profile, listings }) => {
	const listingsPerPage = 16;
	const [currentPage, setCurrentPage] = useState(1);
	const totalPages = Math.ceil(listings.length / listingsPerPage);
	const startIndex = (currentPage - 1) * listingsPerPage;
	const endIndex = startIndex + listingsPerPage;
	const currentListings = listings.slice(startIndex, endIndex);

	const handleNextPage = () => {
		setCurrentPage(currentPage + 1);
		window.scrollTo(0, 0);
	};

	const handlePrevPage = () => {
		setCurrentPage(currentPage - 1);
		window.scrollTo(0, 0);
	};

	const handlePageClick = (page) => {
		setCurrentPage(page);
		window.scrollTo(0, 0);
	};

	const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

	return (
		<>
			<Navbar handleLogout={handleLogout} profile={profile} />
			<main className='m-20'>
				<h1 className='text-xl'>All listings</h1>
				<div className='grid mx-auto'>
					{currentListings.map((listing) => (
						<ListingCard listing={listing} key={listing.id} />
					))}
				</div>
				{totalPages > 1 && (
					<div className='flex justify-center items-center mt-20 '>
						{currentPage > 1 ? (
							<button
								onClick={handlePrevPage}
								className='mr-5 flex items-center gap-2'
							>
								<ChevronLeftIcon className='h-4 w-4' />
								<span className='text-sm'>Previous</span>
							</button>
						) : (
							<button
								disabled
								className='mr-5 flex items-center gap-2 text-gray'
							>
								<ChevronLeftIcon className='h-4 w-4' />
								<span className='text-sm'>Previous</span>
							</button>
						)}
						{pages.map((page) => (
							<button
								key={page}
								onClick={() => handlePageClick(page)}
								className={`mx-2 py-1 px-3 rounded-full ${
									currentPage === page ? ' font-bold border' : ''
								}`}
							>
								{page}
							</button>
						))}
						{currentPage < totalPages ? (
							<button
								onClick={handleNextPage}
								className='ml-5 flex items-center'
							>
								<span className='text-sm'>Next</span>
								<ChevronRightIcon className='h-4 w-4' />
							</button>
						) : (
							<button disabled className='ml-5 flex items-center text-gray'>
								<span className='text-sm'>Next</span>
								<ChevronRightIcon className='h-4 w-4' />
							</button>
						)}
					</div>
				)}
			</main>
		</>
	);
};

export default Listings;
