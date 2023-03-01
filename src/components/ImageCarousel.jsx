import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';



const ImageCarousel = ({ media, description }) => {
	const [width, setWidth] = useState(0);
	const carousel = useRef();

	useEffect(() => {
		setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
	}, []);

	console.log(media.length);

	return (
		<>
			<div className='wrapper md:hidden'>
				<motion.div
					ref={carousel}
					className='carousel'
					// whileTap={{ cursor: 'grabbing' }}
				>
					<motion.div
						drag='x'
						dragConstraints={{ right: 0, left: -width }}
						className='inner-carousel relative'
					>
						{media.map((image) => {
							return (
								<motion.div className='item ' key={image.id}>
									<img src={image} alt={description} />
								</motion.div>
							);
						})}
					</motion.div>
				</motion.div>
			</div>
		</>
	);
};

export default ImageCarousel;
