import { getMovie, urlFor } from "@/api/client"
import { Card, CardFooter } from "@/components/ui/card"
// import {
//     Pagination,
//     PaginationContent,
//     PaginationEllipsis,
//     PaginationItem,
//     // PaginationLink,
//     PaginationNext,
//     PaginationPrevious,
// } from "@/components/ui/pagination"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const Movies = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        (async () => {
            const data = (await getMovie())
            setData(data)
        })()
    }, [])
    return (
        <section className="m-auto max-w-[1536px] grid gap-5 px-5 my-20 min-h-screen">
            <div className="grid lg:grid-cols-2 items-center justify-between">
                <div className="flex flex-col gap-2">
                    <h2 className="font-bold text-2xl">Explore our wide variety of categories</h2>
                    <p className="text-sm">Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new</p>
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
            <div className="grid gap-10 border-t pt-10">
                <h2 className="font-semibold text-2xl">Movies</h2>
                <div className="grid min-[350px]:grid-cols-2 sm:grid-cols-4 gap-5">
                    {
                        data.map((item, idx) => {
                            if (item.type !== "TV Series") {
                                return <div key={idx}>
                                    <Link to={`/movies/${item.slug.current}`}>
                                        <Card className="border rounded-md relative">
                                            <img src={urlFor(item.poster).url()} alt={item.slug.current} className="rounded-t-md" />
                                            <CardFooter className="flex flex-col items-start gap-2">
                                                <div>
                                                    {item.title}
                                                </div>
                                                <div className="flex flex-wrap text-xs md:text-lg gap-2 justify-between w-full font-semibold">
                                                    <span>
                                                        {item.duration}
                                                    </span>
                                                    <span className="uppercase text-red-500">
                                                        {item.genres[0]}
                                                    </span>
                                                </div>
                                            </CardFooter>
                                        </Card>
                                    </Link>
                                </div>
                            }
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Movies