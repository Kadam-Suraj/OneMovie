import { getMovie, getSeries, search, searchByPlatform } from "@/api/client"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { Button } from "@/components/ui/button"
import Gallery from "./Gallery"
import Processing from "../Processing"

// Gallery Section Home
export const GalleryMovies = ({ column, link }) => {
    const [data, setData] = useState([])
    const [isLoading, setisLoading] = useState(true)
    const storage = localStorage.getItem('origin')

    const fetch = async () => {
        const data = await getMovie(storage || 'hollywood')
        setData(data)
    }

    useEffect(() => {
        fetch()
    }, [storage])

    setTimeout(() => {
        setisLoading(false)
    }, 300);

    return (

        <>

            {!isLoading && data ?

                <div className="grid gap-10 border-t pt-10 items-start">
                    <div className="flex gap-3 justify-between">
                        <h2 className="font-semibold text-2xl text-red-500">Movies</h2>
                        {
                            link ?
                                <Link to={"/movies"}>
                                    <Button>See More</Button>
                                </Link>
                                : null
                        }
                    </div>
                    <div>
                        {
                            <Gallery data={data} items={column} />
                        }
                    </div>
                </div>
                :
                <Processing />
            }
            {!data[0] && !isLoading ?
                <h2 className="text-center w-full font-semibold text-2xl">No Data Found</h2>
                : null
            }
        </>
    )
}


// Gallery Section Series
export const GallerySeries = ({ column, link }) => {
    const [data, setData] = useState([])
    const [isLoading, setisLoading] = useState(true)
    const storage = localStorage.getItem('origin')

    useEffect(() => {
        (async () => {
            const data = (await getSeries(storage || 'hollywood'))
            setData(data)
        })()

        setTimeout(() => {
            setisLoading(false)
        }, 300);
    }, [storage])

    return (

        <>
            {!isLoading && data ?

                <div className="grid gap-10 border-t pt-10">
                    <div className="flex gap-3 justify-between">
                        <h2 className="font-semibold text-2xl text-red-500">Series</h2>
                        {
                            link ?
                                <Link to={"/series"}>
                                    <Button>See More</Button>
                                </Link>
                                : null
                        }
                    </div>
                    <div>
                        {
                            <Gallery data={data} items={column} />
                        }
                    </div>
                </div>
                :
                <Processing />
            }
            {!data[0] && !isLoading ?
                <h2 className="text-center w-full font-semibold text-2xl">No Data Found</h2>
                : null
            }
        </>
    )
}


export const GalleryListSearch = ({ param }) => {
    const [data, setData] = useState([])
    const [isLoading, setisLoading] = useState(true)
    useEffect(() => {
        (async () => {
            const data = (await search(param))
            setData(data)
        })()
        setTimeout(() => {
            setisLoading(false)
        }, 100);
    }, [param])

    return (
        <>
            {!isLoading && data &&
                <div className="grid gap-10 flex-wrap justify-center border-t pt-10">
                    {
                        data[0] ?
                            <div>
                                <Gallery data={data} items={null} />
                            </div>
                            : <div className="flex justify-center items-center w-full">
                                <h2 className="text-4xl font-bold w-full">No Result Found</h2>
                            </div>
                    }
                </div>
            }
        </>
    )
}

export const GalleryListPlatform = () => {
    const [data, setData] = useState([])
    const [isLoading, setisLoading] = useState(true)
    const { platform } = useParams()
    const storage = localStorage.getItem('origin')

    useEffect(() => {
        (async () => {
            const platformRes = await searchByPlatform(platform, storage || 'hollywood')
            setData(platformRes)
        })()
        setTimeout(() => {
            setisLoading(false)
        }, 300);
    }, [platform, storage])

    return (
        <>
            <section className="m-auto max-w-[1536px] grid gap-5 px-5 my-20">
                <div>
                    <h2 className="font-semibold text-lg">Platform : <span className="text-red-500">{platform}</span></h2>
                </div>
                {!isLoading && data ?
                    <div className="grid gap-10 flex-wrap justify-center border-t pt-10">
                        <Gallery data={data} items={null} />
                    </div>
                    :
                    <Processing />
                }
            </section>
        </>
    )
}