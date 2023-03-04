import { useState } from 'react';

import Navbar from '../components/Navbar/Navbar';

const Listings = ({ handleLogout, profile }) => {
	<div className='bg-black'>
		<Navbar handleLogout={handleLogout} profile={profile} />
		<main className='flex flex-col justify-center items-center h-screen w-full gap-5'>
			<h1>hei</h1>
		</main>
		;
	</div>;
};

export default Listings;
