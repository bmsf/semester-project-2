import { useState } from 'react';
import { motion as m, AnimatePresence } from 'framer-motion';
import { ChevronRightIcon } from '@heroicons/react/24/outline';

const InfoBox = ({ title, children }) => {
	const [expanded, setExpanded] = useState(false);


	const arrowVariants = {
		expanded: { rotate: 90 },
		collapsed: { rotate: 0 },
	};

	const containerVariants = {
		collapsed: { height: '3rem' },
		expanded: { height: '10rem', display: 'flex', flexDirection: 'column' },
	};

	return (
		<m.div
			layout
			transition={{ duration: 0.5, type: 'spring' }}
			animate={expanded ? 'expanded' : 'collapsed'}
			variants={containerVariants}
			className='overflow-hidden cursor-pointer flex justify-between p-8 border-b border-gray'
			onClick={() => {
				setExpanded(!expanded);
			}}
		>
			<div className='flex justify-between w-full items-center'>
				<div className='flex flex-col'>
					<p>{title}</p>
				</div>

				<AnimatePresence>
					<m.div
						initial={false}
						exit='collapsed'
						animate={expanded ? 'expanded' : 'collapsed'}
						transition={{ duration: 0.2 }}
						variants={arrowVariants}
						className='h-4 w-4'
					>
						<ChevronRightIcon />
					</m.div>
				</AnimatePresence>
			</div>

			{expanded && (
				<div className=''>
					<p>{children}</p>
				</div>
			)}
		</m.div>
	);
};

export default InfoBox;
