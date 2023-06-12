import React from 'react';
import Button from './components/Button';

const ButtonContainer = ({ viewAllPhotos, viewFirstPhoto, createNewPhoto }) => {
	return (
		<div
			style={{
				margin: '1rem',
				padding: '1rem',
			}}
		>
			<Button label="View All Photos" handleClick={viewAllPhotos} />
			<Button label="View First Photo" handleClick={viewFirstPhoto} />
			<Button label="Create New Photo" handleClick={createNewPhoto}/>
		</div>
	);
};

export default ButtonContainer;
