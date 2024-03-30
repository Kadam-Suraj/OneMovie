import { getMovieBySlug, getScreenshots, urlFor } from "@/api/client"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import ReactPlayer from "react-player"
import { getYear } from "../Banner"
import { Button } from "../ui/button"
import Download from "../Download/Download"

const Info = () => {
    const [data, setData] = useState([])
    const [screenshot, setScreenshot] = useState([])
    const { slug } = useParams()
    // const [isLoaded, setisLoaded] = useState(true)


    useEffect(() => {
        (async () => {
            const data = (await getMovieBySlug(slug))
            setData(data)
            const screenshot = (await getScreenshots(slug))
            setScreenshot(screenshot)
        })()
    }, [slug])

    // if (data[0].slug.current == slug) {
    //     setisLoaded(true)
    // }

    // console.log()



    // console.log(episodes)
    return (
        <div className="m-auto max-w-[1536px] my-20 p-5 min-h-screen">
            <Link to={"/"}>
                <Button variant="default" className="mb-5">Home</Button>
            </Link>
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
                                                {/* <div className="flex gap-5 items-center text-xs lg:w-1/2 bg-gradient-to-r from-black from-30% to-transparent to-90% rounded-full px-1 py-1">
                                </div> */}
                                                <h1 className="font-bold text-5xl lg:text-7xl">{item.title}</h1>
                                                <div className="flex gap-5 items-center">
                                                    <span className="border py-1 px-2">{item.type}</span>
                                                    <span>{item.duration}</span>
                                                    <span>{getYear(item.releaseDate)}</span>
                                                </div>
                                                <div className="flex flex-wrap gap-2">
                                                    {item.genres.map((item: any, idx: any) => {
                                                        return <Button key={idx} variant="outline" className="pointer-events-none rounded-full uppercase">{item}</Button>
                                                    })}
                                                </div>
                                                <span className="text-xl">Synopsis:</span>
                                                <p className="text-sm text-gray-900 dark:text-gray-400 text-opacity-80 w-10/12 md:w-1/2">{item.overview}</p>
                                                {/* <Link to={`/${item.slug.current}`}>
                                    <Button className="w-fit">More Info</Button>
                                </Link> */}
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
                                                return <h1 key={idx}>ScreenShots Unavailable</h1>
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
    )
}

export default Info