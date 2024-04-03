import { Skeleton } from "@/components/ui/skeleton";
import { motion } from "framer-motion";

const SkeletonComponent = ({ items }) => {
    const cols = items || 12
    return (
        <div
            className="grid gap-10 border-t pt-10">
            <h2 className="font-semibold text-2xl">
                <Skeleton className="w-20 h-7" />
            </h2>
            <div className="grid min-[350px]:grid-cols-2 sm:grid-cols-4 xl:grid-cols-6 gap-3" >
                {[...Array(cols)].map((_, idx) => (
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.7 }}
                        key={idx}>
                        <div className="rounded-md relative grid gap-3">
                            <Skeleton className="rounded-t-md h-80" />
                            <div className="flex flex-col items-start gap-2">
                                <div className="w-full">
                                    <h2 className="font-semibold text-xl overflow-hidden text-nowrap text-ellipsis">
                                        <Skeleton className="w-1/2 h-6" />
                                    </h2>
                                </div>
                                <div className="flex flex-wrap text-xs md:text-lg gap-2 justify-between w-full font-semibold">
                                    <Skeleton className="w-16 h-5" />
                                    <Skeleton className="w-16 h-5" />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default SkeletonComponent;