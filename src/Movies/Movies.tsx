import { GalleryMovies } from "@/components/GalleryList/GalleryList";

const CategorySection = () => {
    return (
        <div className="flex flex-col gap-2">
            <h2 className="font-bold text-2xl">Explore our wide variety of categories</h2>
            <p className="text-sm">Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new</p>
        </div>
    );
};

const Movies = () => {
    return (
        <section className="m-auto max-w-[1536px] flex flex-col gap-5 px-5">
            <div className="grid lg:grid-cols-2 justify-between">
                <CategorySection />
            </div>
            <GalleryMovies column={null} link={null} />
        </section>
    );
};

export default Movies;
