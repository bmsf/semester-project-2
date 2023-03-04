import { Link } from 'react-router-dom';

const NotFound = () => {
	return (
		<div className='min-h-screen bg-gray-100 flex flex-col justify-center items-center'>
			<h1 className='text-6xl font-bold text-gray-900'>404</h1>
			<p className='text-2xl font-medium mb-8'>Page not found</p>
			<Link
				to='/'
				className='px-4 py-2 bg-indigo-600 text-black font-medium rounded-md hover:bg-indigo-700'
			>
				Go to home
			</Link>
		</div>
	);
};

export default NotFound;
