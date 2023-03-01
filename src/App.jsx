import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence, motion as m } from 'framer-motion';

import './index.css';
import {
	Home,
	Login,
	Register,
	Profile,
	Create,
	Product,
	Products,
} from './pages/index';
import FetchProducts from './api/FetchProducts';
import * as storage from './storage/index.mjs';

function App() {
	const [token, setToken] = useState(storage.load('token'));

	const [profile, setProfile] = useState(storage.load('profile'));

	const updateProfile = (newProfile) => {
		setProfile(newProfile);
		storage.save('profile', newProfile);
		storage.save('avatar', newProfile.avatar);
	};

	// Function for logged out and refreshing page when user clicks button

	const handleLogout = () => {
		storage.remove('profile');
		storage.remove('token');
		window.location.reload(true);
	};

	//API call to fetch all products and store them in state to pass as props

	const [listings, setListings] = useState([]);

	useEffect(() => {
		FetchProducts(setListings);
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
				<Route path='/products'>
					<Route index element={<Products />} />
					<Route
						path=':id'
						element={<Product handleLogout={handleLogout} profile={profile} />}
					/>
				</Route>

				<Route exact path='/login' element={<Login />} />
				<Route exact path='/register' element={<Register />} />
				<Route
					exact
					path='/profile'
					element={
						<Profile
							handleLogout={handleLogout}
							profile={profile}
							token={token}
							updateProfile={updateProfile}
						/>
					}
				/>
				<Route
					exact
					path='/create'
					element={<Create handleLogout={handleLogout} profile={profile} />}
				/>
			</Routes>
		</Router>
	);
}

export default App;
