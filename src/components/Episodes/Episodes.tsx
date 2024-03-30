import { getEpHD, getEpUHD } from "@/api/client"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Button } from "../ui/button"

const Episodes = ({ slug }) => {

    // const [episodes, setEpisodes] = useState([])
    const [HD, setHD] = useState([])
    const [FHD, setFHD] = useState([])
    const [UHD, setUHD] = useState([])

    useEffect(() => {
        (async () => {
            // const episodes = (await getEpisodes(slug))
            // setEpisodes(episodes[0].episodes)
            const HD = (await getEpHD(slug))
            setHD(HD.hd)
            const FHD = (await getEpHD(slug))
            setFHD(FHD.fhd)
            const UHD = (await getEpUHD(slug))
            setUHD(UHD.uhd)
        })()
    }, [])

    console.log(UHD)




    // episodes?.map((item) => {
    //     item.episodes?.map((ep : any) => {
    //         // setHD(ep)
    //         // ep.hd?.map((hd, i) => {
    //         //     // console.log(hd.number)
    //         // })
    //     })
    // })
    // console.log(HD)
    return (
        <>
            <div>

                {
                    HD ?
                        <div className="mt-16 border-t pt-10 flex sm:items-center flex-col gap-5">
                            <h2 className="text-3xl">Download Episodes 720P</h2>
                            <div className="flex flex-wrap gap-5 justify-center">
                                {HD?.map((item, idx) => {
                                    return <div key={idx}>
                                        <Link to={item.link} about="_blank" className="w-fit"><Button>{item.number} {item.size}</Button></Link>
                                    </div>
                                })}
                            </div>
                        </div>
                        : ""
                }
                {
                    FHD ?
                        <div className="mt-16 border-t pt-10 flex sm:items-center flex-col gap-5">
                            <h2 className="text-3xl">Download Episodes 1080P</h2>
                            <div className="flex gap-5 justify-center">
                                {FHD?.map((item, idx) => {
                                    return <div key={idx}>
                                        <Link to={item.link} about="_blank" className="w-fit"><Button>{item.number} {item.size}</Button></Link>
                                    </div>
                                })}
                            </div>
                        </div>
                        : ""
                }
                {
                    UHD ?
                        <div className="mt-16 border-t pt-10 flex sm:items-center flex-col gap-5">
                            <h2 className="text-3xl">Download Episodes 2160P/4K</h2>
                            <div className="flex gap-5 justify-center">
                                {UHD?.map((item, idx) => {
                                    return <div key={idx}>
                                        <Link to={item.link} about="_blank" className="w-fit"><Button>{item.number} {item.size}</Button></Link>
                                    </div>
                                })}
                            </div>
                        </div>
                        : ""
                }
            </div>
        </>
    )
}

export default Episodes