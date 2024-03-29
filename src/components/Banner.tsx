// import ReactPlayer from "react-player"
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
import { emoji } from "@/assets"
import Autoplay from "embla-carousel-autoplay"


const Banner = () => {
    const [data, setData] = useState([])

    const getYear = (data: any) => {
        let date = new Date(data).getFullYear()
        return date;
    }

    const compareDate = (data: any) => {
        const today = new Date();
        const prevMonth = new Date(today.getFullYear(), today.getMonth() - 1, today.getDate(), today.getHours(), today.getMinutes()).getTime()
        const compareDate = new Date(data).getTime();
        if (compareDate > prevMonth) {
            return <span>New</span>
        }
        else {
            return <span>Trending</span>
        }
    }

    useEffect(() => {
        (async () => {
            const data = (await getMovie())
            setData(data)
        })()
    }, [])

    return (
        <>
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
                            return <CarouselItem key={idx}>
                                <div className="p-1">
                                    <Card>
                                        <CardContent className="flex items-center lg:justify-center p-6">
                                            <div className="grid gap-5 lg:grid-cols-2 w-fit" >
                                                <div className="flex flex-col gap-5 justify-center w-full">
                                                    <div className="flex gap-5 items-center text-xs w-1/2 bg-gradient-to-r from-black from0% to-transparent to-80% rounded-full px-1 py-1">
                                                        <span className="bg-red-500 px-4 py-2 rounded-full text-white">{compareDate(item.releaseDate)}</span>
                                                        <span className="text-white text-sm text-opacity0">Released In {getYear(item.releaseDate)}</span>
                                                    </div>
                                                    <h1 className="font-bold text-5xl lg:text-8xl">{item.title}</h1>
                                                    <div className="flex gap-5 items-center">
                                                        <span className="border py-1 px-2">{item.type}</span>
                                                        <span>{item.duration}</span>
                                                        <span>{getYear(item.releaseDate)}</span>
                                                    </div>
                                                    <p className="text-sm text-opacity-50 w-10/12">{item.overview}</p>
                                                    <Button className="w-fit">More Info</Button>
                                                </div>
                                                <div className="flex items-center -order-1 lg:order-1 justify-center lg:justify-end">
                                                    {item.trailer ? <img className=" w-60 lg:w-1/2 rounded-xl" src={urlFor(item.poster).url()} />
                                                        :
                                                        <div className="flex flex-col items-center gap-5">
                                                            <div className="flex flex-col items-center gap-10">
                                                                <img src={emoji} width={150} />
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
                        })}
                    </CarouselContent>
                    <CarouselPrevious className="hidden lg:flex" />
                    <CarouselNext className="hidden lg:flex" />
                </Carousel>
            </div>

        </>
    )
}

export default Banner
