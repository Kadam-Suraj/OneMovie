import { getMovie, urlFor } from "@/api/client"
import { Card, CardFooter } from "@/components/ui/card"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import GallerySkeleton from "@/components/GalleryList/GallerySkeleton"
import { useOrigin } from "@/Context/OriginContext"

export const GalleryList = ({ type, link }) => {
    const [data, setData] = useState([])
    const [isLoading, setisLoading] = useState(true)
    const { origin } = useOrigin()
    useEffect(() => {
        (async () => {
            const data = (await getMovie(origin))
            setData(data)
        })()

        setTimeout(() => {
            setisLoading(false)
        }, 300);
    }, [origin])

    return (

        <>
            {
                isLoading && <GallerySkeleton items={3} />
            }
            {!isLoading && data[0] &&

                <div className="grid gap-10 border-t pt-10">
                    <div className="flex gap-3 justify-between">
                        <h2 className="font-semibold text-2xl">{type == "TV Series" ? "Series" : "Movies"}</h2>
                        {link ?
                            <Link to={link}>
                                <Button>See More</Button>
                            </Link>
                            : null
                        }
                    </div>
                    <div className="grid min-[350px]:grid-cols-2 sm:grid-cols-4 xl:grid-cols-6 gap-3">
                        {
                            data.map((item, idx) => {
                                if (type == "TV Series") {
                                    if (item.type == "TV Series") {
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
                                                                {item.genres[0]}
                                                            </span>
                                                        </div>
                                                    </CardFooter>
                                                </Card>
                                            </Link>
                                        </div>
                                    }
                                }
                            })
                        }
                    </div>
                </div>
            }
        </>
    )
}
