import { getOrigin } from "@/api/client"
import { useCallback, useEffect, useState } from "react"
import { Button } from "../ui/button"
import SkeletonMoviesByGenres from "./SkeletonMoviesByGenres"
import { Link } from "react-router-dom"

const ByOrigin = () => {
    const [data, setData] = useState([])
    const [isLoading, setisLoading] = useState(true)

    const fetchData = useCallback(async () => {
        const data = await getOrigin();
        setData(data);
    }, []);

    useEffect(() => {
        fetchData();
        setTimeout(() => {
            setisLoading(false)
        }, 100);
    }, [fetchData]);

    return (
        <section>
            <div className="flex gap-3 flex-wrap justify-center">
                {
                    isLoading && <SkeletonMoviesByGenres />
                }

                {
                    !isLoading && data &&
                    <div className="flex gap-3 flex-wrap justify-center">
                        {
                            data.map((item, idx) => {
                                return <Button key={idx} className="capitalize rounded-full">
                                    <Link to={"#"}>
                                        {item}
                                    </Link>
                                </Button>
                            })
                        }
                    </div>
                }
            </div>
        </section>
    )
}

export default ByOrigin