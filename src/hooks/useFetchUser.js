import { getProfile, getUserPost } from "../api";
import { useFetch } from "./useFetch";

export const useFetchUser = () => useFetch(getProfile);

export const useFetchUserPost = () => useFetch(getUserPost);