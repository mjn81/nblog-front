import { useFetch } from "./useFetch";
import {
	getPost,
	getPostContent,
	getPostComment,
	getPostSearched,
	getPostPaginate,
	getPostByCategory,
} from "../api";

export const useFetchPost = (id) => useFetch(() => getPost(id) , [id]);

export const useFetchPostContent = (id) => useFetch(() => getPostContent(id));

export const useFetchComments = (id) => useFetch(() => getPostComment(id));

export const useFetchSearched = (id) => useFetch(() => getPostSearched(id));

export const useFetchPostPaginate = (id) => useFetch(() => getPostPaginate(id));

export const useFetchPostCat = (title , active) =>
	useFetch(() => getPostByCategory(title) , [title , active]);
