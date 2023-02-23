function Button({
	children,
	backgroundColor,
	textColor,
	type = 'button',
	handleClick,
}) {
	return (
		<button
			className='rounded-md font-thin py-2 w-44 text-black bg-transparent text-lg border border-black'
			style={{
				backgroundColor: backgroundColor,
				color: textColor,
			}}
			type={type}
			onClick={() => handleClick()}
		>
			{children}
		</button>
	);
}

export default Button;
