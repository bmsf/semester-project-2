import { Link } from 'react-router-dom';
import { CiTwitter, CiFacebook, CiInstagram } from 'react-icons/ci';

import logo from '../../assets/logo-no-background.png';

const Footer = () => {
	return (
		<footer className='flex flex-col justify-center items-center'>
			<img src={logo} alt='Image of logo' className='w-2/3 lg:w-1/5' />

			<div className='flex justify-between w-full p-5 pt-12 lg:w-2/3'>
				<p className='text-sm font-thin'>Copyright BMSF 2023 &#169;</p>
				<div className='flex gap-2'>
					<CiTwitter color='black' className='text-2xl' />
					<CiFacebook color='black' className='text-2xl' />
					<CiInstagram color='black' className='text-2xl' />
				</div>
			</div>
		</footer>
	);
};

export default Footer;
