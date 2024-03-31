import { GalleryListHome } from "@/assets/GalleryList/GalleryList"

const HomeMovieSection = () => {
    return (
        <section className="mb-10 grid gap-10">
            <div>
                <h2 className="font-semibold text-xl pb-5">Latest Release</h2>
            </div>
            <div>
                <GalleryListHome type="Movies" link="Movies"></GalleryListHome>
            </div>
            <div>
                <GalleryListHome type="TV Series" link="Series"></GalleryListHome>
            </div>
        </section>
    )
}

export default HomeMovieSection