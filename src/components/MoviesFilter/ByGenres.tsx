import { getAllGenres } from "@/api/client"
import { useCallback, useEffect, useState } from "react"
import MoviesByGenresSkeleton from "./SkeletonMoviesByGenres"
import { Link } from "react-router-dom"
import MoviesByGenre from "./FetchGenres"
import { Card, CardContent } from "../ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel"
import { BiRightArrowAlt } from "react-icons/bi";
import Autoplay from "embla-carousel-autoplay"
import { motion } from "framer-motion"

const ByGenres = () => {
    const [data, setData] = useState([])
    const [isLoading, setisLoading] = useState(true)

    const fetchData = useCallback(async () => {
        const data = await getAllGenres();
        setData(data);

    }, []);

    // console.log(movie)

    useEffect(() => {
        fetchData();
        setTimeout(() => {
            setisLoading(false)
        }, 100);
    }, [fetchData]);

    return (
        <section>
            <div className="flex gap-3 flex-wrap justify-center">
                {
                    isLoading && <MoviesByGenresSkeleton />
                }

                {
                    !isLoading && data &&
                    <div
                        className="w-full grid gap-5">
                        <h2 className="font-semibold text-2xl">Category</h2>
                        <div className="lg:px-10">
                            <Carousel orientation="horizontal" className="gri rid-cols-5 gap- justify-center w-full"
                                // opts={{
                                //     align: "start",
                                //     loop: true,
                                // }}
                                plugins={[
                                    Autoplay({
                                        delay: 7000,
                                    }),
                                ]}

                            >
                                <CarouselContent className="w-64" >
                                    {
                                        data.map((genre, idx) => {
                                            return <CarouselItem key={idx} >
                                                <motion.div
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    transition={{ duration: 0.3 * idx }}
                                                >
                                                    <Link to={`/category/${genre}`}>
                                                        <Card className="rounded-md border overflow-hidden select-none">
                                                            <CardContent className="overflow-hidde p-1">
                                                                <div className="h-[350px] w-full relative">
                                                                    <MoviesByGenre genre={genre}></MoviesByGenre>
                                                                    <div className="w-full h-full bg-red-20 rounded-md absolute top-0 bottom-0 bg-gradient-to-t from-white dark:from-black from-10% to-50% to-transparent" />
                                                                    <div className="absolute bottom-3 px-5 w-full flex justify-between items-center">
                                                                        <h2 className="capitalize font-semibold">{genre}</h2>
                                                                        <BiRightArrowAlt className="text-2xl" />
                                                                    </div>
                                                                </div>
                                                            </CardContent>
                                                        </Card>
                                                    </Link>
                                                </motion.div>
                                            </CarouselItem>
                                        })
                                    }
                                </CarouselContent>
                                <CarouselPrevious className="hidden lg:flex" />
                                <CarouselNext className="hidden lg:flex" />
                            </Carousel>
                        </div>
                    </div>
                }
            </div>
        </section >
    )
}

export default ByGenres