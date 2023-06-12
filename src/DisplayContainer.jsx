import React from 'react';
import AllPosts from './AllPosts';

const DisplayContainer = ({ currentPage }) => {
	return (
		<div
			style={{
				margin: '1.5rem',
				padding: '1.5rem',
			}}
		>
			{currentPage}
		</div>
	);
};

export default DisplayContainer;
