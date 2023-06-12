import { useQuery } from '@tanstack/react-query';
import { getPosts } from '../api/posts';

const AllPosts = () => {
	const postsQuery = useQuery({
		queryKey: ['posts'],
		queryFn: getPosts,
	});

	if (postsQuery.isLoading) return <h1>Loading</h1>;
	if (postsQuery.isError) return <h1>{JSON.stringify(postsQuery.error)}</h1>;

	return (
		<div className="card-container">
			{postsQuery.data.map((post) => (
				<div key={post.id} className="card">
					<img src={post.thumbnailUrl} alt="" />
					<h2>{post.title}</h2>
				</div>
			))}
		</div>
	);
};

export default AllPosts;
