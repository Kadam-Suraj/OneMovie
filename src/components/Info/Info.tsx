import { getMovieBySlug, getScreenshots, urlFor } from "@/api/client"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import ReactPlayer from "react-player"
import { getYear } from "../Banner"
import { Button } from "../ui/button"
import Download from "../Download/Download"
import Genrestags from "../genres-tags"
import InfoSkeleton from "./InfoSkeleton"

const Info = () => {
    const [data, setData] = useState([])
    const [screenshot, setScreenshot] = useState([])
    const { slug } = useParams()
    const [isLoading, setisLoading] = useState(true)

    const navigate = useNavigate()

    useEffect(() => {
        (async () => {
            const data = (await getMovieBySlug(slug))
            setData(data)
            const screenshot = (await getScreenshots(slug))
            setScreenshot(screenshot)
        })()

        setTimeout(() => {
            setisLoading(false)
        }, 100);
    }, [slug])
    return (
        <>
            {
                isLoading && <InfoSkeleton />
            }
            {!isLoading && data &&

                <div className="m-auto max-w-[1536px] my-20 p-5 min-h-screen">
                    <Button onClick={() => navigate(-1)} variant="default" className="mb-5">Back</Button>
                    {

                        <div>
                            {
                                data.map((item, idx) => {
                                    if (item.slug.current === slug) {
                                        return <div key={idx} >
                                            <div className="flex flex-col gap-10">
                                                <div className="flex flex-col items-center gap-2 justify-center order-2 md:-order-">
                                                    <h2 className="self-start font-bold text-2xl">Watch Trailer :</h2>
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
                                                </div>
                                                <div className="grid grid-cols-1 gap-2">
                                                    <Button variant="outline" className="w-fit pointer-events-none">Download</Button>
                                                    <div className="flex flex-col gap-5 justify-center w-full">
                                                        <h1 className="font-bold text-5xl lg:text-7xl">{item.title}</h1>
                                                        <div className="flex gap-5 items-center">
                                                            <span className="border py-1 px-2">{item.type}</span>
                                                            <span>{item.duration}</span>
                                                            <span>{getYear(item.releaseDate)}</span>
                                                        </div>
                                                        <Genrestags genres={item.genres} />
                                                        <span className="text-xl">Synopsis:</span>
                                                        <p className="text-sm text-gray-900 dark:text-gray-400 text-opacity-80 w-10/12 md:w-1/2">{item.overview}</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center -order-1 lg:order-1 justify-center">
                                                    {item.trailer ? <img className=" w-60 lg:w-1/3 rounded-xl pointer-events-none" src={urlFor(item.poster).url()} />
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
                                                <div className="flex flex-col gap-2 items-center w-10/12 md:w-[60%]">
                                                    {screenshot.map((item, idx) => {
                                                        if (item) {
                                                            return <img key={idx} src={item} alt={`screenshot${idx}`} className="pointer-events-none" />
                                                        }
                                                        if (!item) {
                                                            return <h1 key={idx}>ScreenShots Unavailable</h1>
                                                        }
                                                    })}
                                                </div>
                                            </div>
                                            <div>
                                                <Download slug={slug}></Download>
                                            </div>
                                        </div>
                                    }
                                })
                            }
                        </div>
                    }
                </div>
            }
        </>
    )
}

export default Info