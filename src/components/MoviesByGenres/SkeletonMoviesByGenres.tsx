import { Skeleton } from "../ui/skeleton"

const MoviesByGenres = () => {

    // console.log(data)

    return (
        <section className="">
            <div className="flex gap-3 flex-wrap justify-center">
                {
                    [...Array(11)].map((item, idx) => {
                        return <Skeleton key={idx} className="bg-gray-300 animate-pulse rounded h-8 w-20">{item}
                        </Skeleton>
                    })
                }
            </div>
        </section>
    )
}

export default MoviesByGenres