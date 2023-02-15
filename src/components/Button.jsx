function Button({ children, backgroundColor, textColor, type = 'button' }) {
	return (
		<button
			className='rounded-md font-semibold py-2 w-44 text-black bg-transparent text-lg border border-black'
			style={{
				backgroundColor: backgroundColor,
				color: textColor,
			}}
			type={type}
		>
			{children}
		</button>
	);
}

export default Button;
