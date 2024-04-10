import ByGenres from "./ByGenres"
import ByOrigin from "./ByOrigin"
import ByPlatform from "./ByPlatform"

const MoviesFilter = () => {
    return (
        <>
            <section className="m-auto max-w-[1536px] border-y p5 py-10 flex flex-col gap-5">
                <ByOrigin />
                <ByPlatform />
                <ByGenres />
            </section>
        </>
    )
}

export default MoviesFilter