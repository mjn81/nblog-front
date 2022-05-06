import { get, post, post_with_content } from "./methods";

export const getPost = (id) => get(`/blog/posts/?page=${id}`);

export const getPostContent = (id) => get(`/blog/posts/${id}/`);

export const getPostComment = (id) => get(`/blog/comments/${id}/`);

export const getPostSearched = (id) => get(`/blog/posts/?search=${id}`);

export const getPostPaginate = (id) => get(`/blog/posts/?page=${id}`);

export const postComment = (data) => post(`/blog/comments/`, data);

export const getUserPost = () => get("/blog/user-posts");

export const addPost = (data) => post_with_content("/blog/user-posts/", data);

export const getPostByCategory = (title) =>
	get(`/blog/posts/?categories__title=${title}`);
