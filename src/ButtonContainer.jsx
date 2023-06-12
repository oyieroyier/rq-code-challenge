import React from 'react';
import Button from './components/Button';

const ButtonContainer = ({ viewAllPosts, viewFirstPost, createNewPost }) => {
	return (
		<div
			style={{
				margin: '1rem',
				padding: '1rem',
			}}
		>
			<Button label="View All Posts" handleClick={viewAllPosts} />
			<Button label="View First Post" handleClick={viewFirstPost} />
			<Button label="Create New Post" handleClick={createNewPost} />
		</div>
	);
};

export default ButtonContainer;
