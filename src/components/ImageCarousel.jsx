import { useState } from 'react';

import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/24/outline';

const ImageCarousel = ({ media }) => {
	const [currentIndex, setCurrentIndex] = useState(0);

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
		<div className='w-full mx-auto max-w-full px-6'>
			<div className='relative h-96 mx-auto'>
				<img
					className='productImg mx-auto'
					src={media[currentIndex]}
					alt={media[currentIndex]}
				/>
				<div className='absolute top-0 bottom-0 w-full flex items-center justify-between'>
					<div
						className='px-2 py-2 rounded-full bg-[#737373] hover:bg-opacity-75'
						onClick={handlePrevClick}
					>
						<ChevronLeftIcon className='h-8 w-8 text-white' />
					</div>
					<button
						className='px-2 py-2 rounded-full bg-[#737373] hover:bg-opacity-75'
						onClick={handleNextClick}
					>
						<ChevronRightIcon className='h-8 w-8 text-white' />
					</button>
				</div>
			</div>
		</div>
	);
};

export default ImageCarousel;
