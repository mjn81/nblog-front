import { useFetch } from "./useFetch";
import { getPost , getPostContent, getPostComment, getPostSearched, getPostPaginate } from "../api";

export const useFetchPost = () => useFetch(getPost);

export const useFetchPostContent = (id) => useFetch(() => getPostContent(id));

export const useFetchComments = (id) => useFetch(() => getPostComment(id));

export const useFetchSearched = (id) => useFetch(() => getPostSearched(id));

export const useFetchPostPaginate = (id) => useFetch(()=> getPostPaginate(id))