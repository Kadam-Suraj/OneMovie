import { Button } from "./ui/button"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { getMovie, urlFor } from "@/api/client"
import { useEffect, useState } from "react"
import { Card, CardContent } from "./ui/card"
import Autoplay from "embla-carousel-autoplay"
import { Link } from "react-router-dom"
import { Skeleton } from "./ui/skeleton"

export const getYear = (data: any) => {
    let date = new Date(data).getFullYear()
    return date;
}

const Banner = () => {
    const [data, setData] = useState([])
    // const [genres, setGenres] = useState([])

    // const compareDate = (data: any) => {
    //     const today = new Date();
    //     const prevMonth = new Date(today.getFullYear(), today.getMonth() - 1, today.getDate(), today.getHours(), today.getMinutes()).getTime()
    //     const compareDate = new Date(data).getTime();
    //     if (compareDate > prevMonth) {
    //         return true
    //         // <span>New</span>
    //     }
    //     else {
    //         return false
    //         // <span>Trending</span>
    //     }
    // }

    // const getGenres = (val: any) => {
    //     <Button variant="outline" className="pointer-events-none rounded-full"></Button>
    // }

    useEffect(() => {
        (async () => {
            const data = (await getMovie())
            setData(data)
            // const Genres = (await getGenres(info))
            // console.log("Hello")
            // setGenres(Genres)
        })()
    }, [])


    const getStatus = (val: any) => {
        const status = val.map((item: any) => {
            // if (item === "new") {
            //     if (compareDate(item.releaseDate)) {
            //         return "New"
            //     } else {
            //         return "Trending"
            //     }
            // }
            return item
            // else {
            // }
        })
        return status
    }

    return (
        <>
            {
                data ?
                    <div className="lg:px-10">
                        <Carousel className="w-full" opts={{
                            align: "start",
                            loop: true,
                        }}
                            plugins={[
                                Autoplay({
                                    delay: 5000,
                                }),

                            ]}>
                            <CarouselContent>
                                {data.map((item, idx) => {
                                    if (getStatus(item.status) == "new" || getStatus(item.status) == "trending" || getStatus(item.status) == "upcoming") {
                                        return <CarouselItem key={idx}>
                                            <div className="p-1">
                                                <Card>
                                                    <CardContent className="flex items-center lg:justify-center p-6">
                                                        <div className="grid gap-5 lg:grid-cols-2 w-fit" >
                                                            <div className="flex flex-col gap-5 justify-center w-full">
                                                                <div className="flex gap-5 items-center text-xs lg:w-1/2 bg-gradient-to-r  from-black dark:from-white dark:from-70% from-70% to-transparent dark:to-transparent dark:to-90% to-90% rounded-full px-1 py-1">
                                                                    <span className="bg-red-500 px-4 py-2 rounded-full text-white uppercase">{getStatus(item.status)}</span>
                                                                    <span className="text-white dark:text-black text-sm text-opacity0">Released In {getYear(item.releaseDate)}</span>
                                                                </div>
                                                                <h1 className="font-bold text-5xl lg:text-8xl">{item.title}</h1>
                                                                <div className="flex gap-5 items-center">
                                                                    <span className="border py-1 px-2">{item.type}</span>
                                                                    <span>{item.duration}</span>
                                                                    <span>{getYear(item.releaseDate)}</span>
                                                                </div>
                                                                <div className="flex flex-wrap gap-2">
                                                                    {item.genres.map((item, idx) => {
                                                                        return <Button key={idx} variant="outline" className="pointer-events-none rounded-full uppercase">{item}</Button>
                                                                    })}
                                                                </div>
                                                                <p className="text-sm text-opacity-50 md:w-10/12">{item.overview}</p>
                                                                <Link to={`/movies/${item.slug.current}`}>
                                                                    <Button className="w-fit">More Info</Button>
                                                                </Link>
                                                            </div>
                                                            <div className="flex items-center -order-1 lg:order-1 justify-center lg:justify-end">
                                                                {item.trailer ? <img className=" w-60 lg:w-1/2 rounded-xl" src={urlFor(item.poster).url()} />
                                                                    :
                                                                    <div className="flex flex-col items-center gap-5">
                                                                        <div className="flex flex-col items-center gap-10">
                                                                            {/* <img src={emoji} width={150} /> */}
                                                                            <h2 className="text-5xl">Poster Unavailable</h2>
                                                                        </div>
                                                                        <p>sorry for inconvenience</p>
                                                                    </div>
                                                                }
                                                            </div>
                                                        </div>
                                                    </CardContent>
                                                </Card>
                                            </div>
                                        </CarouselItem>
                                    }
                                })}
                            </CarouselContent>
                            <CarouselPrevious className="hidden lg:flex" />
                            <CarouselNext className="hidden lg:flex" />
                        </Carousel>
                    </div>
                    :
                    <div className="w-full h-full bg-red-400 flex flex-col space-y-3">
                        <Skeleton className="h-[125px] w-[250px] rounded-xl" />
                        <div className="space-y-2">
                            <Skeleton className="h-4 w-[250px]" />
                            <Skeleton className="h-4 w-[200px]" />
                        </div>
                    </div>
            }
        </>
    )
}

export default Banner
