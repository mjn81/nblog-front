import { useFetch } from "./useFetch";
import { getCategories } from "../api";

export const useFetchCategory = () => useFetch(getCategories);