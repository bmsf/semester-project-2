function Button({ content, backgroundColor }) {
	return (
		<button
			className='rounded-md font-semibold py-2 w-44 text-black bg-transparent text-lg border border-black'
			style={{
				backgroundColor: backgroundColor,
			}}
		>
			{content}
		</button>
	);
}

export default Button;
