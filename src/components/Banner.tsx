import { Button } from "./ui/button"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { getLatest, urlFor } from "@/api/client"
import { useCallback, useEffect, useState } from "react"
import { Card, CardContent } from "./ui/card"
import Autoplay from "embla-carousel-autoplay"
import { Link } from "react-router-dom"
import Genrestags from "./genres-tags"
import SkeletonComponent from "./BannerLoading"
import { motion } from "framer-motion"
import { getYear } from "@/constants/getYear"
import GetReleasedStatus from "@/constants/GetReleasedStatus"

const Banner = () => {
    const [data, setData] = useState([])
    const [isLoading, setisLoading] = useState(true)

    const fetchData = useCallback(async () => {
        const data = await getLatest();
        setData(data);
        data[0] ? setisLoading(false) : null
    }, []);

    useEffect(() => {
        fetchData()
    }, []);

    return (
        <>
            {
                isLoading &&
                <SkeletonComponent />
            }
            {
                !isLoading && data[0] &&
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="lg:px-10 md:min-h-[650px]">
                    <Carousel className="w-full select-none" opts={{
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
                                            <CardContent className="flex items-center lg:justify-center min-[300px]:p-6">
                                                <div className="grid gap-5 lg:grid-cols-2 w-fit" >
                                                    <div className="flex flex-col gap-5 justify-center w-full">
                                                        <div className="flex gap-5 items-center text-xs pr-4 sm:pr-0 w-fit sm:w-full bg-gradient-to-r from-black dark:from-white dark:from-100% sm:dark:from-70% sm:from-70% from-100% sm:to-transparent sm:dark:to-transparent sm:dark:to-90% sm:to-90% rounded-full px-1 min-[300px]:py-1">
                                                            <span className="bg-red-500 px-4 py-2 rounded-full text-white uppercase">{item.status}</span>
                                                            <span className="text-white dark:text-black text-sm text-opacity0"><GetReleasedStatus date={item.releaseDate} /></span>
                                                        </div>
                                                        <h1 className="font-bold text-[32px] min-[300px]:text-3xl sm:text-6xl lg:text-8xl text-wrap sm:w-full">{item.title}</h1>
                                                        <div className="flex gap-5 items-center">
                                                            <span className="border py-1 px-2">{item.type}</span>
                                                            <span>{item.duration}</span>
                                                            <span>{getYear(item.releaseDate)}</span>
                                                        </div>
                                                        <Genrestags genres={item.genres} />
                                                        <p className="text-sm text-opacity-50 md:w-10/12">{item.overview}</p>
                                                        <Link to={`/download/${item.slug.current}`}>
                                                            <Button className="w-fit">More Info</Button>
                                                        </Link>
                                                    </div>
                                                    <div className="flex items-center -order-1 lg:order-1 justify-center lg:justify-end">
                                                        {item.poster ? <img className="w-52 sm:w-72 lg:w-1/2 rounded-xl pointer-events-none" src={urlFor(item.poster).url()} alt={item.slug.current} />
                                                            :
                                                            <div className="flex flex-col items-center gap-5">
                                                                <div className="flex flex-col items-center gap-10">
                                                                    <h2 className="text-5xl">Poster Unavailable</h2>
                                                                </div>
                                                                <p>Sorry for inconvenience</p>
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
                </motion.div>
            }
        </>
    )
}

export default Banner
