import { motion } from "framer-motion";
import { Skeleton } from "../ui/skeleton";

const SkeletonComponent = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
            className="m-auto max-w-[1536px] my-20 p-5 min-h-screen">
            <Skeleton className="mb-5 h-8 w-20 rounded-full"/>
            <div>
                {/* Skeleton Carousel Item */}
                <div className="flex flex-col gap-10">
                    <div className="flex flex-col items-center gap-2 justify-center order-2 md:-order-">
                        <h2 className="self-start font-bold text-2xl">
                            <Skeleton className="h-8 w-1/2" />
                        </h2>
                        <div className="w-full flex justify-center">
                            <Skeleton className="h-60 w-1/2 " />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-2 order-1">
                        <Skeleton className="h-12 w-32 rounded-full" />
                        <div className="flex flex-col gap-5 justify-center w-full">
                            <h1 className="font-bold text-5xl lg:text-7xl">
                                <Skeleton className="h-12 w-60 rounded-full" />
                            </h1>
                            <div className="flex gap-5 items-center">
                                <Skeleton className="h-8 w-20 rounded-full" />
                                <Skeleton className="h-8 w-20 rounded-full" />
                                <Skeleton className="h-8 w-20 rounded-full" />
                            </div>
                            <span className="text-xl">
                                <Skeleton className="h-8 w-40 rounded-full" />
                            </span>
                            <Skeleton className="h-20 w-full md:w-1/2 rounded-full" />
                        </div>
                    </div>
                    <div className="flex justify-center lg:order-1">
                        <Skeleton className="h-96 w-72" />
                    </div>
                </div>
                {/* End of Skeleton Carousel Item */}
                <div className="my-10 flex flex-col items-center gap-10">
                    <div className="flex items-center flex-col gap-3">
                        <Skeleton className="h-8 w-44 rounded-full" />
                        <Skeleton className="h-8 w-60 rounded-full" />
                    </div>
                    <div className="flex flex-col gap-3 items-center w-10/12 md:w-[60%]">
                        {[...Array(5)].map((_, idx) => (
                            <Skeleton key={idx} className="h-60 w-2/3" />
                        ))}
                    </div>
                </div>
                <div className="flex justify-center">
                    <Skeleton className="h-12 w-48 rounded-full" />
                </div>
            </div>
        </motion.div>
    );
}

export default SkeletonComponent;
