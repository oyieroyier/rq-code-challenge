import React from 'react';

const Button = ({ handleClick, label }) => {
	return (
		<button
			className="button"
			onClick={handleClick}
			style={{
				margin: '1rem',
			}}
		>
			<span className="button-content">{label} </span>
		</button>
	);
};

export default Button;
