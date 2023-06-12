import React from 'react';
import ButtonContainer from './ButtonContainer';
import DisplayContainer from './DisplayContainer';
import { useState } from 'react';
import AllPosts from './AllPosts';
import Post from './Post';
import CreatePost from './CreatePost';

const App = () => {
	const [currentPage, setCurrentPage] = useState('');

	function viewAllPosts() {
		setCurrentPage(<AllPosts />);
	}
	function viewFirstPost() {
		setCurrentPage(<Post id={1} />);
	}
	function createNewPost() {
		setCurrentPage(<CreatePost />);
	}

	return (
		<div>
			<ButtonContainer
				viewAllPosts={viewAllPosts}
				viewFirstPost={viewFirstPost}
				createNewPost={createNewPost}
			/>
			<DisplayContainer currentPage={currentPage} />
		</div>
	);
};

export default App;
