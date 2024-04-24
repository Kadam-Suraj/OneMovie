import { getMovieBySlug, getScreenshots, urlFor } from "@/api/client"
import { useCallback, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import ReactPlayer from "react-player"
import { Button } from "../ui/button"
import Download from "../Download/Download"
import Genrestags from "../genres-tags"
import InfoSkeleton from "./InfoSkeleton"
import { motion } from "framer-motion"
import { getYear } from "@/constants/getYear"
import { Helmet } from 'react-helmet';
import Processing from "../Processing"
import CreateComment from "../Comments/CreateComment"

const Info = () => {
    const [data, setData] = useState([])
    const [screenshot, setScreenshot] = useState([])
    const [param, setParam] = useState("")
    const { slug } = useParams()
    const [isLoading, setisLoading] = useState(true)

    const navigate = useNavigate()
    const fetchData = useCallback(async () => {
        setParam(slug)
        const data = await getMovieBySlug(slug)
        setData(data)
        const screenshot = await getScreenshots(slug)
        setScreenshot(screenshot)
    }, [slug]);

    useEffect(() => {
        fetchData();
        data ? setisLoading(false) : setisLoading(true)
    }, [slug]);

    return (
        <>
            <div className="elative top-0">
                <div className="absolute h-screen left-0 right-0 top-0 bottom-0 -z-10 object-contan object-scale-down">
                    {data[0] && (data.map((item, idx) => item.cover ? < img key={idx} className="h-screen w-full object-cover" src={urlFor(item?.cover).url()} /> : null))}
                    <div className="bg-white dark:bg-black bg-opacity-70 dark:bg-opacity-70 absolute w-full h-full top-0 bottom-0" />
                </div>
                <div className="overflow-y-scroll">
                    <div className="h-screen">
                        {
                            isLoading && <InfoSkeleton />
                        }
                        {!isLoading && data[0] ?
                            <div className="m-auto max-w-[1536px] py-24 pt-40 p-5">
                                <Button onClick={() => navigate(-1)} variant="default" className="mb-5">Back</Button>
                                {
                                    data[0] &&
                                    <div>
                                        {
                                            data.map((item, idx) => {
                                                if (item.slug.current === param) {
                                                    return <div key={idx}>
                                                        <Helmet>
                                                            <title>{item.title}</title>
                                                            <meta property="og:title" content={item.name} />
                                                            <meta property="og:description" content={item.overview} />
                                                            <meta property="og:image" content={urlFor(item.poster).url()} />
                                                            <meta property="og:url" content={window.location.href} />
                                                            <meta property="og:type" content="video.movie" />
                                                        </Helmet>
                                                        <motion.div
                                                            initial={{ opacity: 0 }}
                                                            animate={{ opacity: 1 }}
                                                            exit={{ opacity: 0 }}
                                                            transition={{ duration: 0.7 }}
                                                            key={idx} >
                                                            <div className="flex flex-col gap-10">
                                                                <div className="flex flex-col items-center gap-2 justify-center order-2 md:-order-">
                                                                    <h2 className="self-start font-bold text-2xl">Watch Trailer :</h2>
                                                                    {
                                                                        item.trailer ?
                                                                            <div className="w-full flex justify-center">
                                                                                <ReactPlayer
                                                                                    config={{
                                                                                        youtube: {
                                                                                            playerVars: { showinfo: 0, }
                                                                                        }
                                                                                    }}
                                                                                    controls
                                                                                    url={item.trailer}
                                                                                />
                                                                            </div>
                                                                            :
                                                                            <h2 className="font-semibold text-2xl">Trailer Unavailable</h2>
                                                                    }
                                                                </div>
                                                                <div className="grid grid-cols-1 gap-2">
                                                                    <Button variant="outline" className="w-fit pointer-events-none">Download</Button>
                                                                    <div className="flex flex-col gap-5 justify-center w-full">
                                                                        <h1 className="font-bold text-3xl min-[320px]:text-5xl lg:text-8xl text-wrap sm:w-full">{item.title}</h1>
                                                                        <div className="flex gap-5 items-center">
                                                                            <span className="border py-1 px-2">{item.type}</span>
                                                                            <span>{item.duration}</span>
                                                                            <span>{getYear(item.releaseDate)}</span>
                                                                        </div>
                                                                        <Genrestags genres={item.genres} />
                                                                        {item.language ?
                                                                            <div className="flex flex-col items-cente gap-3">
                                                                                <h3 className="text-xl">Available Languages:</h3>
                                                                                <ul className="flex gap-2 flex-wrap">
                                                                                    {item.language.sort()?.map((item, idx) => <li key={idx} className="mx-5 list-decimal text-lg font-semibold">{item}</li>)}
                                                                                </ul>
                                                                            </div>
                                                                            : null
                                                                        }
                                                                        <span className="text-xl">Synopsis:</span>
                                                                        <p className="text-sm text-gray-900 dark:text-gray-400 text-opacity-80 w-10/12 md:w-1/2">{item.overview}</p>
                                                                    </div>
                                                                </div>
                                                                <div className="flex items-center -order-1 lg:order-1 justify-center">
                                                                    {item.poster ? <img className=" w-60 lg:w-1/3 rounded-xl pointer-events-none" src={urlFor(item.poster).url()} alt={`poster ${idx}`} loading="lazy" />
                                                                        :
                                                                        <div className="flex flex-col items-center gap-5">
                                                                            <div className="flex flex-col items-center gap-10">
                                                                                {/* <img src={emoji} width={150} className="pointer-events-none" /> */}
                                                                                <h2 className="text-5xl">Poster Unavailable</h2>
                                                                            </div>
                                                                            <p>sorry for inconvenience</p>
                                                                        </div>
                                                                    }
                                                                </div>
                                                            </div>
                                                            <div className="my-10 flex flex-col items-center gap-10">
                                                                <h2 className="flex items-center flex-col"><span className="font-semibold text-xl">ScreenShots:</span><span>Must See Before Downloading . . .</span></h2>
                                                                <div className="flex flex-col items-center w-10/12 md:w-[60%]">
                                                                    {screenshot[0] ?
                                                                        <div className="grid gap-5">
                                                                            {
                                                                                screenshot.map((item, idx) => {
                                                                                    return <img key={idx} src={item} alt={`screenshot${idx}`} className="pointer-events-none w-full" />
                                                                                })
                                                                            }
                                                                        </div>
                                                                        :
                                                                        <h1 key={idx}>ScreenShots Not Available</h1>
                                                                    }
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <Download slug={param}></Download>
                                                            </div>
                                                            <div className="mt-20 border-t">
                                                                <CreateComment movie={data[0]} slug={slug} />
                                                            </div>
                                                        </motion.div>
                                                    </div>
                                                }
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

export default Info