import { useState, useEffect } from 'react';
import './index.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Navbar from './components/Navbar';
import * as storage from './storage/index.mjs';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence, motion as m } from 'framer-motion';

function App() {
	const [token, setToken] = useState(storage.load('token'));

	console.log(token);

	const [profile, setProfile] = useState(storage.load('profile'));

	const handleLogout = () => {
		localStorage.removeItem('token');
		localStorage.removeItem('profile');
		window.location.replace('/login');
	};

	// useEffect(() => {
	// 	const user = JSON.parse(localStorage.getItem('profile'));
	// 	user ? setUser(user) : null;

	// 	const token = JSON.parse(localStorage.getItem('token'));
	// 	token ? setToken(token) : null;
	// }, []);

	return (
		<Router>
			<div className='flex flex-col h-screen'>
				<Navbar handleLogout={handleLogout} profile={profile} />
				<Routes>
					<Route exact path='/' element={<Home />} />
					<Route exact path='/login' element={<Login />} />
					<Route exact path='/register' element={<Register />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
