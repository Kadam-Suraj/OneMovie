import { getMovie, getSeries, search, searchByPlatform } from "@/api/client"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { Button } from "@/components/ui/button"
import Gallery from "./Gallery"
import Processing from "../Processing"
import { Upcoming } from "@/api/tmdb"
import MovieCard from "../MovieCards"

// Gallery Section Home
export const GalleryMovies = ({ column, link }) => {
    const [data, setData] = useState([])
    const [isLoading, setisLoading] = useState(true)
    const storage = localStorage.getItem('origin')

    const fetch = async () => {
        const data = await getMovie(storage || 'hollywood')
        setData(data)
        setisLoading(false)
    }

    useEffect(() => {
        fetch()
    }, [storage])

    return (

        <>

            {!isLoading && data ?

                <div className="grid gap-10 border- pt0 items-start">
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
            setisLoading(false)
        })()

    }, [storage, isLoading])

    return (

        <>
            {!isLoading && data ?

                <div className="grid gap-10 pt-10">
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
            setisLoading(false)
        })()
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
            setisLoading(false)
        })()
    }, [platform, storage])

    return (
        <>
            <section className="m-auto max-w-[1536px] grid gap-5 px-5">
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




// Gallery Section Home
export const ComingSoon = ({ column, link, page }) => {
    const [data, setData] = useState([])
    const [isLoading, setisLoading] = useState(true)
    const storage = localStorage.getItem('origin')

    const fetch = async () => {
        const res = await Upcoming(page)
        // const data = await getMovie(storage || 'hollywood')
        setData(res)
        setisLoading(false)
    }

    useEffect(() => {
        fetch()
        // return setData([])
    }, [storage, page])

    return (

        <>

            {!isLoading && data ?

                <div className="grid gap-10 border-t pt-10 items-start">
                    <div className="flex gap-3 justify-between">
                        <h2 className="text-2xl font-semibold">Coming soon</h2>
                        {
                            link ?
                                <Link to={"/coming-soon"}>
                                    <Button>See More</Button>
                                </Link>
                                : null
                        }
                    </div>
                    <div>
                        {
                            <MovieCard data={data} items={column} />
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