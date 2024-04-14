import { getOriginMovie } from "@/api/client";
import { useCallback, useEffect, useState } from "react";

export const MovieOrigin = () => {
    const [origin, setOrigin] = useState("hollywood")

    const fetchData = useCallback(async () => {
        const data = await getOriginMovie();
        setOrigin(data);
    }, []);

    useEffect(() => {
        fetchData();
    }, [fetchData]);
    // console.log(origin)
    return origin
}

// export const Origin = MovieOrigin()