import { GalleryMovies, GallerySeries } from "@/components/GalleryList/GalleryList"

const HomeMovieSection = () => {
    const origin = localStorage.getItem('origin')
    return (
        <section className="grid gap-10 py-10">
            <div className="grid gap-3">
                {/* <h3 className="font-semibold text-2xl">Coming Soon</h3> */}
                {/* <div className="min-h-[26rem]">
                    <ComingSoon column={6} link={true} page={1} />
                </div> */}

            </div>
            <div className="border-t pt-10">
                <h2 className="font-semibold text-xl">Latest Release</h2>
            </div>
            <div className="min-h-[26rem]">
                <GalleryMovies column={6} link={true} />
            </div>
            {origin == "south" ? null : origin == "marathi" ? null :
                <div className="min-h-[26rem]">
                    <GallerySeries column={6} link={true} />
                </div>
            }
        </section>
    )
}

export default HomeMovieSection