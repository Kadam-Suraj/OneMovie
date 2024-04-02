import { GalleryList } from "@/components/GalleryList/GalleryList"

const Movies = () => {

    return (
        <section className="m-auto max-w-[1536px] grid gap-5 px-5 my-20 min-h-screen">
            <div className="grid lg:grid-cols-2 items-center justify-between">
                <div className="flex flex-col gap-2">
                    <h2 className="font-bold text-2xl">Explore our wide variety of categories</h2>
                    <p className="text-sm">Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new</p>
                </div>
            </div>
            <GalleryList type={"Movies"} link={null}></GalleryList>
        </section>
    )
}

export default Movies