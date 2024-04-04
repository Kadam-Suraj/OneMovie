import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { Card, CardFooter } from "../ui/card"
import { urlFor } from "@/api/client"

const Gallery = ({ data, items }) => {
    const itemCount = items ? Math.min(data.length, items) : data.length;

    return (
        <div className="grid grid-cols-1 min-[350px]:grid-cols-2 sm:grid-cols-4 xl:grid-cols-6 gap-3">
            {data.slice(0, itemCount).map((item, idx) => (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.07 * idx }}
                    key={idx}
                >
                    <Link to={`/download/${item.slug.current}`}>
                        <Card className="border rounded-md relative">
                            <img src={urlFor(item.poster).url()} alt={item.slug.current} className="rounded-t-md object-top h-80 object-cover w-full" loading="lazy" />
                            <CardFooter className="flex flex-col items-start gap-2">
                                <div className="w-full">
                                    <h2 className="font-semibold text-xl overflow-hidden text-nowrap text-ellipsis">
                                        {item.title}
                                    </h2>
                                </div>
                                <div className="flex flex-wrap md:text-lg gap-2 justify-between items-center w-full font-semibold">
                                    <span className="font-light text-sm">
                                        {item.duration}
                                    </span>
                                    <span className="uppercase text-sm text-red-500">
                                        {item.genres[0]}
                                    </span>
                                </div>
                            </CardFooter>
                        </Card>
                    </Link>
                </motion.div>
            ))}
        </div>
    );
}


export default Gallery