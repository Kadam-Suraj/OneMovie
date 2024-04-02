import { getMovie, search, urlFor } from "@/api/client"
import { Card, CardFooter } from "@/components/ui/card"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import GallerySkeleton from "./GallerySkeleton"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export const GalleryList = ({ type, link }) => {
    const [data, setData] = useState([])
    const [isLoading, setisLoading] = useState(true)
    useEffect(() => {
        (async () => {
            const data = (await getMovie())
            setData(data)
        })()

        setTimeout(() => {
            setisLoading(false)
        }, 100);
    }, [])

    return (

        <>
            {
                isLoading && <GallerySkeleton />
            }
            {!isLoading && data &&

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
                                        return <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ duration: 0.3 }}
                                            key={idx}>
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
                                    }
                                }
                                else if (type !== "TV Series") {
                                    if (item?.type !== "TV Series") {
                                        return <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ duration: 0.3 }}
                                            key={idx}>
                                            <Link to={`/download/${item?.slug.current}`}>
                                                <Card className="border rounded-md relative">
                                                    <img src={urlFor(item?.poster).url()} alt={item?.slug.current} className="rounded-t-md object-top h-80 object-cover w-full" loading="lazy" />
                                                    <CardFooter className="flex flex-col items-start gap-2">
                                                        <div className="w-full">
                                                            <h2 className="font-semibold text-xl overflow-hidden text-nowrap text-ellipsis">
                                                                {item?.title}
                                                            </h2>
                                                        </div>
                                                        <div className="flex flex-wrap md:text-lg gap-2 justify-between items-center w-full font-semibold">
                                                            <span className="font-light text-sm">
                                                                {item?.duration}
                                                            </span>
                                                            <span className="uppercase text-sm text-red-500">
                                                                {item?.genres[0]}
                                                            </span>
                                                        </div>
                                                    </CardFooter>
                                                </Card>
                                            </Link>
                                        </motion.div>
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

export const GalleryListHome = ({ type, link }) => {
    const [data, setData] = useState([])
    const [isLoading, setisLoading] = useState(true)
    useEffect(() => {
        (async () => {
            const data = (await getMovie())
            setData(data)
        })()
        setTimeout(() => {
            setisLoading(false)
        }, 100);
    }, [])

    return (

        <>
            {
                isLoading && <GallerySkeleton />
            }
            {!isLoading && data &&
                <div className="grid gap-10">
                    <div className="flex gap-3 justify-between">
                        <h2 className="font-semibold text-2xl">{type == "TV Series" ? "Series" : "Movies"}</h2>
                        {link ?
                            <Link to={link}>
                                <Button>See More</Button>
                            </Link>
                            : null
                        }
                    </div>
                    <div className="grid min-[350px]:grid-cols-2 sm:grid-cols-4 xl:grid-cols-6 gap-3 border-b pb-10">
                        {
                            data.map((item, idx) => {
                                if (type == "TV Series" && idx <= 5) {
                                    if (item.type == "TV Series") {
                                        return <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ duration: 0.3 }}
                                            key={idx}>
                                            <Link to={`/download/${item.slug.current}`}>
                                                <Card className="border rounded-md relative">
                                                    <img src={urlFor(item.poster).url()} alt={item.slug.current} className="rounded-t-md object-top h-80 object-cover w-full" loading="lazy" />
                                                    <CardFooter className="flex flex-col items-start gap-2">
                                                        <div className="w-full">
                                                            <h2 className="font-semibold text-xl overflow-hidden text-nowrap text-ellipsis">
                                                                {item.title}
                                                            </h2>
                                                        </div>
                                                        <div className="flex flex-wrap md:text-lg gap-2 items-center justify-between w-full font-semibold">
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
                                    }
                                }
                                else if (type !== "TV Series") {
                                    if (item?.type !== "TV Series" && idx <= 5) {
                                        return <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ duration: 0.3 }}
                                            key={idx}>
                                            <Link to={`/download/${item?.slug.current}`}>
                                                <Card className="border rounded-md relative">
                                                    <img src={urlFor(item?.poster).url()} alt={item?.slug.current} className="rounded-t-md object-top h-80 object-cover w-full" loading="lazy" />
                                                    <CardFooter className="flex flex-col items-start gap-2">
                                                        <div className="w-full">
                                                            <h2 className="font-semibold text-xl overflow-hidden text-nowrap text-ellipsis">
                                                                {item?.title}
                                                            </h2>
                                                        </div>
                                                        <div className="flex flex-wrap md:text-lg gap-2 items-center justify-between w-full font-semibold">
                                                            <span className="font-light text-sm">
                                                                {item?.duration}
                                                            </span>
                                                            <span className="uppercase text-sm text-red-500">
                                                                {item?.genres[0]}
                                                            </span>
                                                        </div>
                                                    </CardFooter>
                                                </Card>
                                            </Link>
                                        </motion.div>
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

export const GalleryListSearch = ({ param }) => {
    const [data, setData] = useState([])
    const [isLoading, setisLoading] = useState(true)
    useEffect(() => {
        (async () => {
            const data = (await search(param))
            setData(data)
        })()
        setTimeout(() => {
            setisLoading(false)
        }, 100);
    }, [param])

    return (
        <>
            {
                isLoading && <GallerySkeleton />
            }
            {!isLoading && data &&
                <div className="grid gap-10 flex-wrap justify-center border-t pt-10">
                    {
                        data[0] ?
                            <div className="grid min-[350px]:grid-cols-2 sm:grid-cols-4 xl:grid-cols-6 gap-3 border-b pb-10">
                                {
                                    data.map((item, idx) => {
                                        return <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ duration: 0.3 }}
                                            key={idx}>
                                            <Link to={`/download/${item.slug.current}`}>
                                                <Card className="border rounded-md relative">
                                                    <img src={urlFor(item.poster).url()} alt={item.slug.current} className="rounded-t-md object-top h-80 object-cover w-full" loading="lazy" />
                                                    <CardFooter className="flex flex-col items-start gap-2">
                                                        <div className="w-full">
                                                            <h2 className="font-semibold text-xl overflow-hidden text-nowrap text-ellipsis">
                                                                {item.title}
                                                            </h2>
                                                        </div>
                                                        <div className="flex flex-wrap md:text-lg gap-2 items-center justify-between w-full font-semibold">
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
                                    })
                                }
                            </div>
                            : <div className="flex justify-center items-center w-full">
                                <h2 className="text-4xl font-bold w-full">No Result Found</h2>
                            </div>
                    }
                </div>
            }
        </>
    )
}