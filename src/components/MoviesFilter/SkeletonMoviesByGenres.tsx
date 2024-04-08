import { Carousel, CarouselContent, CarouselNext, CarouselPrevious } from "../ui/carousel";
import { Skeleton } from "../ui/skeleton"
import { motion } from "framer-motion";

const MoviesByGenresSkeleton = () => {
    // Placeholder data for categories

    return (
        <div className="w-full grid gap-5 h-[25.75rem]">
            <h2 className="font-semibold text-2xl">Category</h2>
            <div className="lg:px-10">
                <div className="grid grid-cols-1 min-[350px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 grid-rows-1 overflow-hidden ">
                    <Carousel orientation="horizontal" className="gap- justify-center sm:w-fit"
                    >
                        <CarouselContent className="" >
                            {[...Array(5)].map((genre, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                    about={genre}
                                >
                                    <div className="w-64">
                                        <div className="flex flex-col gap-2 p-2">
                                            <div className="grid gap-1">
                                                <Skeleton className="aspect-w-16 h-80"></Skeleton>
                                            </div>
                                            <div className="w-full">
                                                <Skeleton className="h-5 rounded-full mx-3"></Skeleton>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="hidden lg:flex" />
                        <CarouselNext className="hidden lg:flex" />
                    </Carousel>
                </div>
            </div>
        </div>
    );
};

export default MoviesByGenresSkeleton;



export const SkeletonByOrigin = () => {

    // console.log(data)

    return (
        <section className="">
            <div className="flex gap-3 flex-wrap justify-center">
                {
                    [...Array(2)].map((item, idx) => {
                        return <Skeleton key={idx} className="rounded-full h-9 w-24">{item}
                        </Skeleton>
                    })
                }
            </div>
        </section>
    )
}
