import { getEpisodes, getMovie } from "@/api/client"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import ReactPlayer from "react-player"
import { getYear } from "../Banner"
import { Button } from "../ui/button"
import Episodes from "../Episodes/Episodes"

const Info = () => {
    const [data, setData] = useState([])
    const { info } = useParams()

    useEffect(() => {
        (async () => {
            const data = (await getMovie())
            setData(data)
        })()
    }, [])

    
    // console.log(episodes)
    return (
        <div className="m-auto max-w-[1536px] my-20 p-5">
            <Link to={"/"}>
                <Button variant="default" className="mb-5">Home</Button>
            </Link>
            {data.map((item, idx) => {
                if (item.slug.current === info) {
                    return <div key={idx} className="flex flex-col gap-10">
                        <div className="flex justify-center order-1 md:-order-1">
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
                                <span className="text-xl">Synopsis:</span>
                                <p className="text-sm text-gray-900 dark:text-gray-400 text-opacity-80 w-10/12 md:w-1/2">{item.overview}</p>
                                {/* <Link to={`/${item.slug.current}`}>
                                    <Button className="w-fit">More Info</Button>
                                </Link> */}
                            </div>
                        </div>
                    </div>
                }
            })}
            <div>
                <Episodes slug={info}></Episodes>
            </div>
        </div>
    )
}

export default Info