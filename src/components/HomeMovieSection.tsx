import { GalleryListHome } from "@/components/GalleryList/GalleryList"

const HomeMovieSection = () => {
    return (
        <section className="grid gap-10 py-10">
            <div>
                <h2 className="font-semibold text-xl">Latest Release</h2>
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