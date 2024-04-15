import HomeMovieSection from "@/components/HomeSection"
import ByOrigin from "@/components/MoviesFilter/ByOrigin";
import MoviesFilter from "@/components/MoviesFilter/MoviesFilter"
import { useState } from "react"

const HomeSection = () => {
    const [section, setSection] = useState('hollywood');
    const reciveData = (data) => {
        setSection(data)
        // return data
    }
    console.log(section)
    return (
        <>
            <section className="m-auto max-w-[1536px] border-y py-10 flex flex-col gap-5">
                <div className="flex justify-center">
                    {/* <div>
                    </div> */}
                    {/* <h2 className="font-semibold text-2xl">Choose Section:</h2> */}
                    <ByOrigin fnc={reciveData} />
                </div>
                <MoviesFilter />
                <HomeMovieSection />
            </section>
        </>
    )
}

export default HomeSection