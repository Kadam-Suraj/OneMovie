import Movies from "@/Movies/ComingSoon";
import { useParams } from "react-router-dom"

const BySearch = () => {
    const { q } = useParams();
    return (
        <section className="m-auto max-w-[1536px] flex flex-col gap-5">
            <div className="grid gap-10 px-5 lg:px-10">
                <h2 className="font-semibold text-xl">Search Results for: <span className="text-red-500">{q}</span></h2>
                <Movies />
            </div>
        </section>
    )
}

export default BySearch