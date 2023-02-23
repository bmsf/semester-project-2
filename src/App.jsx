import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence, motion as m } from 'framer-motion';

import './index.css';
import { API_AUCTION_URL } from './api/Constants';
import { Home, Login, Register, Profile } from './pages/index';
import * as storage from './storage/index.mjs';

function App() {
	const [token, setToken] = useState(storage.load('token'));

	const [profile, setProfile] = useState(storage.load('profile'));

	const handleLogout = () => {
		storage.remove('profile');
		storage.remove('token');
		window.location.reload(true);
	};

	//API call to fetch all products and store them in state to pass as props

	const [listings, setListings] = useState([]);

	const action = '/listings';

	const fetchProducts = async () => {
		try {
			const getListingsURL = `${API_AUCTION_URL}${action}?_active=true`;

			const response = await fetch(getListingsURL);
			const data = await response.json();

			setListings(data);
		} catch (err) {}
	};

	useEffect(() => {
		fetchProducts();
	}, []);

	return (
		<Router>
			<Routes>
				<Route
					exact
					path='/'
					element={
						<Home
							handleLogout={handleLogout}
							profile={profile}
							listings={listings}
						/>
					}
				/>
				<Route exact path='/login' element={<Login />} />
				<Route exact path='/register' element={<Register />} />
				<Route exact path='/profile' element={<Profile />} />
			</Routes>
		</Router>
	);
}

export default App;
