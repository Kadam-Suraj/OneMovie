import { GalleryMovies, GallerySeries } from "@/components/GalleryList/GalleryList"

const HomeMovieSection = () => {
    return (
        <section className="grid gap-10 py-10">
            <div>
                <h2 className="font-semibold text-xl">Latest Release</h2>
            </div>
            <div>
                <GalleryMovies colmn={6}></GalleryMovies>
            </div>
            <div>
                <GallerySeries colmn={6}></GallerySeries>
            </div>
        </section>
    )
}

export default HomeMovieSection