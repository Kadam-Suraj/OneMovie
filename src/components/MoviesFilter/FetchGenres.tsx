import { useOrigin } from "@/Context/OriginContext";
import { getMovieByGenre, urlFor } from "@/api/client";
import { useCallback, useEffect, useState } from "react";

const MoviesByGenre = ({ genre }) => {
    const [data, setData] = useState([])
    // const [genre, setGenre] = useState()
    const { origin } = useOrigin()
    
    const fetchData = useCallback(async () => {
        const data = await getMovieByGenre(genre, origin);
        setData(data);
    }, [origin, genre]);

    // console.log(movie)

    useEffect(() => {
        fetchData();
        // setTimeout(() => {
        //     setisLoading(false)
        // }, 100);
    }, [fetchData, origin, genre]);
    return (
        <div className="grid grid-cols-2 gap-2">
            {
                data.map((item, idx) => {
                    if (idx < 4) {
                        return <img key={idx} src={urlFor(item.poster).url()} alt={item.slug.current} loading="lazy" className={`rounded-md object-top h-40 object-cover w-full`} />
                    }
                })
            }
        </div>
    )
}

export default MoviesByGenre