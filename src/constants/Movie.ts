import { useEffect, useState } from "react"
import { MovieOrigin } from "./MovieOrigin";
import { Movie } from "@/api/client";

const MovieData = () => {
    const [data, setData] = useState([]);

    const origin = MovieOrigin()

    const fetch = () => {
        const data = Movie()
        setData(data)
    }
    fetch()
    useEffect(() => {
    }, []);
    console.log(origin)

    return data
}

export default MovieData