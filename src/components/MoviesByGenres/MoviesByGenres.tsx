import { getAllGenres } from "@/api/client"
import { useEffect, useState } from "react"
import { Button } from "../ui/button"
import SkeletonMoviesByGenres from "./SkeletonMoviesByGenres"

const MoviesByGenres = () => {
    const [data, setdata] = useState([])
    const [isLoading, setisLoading] = useState(true)

    useEffect(() => {
        (async () => {
            const data = (await getAllGenres())
            setdata(data)
        })()
        setTimeout(() => {
            setisLoading(false)
        }, 100);
    }, [isLoading])

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