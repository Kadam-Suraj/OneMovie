import { GalleryMovies, GallerySeries } from "@/components/GalleryList/GalleryList"

const HomeMovieSection = () => {
    return (
        <section className="grid gap-10 py-10">
            <div>
                <h2 className="font-semibold text-xl">Latest Release</h2>
            </div>
            <div>
                <GalleryMovies column={6} link={true}></GalleryMovies>
            </div>
            <div>
                <GallerySeries column={6} link={true}></GallerySeries>
            </div>
        </section>
    )
}

export default HomeMovieSection