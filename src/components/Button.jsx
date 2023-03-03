// function Button({
// 	children,
// 	backgroundColor,
// 	textColor,
// 	type = 'button',
// 	handleClick,
// 	width,
// 	borderColor,
// }) {
// 	return (
// 		<button
// 			className={`rounded-md font-thin py-2 w-44 text-black bg-transparent text-lg border border-black  hover:text-white transition duration-300 ease-in-out ${
// 				borderColor ? `border-${borderColor}` : 'border-black'
// 			}`}
// 			style={{
// 				backgroundColor: backgroundColor,
// 				color: textColor,
// 				width: width,
// 				border: borderColor,
// 			}}
// 			type={type}
// 			onClick={handleClick}
// 		>
// 			{children}
// 		</button>
// 	);
// }

// export default Button;

import { motion } from 'framer-motion';

function Button({
	children,
	backgroundColor,
	textColor,
	type = 'button',
	handleClick,
	width,
	borderColor,
}) {
	const buttonVariants = {
		rest: {
			backgroundColor: backgroundColor,
			color: textColor,
			border: borderColor,
		},
		hover: {
			backgroundColor: 'black',
			color: 'white',
			border: borderColor || 'black',
			transition: {
				type: 'spring',
				stiffness: 400,
			},
			scale: 1.1,
		},
		tap: {
			scale: 0.9,
			transition: {
				type: 'spring',
				stiffness: 400,
			},
		},
	};

	return (
		<motion.button
			className={`rounded-md font-thin py-2 w-44 text-black  text-lg border ${
				borderColor ? `border-${borderColor}` : 'border-black'
			}`}
			style={{
				width: width,
			}}
			type={type}
			onClick={handleClick}
			variants={buttonVariants}
			whileHover='hover'
			whileTap='tap'
		>
			{children}
		</motion.button>
	);
}

export default Button;
