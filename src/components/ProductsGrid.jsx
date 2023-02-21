import image1 from '../assets/Group 1.png';
import ProductCard from './ProductCard';

function Products() {
	return (
		<div className='grid w-5/6 mx-auto'>
			<ProductCard />
			<ProductCard />
			<ProductCard />
			<ProductCard />
			<ProductCard />
		</div>
	);
}

export default Products;
