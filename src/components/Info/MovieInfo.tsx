import { useCallback, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Button } from "../ui/button"
import InfoSkeleton from "./InfoSkeleton"
import { motion } from "framer-motion"
import { Helmet } from 'react-helmet';
import Processing from "../Processing"
import { GetMovie, Trailer } from "@/api/tmdb"
// import YouTube from 'react-youtube';
import Genrestags from "../genres-tags"

const MovieInfo = () => {
    const [data, setData] = useState([])
    // const [trailer, setTrailer] = useState([])
    const { id } = useParams()
    const [isLoading, setisLoading] = useState(true)

    const navigate = useNavigate()
    const fetchData = useCallback(async () => {
        const data = [await GetMovie(id)]
        const trailer = await Trailer(id)
        // setTrailer(trailer)
        setData(data)
    }, [id]);

    useEffect(() => {
        fetchData();
        data ? setisLoading(false) : setisLoading(true)
        return setData([])
    }, [id]);
    console.log(data)
    return (
        <>
            <div>
                <div className="fixed h-screen left-0 right-0 top-0 bottom-0 -z-10 object-cover">
                    <div className="w-full h-full">
                        {data.map((item, idx) => item?.backdrop_path && < img key={idx} className="h-screen w-full object-cover" src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`} />)}
                    </div>
                    <div className="bg-white dark:bg-black bg-opacity-70 dark:bg-opacity-70 absolute w-full h-full top-0 bottom-0" />
                </div>
                <div>
                    <div>
                        {
                            isLoading && <InfoSkeleton />
                        }
                        {!isLoading && data[0] ?
                            <div className="m-auto max-w-[1536px] px-5">
                                <Button onClick={() => navigate(-1)} variant="default" className="mb-5">Back</Button>
                                {
                                    data &&
                                    <div>
                                        {
                                            data.map((item, idx) => {
                                                return <div key={idx}>
                                                    <Helmet>
                                                        <title>{item.title}</title>
                                                        <meta property="og:title" content={item.title} />
                                                        <meta property="og:description" content={item.overview} />
                                                        <meta property="og:image" content={`https://image.tmdb.org/t/p/original${item.backdrop_path
                                                            }`} />
                                                        <meta property="og:url" content={window.location.href} />
                                                        <meta property="og:type" content="video.movie" />
                                                    </Helmet>
                                                    <motion.div
                                                        initial={{ opacity: 0 }}
                                                        animate={{ opacity: 1 }}
                                                        exit={{ opacity: 0 }}
                                                        transition={{ duration: 0.7 }}
                                                        key={idx}
                                                        className="grid gap-10">
                                                        <div className="flex flex-col lg:flex-row gap-20">
                                                            <div className="order-1 self-start lg:w-1/2">
                                                                <p className="w-fit pointer-events-none"></p>
                                                                <div className="flex flex-col gap-5 justify-center w-full">
                                                                    <h1 className="font-bold text-3xl min-[320px]:text-5xl lg:text-7xl text-wrap sm:w-full">{item?.title}</h1>
                                                                    <div className="flex flex-wrap gap-5 items-center">
                                                                        <span className="border py-1 px-2">{item?.status}</span>
                                                                        <span>{item?.runtime}m</span>
                                                                        <span>{new Date(item?.release_date).toDateString()}</span>
                                                                    </div>
                                                                    <Genrestags genres={item?.genres} />
                                                                    {/* {item.language ?
                                                                        <div className="flex flex-col items-cente gap-3">
                                                                            <h3 className="text-xl">Available Languages:</h3>
                                                                            <ul className="flex gap-2 flex-wrap">
                                                                                {item.language.sort()?.map((item, idx) => <li key={idx} className="mx-5 list-decimal text-lg font-semibold">{item}</li>)}
                                                                            </ul>
                                                                        </div>
                                                                        : null
                                                                    } */}
                                                                    <span className="text-xl">Synopsis:</span>
                                                                    <p className="text-sm text-gray-900 dark:text-gray-400 text-opacity-80 w-10/12 md:w-1/2">{item.overview}</p>
                                                                </div>
                                                            </div>
                                                            <div className="grid md:grid-cols-1 gap-10 lg:w-1/2">
                                                                <div className="flex items-center justify-center">
                                                                    {
                                                                        item?.poster_path ? <img className=" w-60 lg:w-1/2 rounded-xl pointer-events-none object-cover" src={`https://image.tmdb.org/t/p/original${item?.poster_path}`} alt={`poster ${idx}`} loading="lazy" />
                                                                            :
                                                                            <div className="flex flex-col items-center gap-10">
                                                                                <h2 className="text-2xl md:text-4xl text-center">Poster Unavailable</h2>
                                                                            </div>
                                                                    }
                                                                </div>
                                                                {/* <div className="flex flex-col items-center gap-2 justify-center order- md:-order-">
                                                                    <h2 className="self-start font-bold text-2xl">Watch Trailer :</h2>
                                                                    {
                                                                        trailer[0] ?
                                                                            <div className="flex gap-10 max-w-[90vw] md:w-full overflow-x-scroll">{trailer.map((item, idx) => {
                                                                                if (item.type.toLowerCase() == 'trailer') {
                                                                                    const opts = {
                                                                                        height: '280',
                                                                                        // width: '400',
                                                                                    }
                                                                                    return <div key={idx} className="flex justify-center">
                                                                                        <YouTube videoId={item.key} opts={opts} className="w-3/4 h-2/3 object-contain md:h-full" />
                                                                                    </div>
                                                                                }
                                                                            })}
                                                                            </div>
                                                                            :
                                                                            <h2 className="font-semibold text-2xl">Trailer Unavailable</h2>
                                                                    }
                                                                </div> */}
                                                            </div>
                                                        </div>
                                                        <div className="my-10 flex flex-col items-center gap-10">
                                                            <h2 className="flex items-center flex-col"><span className="font-semibold text-xl">Glimps:</span><span></span></h2>
                                                            {/* <ShowScreenshots /> */}
                                                        </div>
                                                        <div>
                                                            {/* <Download slug={param}></Download> */}
                                                        </div>
                                                        <div className="mt-10 pt-10 border-t">
                                                            {/* <CreateComment movie={data[0]} slug={slug} /> */}
                                                        </div>
                                                    </motion.div>
                                                </div>
                                            })
                                        }
                                    </div>
                                }
                            </div>
                            : <div className="pt-40">
                                <Processing />
                            </div>
                        }
                        {!data[0] && isLoading ?
                            <h2 className="text-center w-full font-semibold text-2xl pt-40">No Data Found</h2>
                            : null
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default MovieInfo