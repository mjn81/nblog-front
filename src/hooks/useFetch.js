import { useEffect , useState } from "react";

export const useFetch = (fetcher ) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    useEffect(() => {
        setLoading(true);
         fetcher()
             .then(res => {
                
                setData(res.data);
                setLoading(false);
            })
             .catch(err => {
                console.error(err);
                setError(err);
                setLoading(false);
            });
    }, []);

    return { data, loading, error };
}

