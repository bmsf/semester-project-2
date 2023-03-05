import { useState } from 'react';
import { motion as m, AnimatePresence } from 'framer-motion';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import calculateTimeRemaining from '../utils/calculateTimeRemaining';

/**
 * A component that displays information with an expandable/collapsible container.
 * @param {Object} props - The props object.
 * @param {string} props.title - The title of the information box.
 * @param {React.ReactNode} props.children - The children to render inside the container.
 * @param {string} props.endsAt - The date/time string when the auction ends (if applicable).
 * @returns {JSX.Element} - The JSX element representing the InfoBox component.
 */

const InfoBox = ({ title, children, endsAt }) => {
	const [expanded, setExpanded] = useState(false);

	const arrowVariants = {
		expanded: { rotate: 90 },
		collapsed: { rotate: 0 },
	};

	const containerVariants = {
		collapsed: { height: '3rem' },
		expanded: {
			height: '15rem',
			display: 'flex',
			flexDirection: 'column',
			overflow: 'visible',
		},
	};

	if (title === 'Time left') {
		const { remainingDays, remainingHours, remainingMinutes } =
			calculateTimeRemaining(endsAt);

		children = `${remainingDays} days, ${remainingHours} hours, ${remainingMinutes} minutes`;
	}

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
				<div className='mb-10 mx-auto'>
					<p className='text-sm'>{children}</p>
				</div>
			)}
		</m.div>
	);
};

export default InfoBox;
