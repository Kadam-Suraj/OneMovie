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
import { AnimatePresence, motion } from "framer-motion"
import { Button } from "../ui/button"
import Gallery from "../GalleryList/Gallery"

const ByPlatform = () => {

    const [response, setResponse] = useState([])
    const [data, setData] = useState([])
    const [platform, setplatform] = useState("")
    const storage = localStorage.getItem('origin')

    const fetchData = useCallback(async () => {
        const res = await getPlatforms(storage || 'hollywood')
        setData(res)
        const platformRes = await searchByPlatform(platform, storage)
        setResponse(platformRes)
    }, [platform, storage]);

    useEffect(() => {
        fetchData()
    }, [platform, fetchData, storage])

    return (
        <section className="flex flex-col gap-5 justify-center w-full pb-10 border-b">
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
            <AnimatePresence>

                {
                    data && response[0] &&
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
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
            </AnimatePresence>
            <AnimatePresence>
                {
                    !response[0] && platform ? <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0, delay: .3 }}
                        className="h-20 flex flex-col items-center justify-center">
                        <h2 className="font-semibold text-xl animate-pulse">No Data in this platform</h2>
                        <p className="text-lg animate-pulse">Please Select Another Origin or Platform</p>
                    </motion.div>
                        : null
                }
            </AnimatePresence>
        </section>
    )
}

export default ByPlatform