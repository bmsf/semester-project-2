import { useState } from 'react';
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/24/outline';

const ImageCarousel = ({ media }) => {
	const [currentIndex, setCurrentIndex] = useState(0);

	console.log(media);

	const handlePrevClick = () => {
		if (currentIndex === 0) {
			setCurrentIndex(media.length - 1);
		} else {
			setCurrentIndex(currentIndex - 1);
		}
	};

	const handleNextClick = () => {
		if (currentIndex === media.length - 1) {
			setCurrentIndex(0);
		} else {
			setCurrentIndex(currentIndex + 1);
		}
	};

	return (
		<div className='w-full mx-auto max-w-full px-16 relative'>
			<div className='h-96 mx-auto'>
				<img
					className='productImg mx-auto'
					src={media[currentIndex]}
					alt={media[currentIndex]}
				/>
			</div>
			<div className='absolute top-0 bottom-0 left-0 w-full flex items-center justify-between'>
				<div
					className='cursor-pointer px-2 py-2 rounded-full bg-[#28282B] hover:bg-opacity-75'
					onClick={handlePrevClick}
				>
					<ChevronLeftIcon className='h-8 w-8 text-white' />
				</div>
				<button
					className='cursor-pointer px-2 py-2 rounded-full bg-[#28282B] hover:bg-opacity-75'
					onClick={handleNextClick}
				>
					<ChevronRightIcon className='h-8 w-8 text-white' />
				</button>
			</div>
		</div>
	);
};

export default ImageCarousel;
