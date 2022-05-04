import { get , post } from "./methods";

export const getPost = () => get("/blog/posts/");

export const getPostContent = (id) => get(`/blog/posts/${id}/`);

export const getPostComment = (id) => get(`/blog/comments/${id}/`);

export const getPostSearched = (id) => get(`/blog/posts/?search=${id}`);

export const getPostPaginate = (id) => get(`/blog/posts/?page=${id}`);

export const postComment = (data) => post(`/blog/comments/`, data);

export const getUserPost = () => get('/blog/user-posts');