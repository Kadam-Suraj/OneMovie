import ByGenres from "./ByGenres"
import ByPlatform from "./ByPlatform"

const MoviesFilter = ({  }) => {
    return (
        <>
            <section className="flex flex-col gap-10">
                <ByPlatform />
                <ByGenres />
            </section>
        </>
    )
}

export default MoviesFilter