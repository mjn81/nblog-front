import { useEffect, useState } from "react";

export const useFetch = (fetcher, reload_data = []) => {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	useEffect(() => {
		setLoading(true);
		fetcher()
			.then((res) => {
				setData(res.data);
				setLoading(false);
			})
			.catch((err) => {
				console.error(err);
				setError(err);
				setLoading(false);
			});
	}, [...reload_data]);

	return { data, loading, error };
};

export const usePost = (fetcher, data) => {
	const [result, setResult] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	useEffect(() => {
		setLoading(true);
		fetcher(data)
			.then((res) => {
				setResult(res.data);
				setLoading(false);
			})
			.catch((err) => {
				console.error(err);
				setError(err);
				setLoading(false);
			});
	}, [data]);

	return { result, loading, error };
};
