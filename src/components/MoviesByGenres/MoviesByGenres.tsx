import { getAllGenres } from "@/api/client"
import { useEffect, useState } from "react"

const MoviesByGenres = () => {
    const [data, setdata] = useState([])

    useEffect(() => {
        (async () => {
            const data = (await getAllGenres())
            setdata(data)
        })()
    }, [])
    console.log(data)

    return (
        <section className="border-t py-10">

        </section>
    )
}

export default MoviesByGenres