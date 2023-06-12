import { useQuery } from '@tanstack/react-query';
import { getPost } from './api/posts';

const Post = ({ id }) => {
	const postQuery = useQuery({
		queryKey: ['post', id],
		queryFn: () => getPost(id),
	});

	if (postQuery.isLoading) return <h1>Loading...</h1>;
	if (postQuery.isLoading) return <h1>{JSON.stringify(postQuery.error)}</h1>;

	return (
		<div>
			<img src={postQuery.data.url} alt="" />
			<h1>{postQuery.data.title}</h1>
		</div>
	);
};

export default Post;
