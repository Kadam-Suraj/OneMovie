import { getOriginMovie } from "@/api/client"
import { useCallback, useEffect, useState } from "react"
import { Button } from "../ui/button"
import { SkeletonByOrigin } from "./SkeletonMoviesByGenres"

const ByOrigin = () => {
    const [data, setData] = useState([])
    const [isLoading, setisLoading] = useState(true)
    const [section, setSection] = useState("hollywood")

    const fetchData = useCallback(async () => {
        const data = await getOriginMovie();
        setData(data);
    }, []);

    useEffect(() => {
        fetchData();
        setTimeout(() => {
            setisLoading(false)
        }, 300);
    }, [fetchData]);

    return (
        <section>
            <div className="flex gap-3 flex-wrap justify-center min-h-10">
                {
                    isLoading && <SkeletonByOrigin />
                }

                {
                    !isLoading && data &&
                    <div className="flex gap-3 flex-wrap justify-center">
                        {
                            data.map((item, idx) => {
                                return <Button key={idx} className={`${item == section ? 'text-red- bg-red-600' : ''} capitalize rounded-full hover:bg-red-400`} onClick={() => setSection(item)}>
                                    {item}
                                </Button>
                                //          <Link to={`/${item == "hollywood" ? "" : `${item}`}`} >
                                // </Link>
                            })
                        }
                    </div>
                }
            </div>
        </section>
    )
}

export default ByOrigin