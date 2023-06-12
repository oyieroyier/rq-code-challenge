import { useRef } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createPost } from './api/posts';

const CreatePost = () => {
	const titleRef = useRef();
	const urlRef = useRef();
	const thumbnailRef = useRef();
	const queryClient = useQueryClient();

	const createPostMutation = useMutation({
		mutationFn: createPost,
		onSuccess: (data) => {
			queryClient.setQueryData(['posts', data.id], data);
			queryClient.invalidateQueries(['posts'], { exact: true });
		},
	});

	function handleSubmit(e) {
		e.preventDefault();

		createPostMutation.mutate({
			title: titleRef.current.value,
			thumbnailUrl: thumbnailRef.current.value,
			url: urlRef.current.value,
		});
	}

	return (
		<div>
			{createPostMutation.isError && JSON.stringify(createPostMutation.error)}
			<section className="section_form">
				<form
					id="consultation-form"
					className="feed-form"
					onSubmit={handleSubmit}
				>
					<input
						name="title"
						placeholder="title"
						type="text"
						ref={titleRef}
						required
					/>
					<input
						name="url"
						placeholder="url"
						type="text"
						ref={urlRef}
						required
					/>
					<input
						name="thumbnail"
						placeholder="thumbnail url"
						type="text"
						ref={thumbnailRef}
						required
					/>
					<button
						className="button_submit"
						disabled={createPostMutation.isLoading}
					>
						{createPostMutation.isLoading ? 'Loading...' : 'ADD NEW'}
					</button>
				</form>
			</section>
		</div>
	);
};
export default CreatePost;
