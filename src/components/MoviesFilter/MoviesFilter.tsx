import ByGenres from "./ByGenres"
import ByOrigin from "./ByOrigin"

const MoviesFilter = () => {
    return (
        <>
            <section className="m-auto max-w-[1536px] border-y px-5 py-10 flex flex-col gap-5">
                <ByOrigin />
                <ByGenres />
            </section>
        </>
    )
}

export default MoviesFilter