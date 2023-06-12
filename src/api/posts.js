import axios from 'axios';

const client = axios.create({
	baseURL: 'http://localhost:4000/photos',
});

export function getPosts() {
	return client.get().then((res) => res.data);
}
export function getPost(id) {
	return client.get(`/${id}`).then((res) => res.data);
}
export function createPost({ title, url, thumbnailUrl }) {
	return client
		.post('', {
			albumId: 1,
			id: crypto.randomUUID(),
			title,
			url,
			thumbnailUrl,
		})
		.then((res) => res.data);
}
