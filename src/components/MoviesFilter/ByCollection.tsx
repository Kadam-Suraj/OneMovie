import { getCollection, getCollectionMovie, getSubCollection, urlFor } from "@/api/client"
import { Button } from "@/components/ui/button"
import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react"
import Gallery from "../GalleryList/Gallery"


const ByCollection = () => {

    const [data, setData] = useState([])
    const [collection, setCollection] = useState({})
    const origin = localStorage.getItem('origin')


    const fetchCollection = async () => {
        const data = await getCollection(origin || 'hollywood')
        setData(data)
    }

    useEffect(() => {
        fetchCollection()
        return setCollection('')
    }, [origin])

    return (
        <>
            <div className="border-b py-5 flex flex-col gap-4">
                <h3 className="font-semibold text-lg">Choose Collection:</h3>
                <div className="flex flex-wrap sm:justify-center justify-center items-center transition-all">
                    <div className="grid min-h-20 md:min-h-12">
                        <AnimatePresence>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 1 }}
                                className="flex gap-3 flex-wrap">
                                {data[0] ?
                                    (data?.map((item, idx) => <span
                                        key={idx}>
                                        <Button onClick={() => setCollection({ title: item.title, poster: item.poster })}>{item.title}</Button>
                                    </span>
                                    ))
                                    : <span className="font-semibold text-lg animate-pulse">No Collection.</span>
                                }
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
                <AnimatePresence>
                    <div>
                        {collection &&
                            <CollectionGallery origin={origin} collection={collection} />
                        }
                    </div>
                </AnimatePresence>
            </div>
        </>
    )
}


const CollectionGallery = ({ origin, collection }) => {
    const [data, setData] = useState([])
    const [movieName, setMovieName] = useState('')
    const [movie, setMovie] = useState([])
    const [isOpen, setIsOpen] = useState()

    const fetchCollection = async () => {
        const data = await getSubCollection(origin || 'hollywood', collection.title)
        setData(data[0]?.subCollection)
    }
    const fetchMovie = async () => {
        const movie = await getCollectionMovie(origin || 'hollywood', movieName)
        setMovie(movie)
    }

    const toggleGallery = (index) => {
        setIsOpen(isOpen === index ? null : index); // Toggle the state for the clicked entry
    };

    useEffect(() => {
        fetchCollection()
        return () => {
            setIsOpen(null);
            setMovie[0]
        }
    }, [collection])

    useEffect(() => {
        fetchMovie()
        return () => {
            setMovie['']
        }
    }, [movieName])
    
    return (
        <>
            <AnimatePresence>
                <div className="grid gap-3">
                    <div className="justify-self-end">
                        <Button>See More</Button>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ height: 0 }}
                        transition={{ duration: .5 }}
                        className="flex flex-col gap-4 border p-1 rounded-md">
                        <div className="h-32 md:h-96 w-full">
                            {
                                collection.poster && <div className="relative h-full w-full">
                                    <img className="bg-white rounded-md rounded-b-non h-full w-full object-cover object-top bg-gradient-to-b from-white from-75% to-transparent" src={urlFor(collection.poster).url()} alt={collection.title} />
                                    <div className="absolute top-0 bottom-0 rounded-md rounded-b-non h-full w-full object-cover object-center bg-gradient-to-t from-white to-40% to-transparent dark:from-black dark:to-40% dark:to-transparent" />
                                    <span className="absolute bottom-0 p-2 font-semibold md:text-4xl text-center w-full">{collection.title}</span>
                                </div>
                            }
                        </div>
                        <div className="flex flex-col gap-3 justify-between">
                            {data?.map((item, idx) => (
                                <div
                                    key={idx} className={`flex flex-col gap-2 min-h-48 border rounded-md cursor-pointer transition-all ${isOpen === idx ? 'border-red-600' : null}`}
                                    onClick={() => { toggleGallery(idx); setMovieName(item.title) }}
                                >
                                    <div
                                        className="relative">
                                        <div
                                            className="relative h-48">
                                            {
                                                item.poster && <div className="w-full h-full">
                                                    <img className="rounded-md rounded-b-non w-full h-full object-cover object-top" src={urlFor(item.poster).url()} alt={item.title} />
                                                    <div className="absolute top-0 bottom-0 rounded-md rounded-b-non h-full w-full object-cover object-center bg-gradient-to-t from-white to-40% to-transparent dark:from-black dark:to-40% dark:to-transparent" />
                                                </div>
                                            }
                                        </div>
                                        <div className="absolute bottom-0 w-full">
                                            <h3 className="font-bold text-2xl p-2 text-center">{item.title}</h3>
                                        </div>
                                    </div>
                                    <AnimatePresence >
                                        {isOpen === idx && movie &&
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={isOpen === idx ? { height: 'auto', opacity: 1 } : null}
                                                exit={{ height: 0 }}
                                                transition={{ duration: .3 }}
                                                className="m-2 overflow-x-scroll">
                                                <Gallery data={movie} items={5} ></Gallery>
                                            </motion.div>
                                        }
                                    </AnimatePresence >
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div >
            </AnimatePresence >
        </>
    )
}

export default ByCollection