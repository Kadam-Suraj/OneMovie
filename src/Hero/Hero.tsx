import { getMovie, urlFor } from "@/api/client"
import { banner, newBg } from "@/assets"
import Banner from "@/components/Banner"
import { useEffect, useState } from "react"

const Hero = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        (async () => {
            const data = (await getMovie())
            setData(data)
        })()
    }, [])
    return (
        <>
            <div className="m-auto max-w-[1536px] px-5">
                <div className="absolute top-0 left-0 right-0 -z-10 w-full h-screen">
                    <img src={banner} className="h-[450px] w-full object-cover object-top pointer-events-none select-none backdrop-brightness-50" alt="bg" draggable={false} />
                    <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-t dark:hidden from-white from-55% via-transparent to-white  " />
                    <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-t hidden dark:block from-black from-55% via-transparent to-black " />
                </div>
                <div className="mt-32">
                    <Banner></Banner>
                </div>
            </div>
        </>
    )
}

export default Hero