import { Movie } from "@/api/tvdb"
import { useEffect, useState } from "react"

const TVDBMovie = () => {
    const [data, setData] = useState([])
    const fetch = async () => {
        const data = [await Movie()]
        setData(data)
    }

    useEffect(() => {
        fetch()
    }, [])
    console.log(data)
    return (
        <div>TVDBMovie</div>
    )
}

export default TVDBMovie