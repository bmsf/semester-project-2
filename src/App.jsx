import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence, motion as m } from 'framer-motion';

import './index.css';
import { Home, Login, Register, Profile } from './pages/index';

import Navbar from './components/Navbar';
import * as storage from './storage/index.mjs';

function App() {
	const [token, setToken] = useState(storage.load('token'));

	const [profile, setProfile] = useState(storage.load('profile'));

	const handleLogout = () => {
		localStorage.removeItem('token');
		localStorage.removeItem('profile');
		window.location.replace('/login');
	};

	return (
		<Router>
			<div className='flex flex-col h-screen'>
				<Routes>
					<Route
						exact
						path='/'
						element={<Home handleLogout={handleLogout} profile={profile} />}
					/>
					<Route exact path='/login' element={<Login />} />
					<Route exact path='/register' element={<Register />} />
					<Route exact path='/profile' element={<Profile />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
