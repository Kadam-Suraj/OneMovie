import { getMovie, urlFor } from "@/api/client"
import { Card, CardFooter } from "@/components/ui/card"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const Series = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        (async () => {
            const data = (await getMovie())
            setData(data)
        })()
    }, [])
    console.log(data)
    return (
        <section className="m-auto max-w-[1536px] px-5 my-20 min-h-screen">
            <div className="grid gap-10">
                <h2 className="font-semibold text-2xl">Latest Series</h2>
                <div className="grid min-[350px]:grid-cols-2 sm:grid-cols-4 gap-5">
                    {
                        data.map((item, idx) => {
                            if (item.type === "TV Series") {
                                return <div key={idx}>
                                    <Link to={`/series/${item.slug.current}`}>
                                        <Card className="border rounded-md relative">
                                            <img src={urlFor(item.poster).url()} alt={item.slug.current} className="rounded-t-md" />
                                            <CardFooter className="flex flex-col items-start gap-2">
                                                <div>
                                                    {item.title}
                                                </div>
                                                <div className="flex text-xs md:text-lg gap-5 font-semibold">
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

export default Series