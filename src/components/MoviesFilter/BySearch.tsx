import { useParams } from "react-router-dom"
import { GalleryListSearch } from "../GalleryList/GalleryList"

const BySearch = () => {
    const { q } = useParams();
    return (
        <section className="m-auto max-w-[1536px] p5 py-20 flex flex-col gap-5">
            <div className="grid gap-10 px-5 lg:px-10">
                <h2 className="font-semibold text-xl">Search Results for: <span className="text-red-500">{q}</span></h2>
                <GalleryListSearch param={q} />
            </div>
        </section>
    )
}

export default BySearch