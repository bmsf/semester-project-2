import Hero from '../components/Hero';
import Navbar from '../components/Navbar';

function Home() {
	return (
		<main className=''>
			<div className='flex flex-col h-screen'>
				<Navbar backgroundColor='#CACBD7' />
				<Hero />
			</div>
		</main>
	);
}

export default Home;
