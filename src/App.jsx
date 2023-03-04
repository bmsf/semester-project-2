import { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
// import Loader from 'react-loader-spinner';
// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import './index.css';
import {
	Home,
	Login,
	Register,
	Profile,
	Create,
	Listing,
	Listings,
	MyListings,
	NotFound,
} from './pages/index';

import { fetchProducts } from './api/index';
import * as storage from './storage/index.mjs';

function App() {
	const [token, setToken] = useState(storage.load('token'));

	const [profile, setProfile] = useState(storage.load('profile'));

	const [isLoading, setIsLoading] = useState(true);

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

	const [listings, setListings] = useState([]);

	useEffect(() => {
		fetchProducts(setListings);
	}, []);

	return (
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

			<Route exact path='/listings'>
				<Route
					exact
					index
					element={
						<Listings
							handleLogout={handleLogout}
							profile={profile}
							listings={listings}
						/>
					}
				/>
				<Route
					exact
					path=':id'
					element={
						<Listing
							handleLogout={handleLogout}
							profile={profile}
							token={token}
						/>
					}
				/>
			</Route>

			<Route exact path='/login' element={<Login />} />
			<Route exact path='/register' element={<Register />} />

			<Route
				exact
				path='/profile'
				element={
					token ? (
						<Profile
							handleLogout={handleLogout}
							profile={profile}
							token={token}
							updateProfile={updateProfile}
						/>
					) : (
						<Navigate to='/login' />
					)
				}
			/>

			<Route
				exact
				path='/create'
				element={
					token ? (
						<Create handleLogout={handleLogout} profile={profile} />
					) : (
						<Navigate to='/login' />
					)
				}
			/>
			<Route
				exact
				path='/mylistings'
				element={
					token ? (
						<MyListings handleLogout={handleLogout} profile={profile} />
					) : (
						<Navigate to='/login' />
					)
				}
			/>

			<Route exact={true} path='*' element={<NotFound />} />
		</Routes>
	);
}

export default App;
