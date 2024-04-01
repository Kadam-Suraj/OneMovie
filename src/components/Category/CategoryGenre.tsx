import { Link, useParams } from "react-router-dom"
import { Card, CardFooter } from "../ui/card"
import { getMovieByGenre, urlFor } from "@/api/client"
import { useCallback, useEffect, useState } from "react"

const CategoryGenre = () => {
    const { genre } = useParams()
    const [data, setData] = useState([])
    // const [isLoading, setisLoading] = useState(true)

    const fetchData = useCallback(async () => {
        const data = await getMovieByGenre(genre);
        setData(data);
    }, []);

    // console.log(movie)

    useEffect(() => {
        fetchData();
        setTimeout(() => {
            // setisLoading(false)
        }, 100);
    }, [fetchData]);

    return (
        <section className="m-auto max-w-[1536px] grid gap-5 px-5 my-20">
            <div className="grid lg:grid-cols-2 items-center justify-between">
                <div className="flex flex-col gap-2">
                    <h2 className="font-bold text-2xl">Category: <span className="pl-2 capitalize">
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
                    <div className="grid min-[350px]:grid-cols-2 sm:grid-cols-4 xl:grid-cols-6 gap-3">
                        {
                            data.map((item, idx) => {
                                return <div key={idx}>
                                    <Link to={`/download/${item.slug.current}`}>
                                        <Card className="border rounded-md relative">
                                            <img src={urlFor(item.poster).url()} alt={item.slug.current} className="rounded-t-md" />
                                            <CardFooter className="flex flex-col items-start gap-2">
                                                <div className="w-full">
                                                    <h2 className="font-semibold text-xl overflow-hidden text-nowrap text-ellipsis">
                                                        {item.title}
                                                    </h2>
                                                </div>
                                                <div className="flex flex-wrap text-xs md:text-lg gap-2 justify-between w-full font-semibold items-center">
                                                    <span className="font-light text-sm">
                                                        {item.duration}
                                                    </span>
                                                    <span className="uppercase text-red-500">
                                                        {genre}
                                                    </span>
                                                </div>
                                            </CardFooter>
                                        </Card>
                                    </Link>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CategoryGenre