import logo from '../assets/logo-color.png';
import { useState } from 'react';
import { Bars3Icon, BeakerIcon } from '@heroicons/react/24/solid';

function Navbar({ backgroundColor }) {
	const [openMenu, setOpenMenu] = useState(false);

	return (
		<header className='relative'>
			<nav
				className='w-full p-5 flex justify-between items-center'
				style={{ backgroundColor: backgroundColor }}
			>
				<div className='w-16'>
					<img src={logo} alt='Image of logo' />
				</div>
				<div>
					<Bars3Icon
						className='h-6 w-6'
						onClick={() => setOpenMenu(!openMenu)}
					/>
				</div>
			</nav>
			{openMenu && <div className='w-full absolute bg-black'>hei</div>}
		</header>
	);
}

export default Navbar;
