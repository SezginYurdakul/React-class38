import { useState, useEffect } from "react";

function useFetchData(url, setData) {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch(url);
                const data = await response.json();
                setData(data);
                setIsLoading(false);
            } catch (error) {
                setIsLoading(false);
                setError(error.message);
            }
        })();
    }, [url, setData]);

    return { error, isLoading };
}

export default useFetchData;



