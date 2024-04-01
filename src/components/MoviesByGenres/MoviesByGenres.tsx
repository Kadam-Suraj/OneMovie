import { getAllGenres } from "@/api/client"
import { useCallback, useEffect, useState } from "react"
import { Button } from "../ui/button"
import SkeletonMoviesByGenres from "./SkeletonMoviesByGenres"

const MoviesByGenres = () => {
    const [data, setData] = useState([])
    const [isLoading, setisLoading] = useState(true)

    const fetchData = useCallback(async () => {
        const data = await getAllGenres();
        setData(data);
    }, []);

    useEffect(() => {
        fetchData();
        setTimeout(() => {
            setisLoading(false)
        }, 100);
    }, [fetchData]);

    return (
        <section className="border-t py-10">
            <div className="flex gap-3 flex-wrap justify-center">
                {
                    isLoading && <SkeletonMoviesByGenres />
                }

                {
                    !isLoading && data &&
                    <div className="flex gap-3 flex-wrap justify-center">
                        {
                            data.map((item, idx) => {
                                return <Button key={idx} className="capitalize">
                                    {item}
                                </Button>
                            })
                        }
                    </div>
                }
            </div>
        </section>
    )
}

export default MoviesByGenres