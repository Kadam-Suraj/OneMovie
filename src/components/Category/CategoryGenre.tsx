import { useParams } from "react-router-dom"
import { getMovieByGenre } from "@/api/client"
import { useCallback, useEffect, useState } from "react"
import Gallery from "../GalleryList/Gallery"
import { useOrigin } from "@/Context/OriginContext"

const CategoryGenre = () => {
    const { genre } = useParams()
    const [data, setData] = useState([])
    // const [isLoading, setisLoading] = useState(true)
    const { origin } = useOrigin()

    const fetchData = useCallback(async () => {
        const data = await getMovieByGenre(genre.toLowerCase(), origin);
        setData(data);
    }, [origin]);

    // console.log(movie)

    useEffect(() => {
        fetchData();
        setTimeout(() => {
            // setisLoading(false)
        }, 100);
    }, [fetchData, origin]);

    return (
        <section className="m-auto max-w-[1536px] grid gap-5 px-5">
            <div className="grid lg:grid-cols-2 items-center justify-between">
                <div className="flex flex-col gap-2">
                    <h2 className="font-bold text-2xl">Category: <span className="pl-2 capitalize text-red-500">
                        {genre}
                    </span>
                    </h2>
                </div>
                {/* <div className="">
                    <Pagination>
                        <PaginationContent>
                            <PaginationItem>
                                <PaginationPrevious />
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationEllipsis />
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationNext />
                            </PaginationItem>
                        </PaginationContent>
                    </Pagination>

                </div> */}
            </div>
            <div>
                <div className="grid gap-10 border-t pt-10">
                    <div className="flex gap-3 justify-between">
                        <h2 className="font-semibold text-2xl">{''}</h2>

                    </div>
                    <Gallery data={data} items={null} />
                </div>
            </div>
        </section>
    )
}

export default CategoryGenre