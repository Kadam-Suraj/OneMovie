import { getPlatforms, searchByPlatform, urlFor } from "@/api/client"
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
import { Card, CardFooter } from "../ui/card"
import { motion } from "framer-motion"
import { Button } from "../ui/button"

// export let PlatformData
// const [first, setfirst] = useState([])

const ByPlatform = () => {

    const [response, setResponse] = useState([])
    const [data, setData] = useState([])
    const [platform, setplatform] = useState("")


    const fetchData = useCallback(async () => {
        const res = await getPlatforms()
        setData(res)
        const platformRes = await searchByPlatform(platform)
        setResponse(platformRes)
    }, [platform]);

    useEffect(() => {
        fetchData()
    }, [platform])

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
                response[0] &&
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.3 }}
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
                    <motion.div
                        initial={{ opacity: 0, }}
                        whileInView={{ opacity: 1, }}
                        transition={{ duration: 0.5 }}
                        className="grid grid-cols-1 min-[350px]:grid-cols-2 sm:grid-cols-4 xl:grid-cols-6 gap-3 justify-center w-full pb-10">
                        {
                            response[0] ?
                                response.map((item, idx) => {
                                    if (idx < 6) {
                                        return <motion.div
                                            initial={{ opacity: 0, }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.5 }}
                                            key={idx}
                                        >
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
                                })
                                :
                                <div>
                                    <h2>No Data in this platform</h2>
                                </div>
                        }
                    </motion.div>
                </motion.div>
            }
        </section>
    )
}

export default ByPlatform