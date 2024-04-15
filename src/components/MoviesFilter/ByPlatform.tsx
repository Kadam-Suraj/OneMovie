import { getPlatforms, searchByPlatform } from "@/api/client"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useCallback, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { Button } from "../ui/button"
import Gallery from "../GalleryList/Gallery"
import { useOrigin } from "@/Context/OriginContext"

const ByPlatform = () => {

    const [response, setResponse] = useState([])
    const [data, setData] = useState([])
    const [platform, setplatform] = useState("")

    const { origin } = useOrigin()

    const fetchData = useCallback(async () => {
        const res = await getPlatforms(origin)
        setData(res)
        const platformRes = await searchByPlatform(platform, origin)
        setResponse(platformRes)
    }, [platform, origin]);

    useEffect(() => {
        fetchData()
    }, [platform, fetchData])
    console.log(response)

    return (
        <section className="flex flex-col gap-5 justify-center w-full">
            <div className="self-center">
                <DropdownMenu>
                    <DropdownMenuTrigger className="border px-4 py-2 rounded-md bg-black dark:bg-white text-white dark:text-black">{platform || "Platform"}</DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>Choose Platform</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        {
                            data[0] ? data.map((item, idx) => {
                                return <DropdownMenuItem key={idx} className="cursor-pointer"
                                    onClick={() => setplatform(item)}
                                >{item}
                                </DropdownMenuItem>
                            })
                                :
                                <DropdownMenuItem className="cursor-pointer">Platform Unavailable</DropdownMenuItem>
                        }
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            {
                data && response[0] &&
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col gap-5">
                    <div className="flex gap-3 justify-between">
                        <h2 className="text-lg font-semibold">Platform: <span className="text-red-500">{platform}</span></h2>
                        {/* <div className="hidden">
                            <GalleryListPlatform param={response}></GalleryListPlatform>
                        </div> */}
                        <Link to={`/category/platform/${platform}`}>
                            <Button>See More</Button>
                        </Link>
                    </div>
                    {
                        response && <div>
                            <Gallery data={response} items={6} />
                        </div>
                    }
                </motion.div>
            }
            {
                response.length < 1 ? <div className="h-20 flex flex-col items-center justify-center">
                    <h2 className="font-semibold text-xl animate-pulse">No Data in this platform</h2>
                    <p className="text-lg animate-pulse">Please Select Another Origin or Platform</p>
                </div>
                    : null
            }
        </section>
    )
}

export default ByPlatform