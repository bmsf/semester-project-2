import { motion as m } from 'framer-motion';

/**
 *@description
 * A custom button component that supports hover and tap animations using Framer Motion.
 *
 * @param {object} props - The component's props.
 * @param {ReactNode} props.children - The button's label.
 * @param {string} props.backgroundColor - The button's background color.
 * @param {string} props.textColor - The button's text color.
 * @param {string} [props.type='button'] - The button's HTML type attribute.
 * @param {function} [props.handleClick] - A function to call when the button is clicked.
 * @param {string} [props.width] - The button's width.
 * @param {string} [props.borderColor] - The button's border color.
 * @returns {JSX.Element} - A custom button component.
 * @example
 * <Button children='Hello' backgroundColor='black' textColor='white' type='submit' handleClick={() => setOpenModal(!openModal)} />
 * */
const Button = ({
	children,
	backgroundColor,
	textColor,
	type = 'button',
	handleClick,
	width,
	borderColor,
}) => {
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
		<m.button
			className={`rounded-md font-thin py-2 w-44  text-lg border ${
				borderColor ? `border-${borderColor}` : 'border-black'
			}`}
			style={{
				width: width,
				backgroundColor: backgroundColor,
				color: textColor,
			}}
			type={type}
			onClick={handleClick}
			variants={buttonVariants}
			whileHover='hover'
			whileTap='tap'
		>
			{children}
		</m.button>
	);
};

export default Button;
