import React from 'react';
import ButtonContainer from './ButtonContainer';
import DisplayContainer from './DisplayContainer';
import { useState } from 'react';
import AllPosts from './AllPosts';
import Post from './Post';
import CreatePost from './CreatePost';

const App = () => {
	const [currentPage, setCurrentPage] = useState('');

	function viewAllPhotos() {
		setCurrentPage(<AllPosts />);
	}
	function viewFirstPhoto() {
		setCurrentPage(<Post id={1} />);
	}
	function createNewPhoto() {
		setCurrentPage(<CreatePost />);
	}

	return (
		<div>
			<ButtonContainer
				viewAllPhotos={viewAllPhotos}
				viewFirstPhoto={viewFirstPhoto}
				createNewPhoto={createNewPhoto}
			/>
			<DisplayContainer currentPage={currentPage} />
		</div>
	);
};

export default App;
