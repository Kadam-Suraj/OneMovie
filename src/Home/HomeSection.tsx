import HomeMovieSection from "@/components/HomeSection"
import ByOrigin from "@/components/MoviesFilter/ByOrigin";
import MoviesFilter from "@/components/MoviesFilter/MoviesFilter"
import { useState } from "react"

const HomeSection = () => {
    const [section, setSection] = useState('');

    const reciveData = (data) => {
        setSection(data)
    }
    console.log(section)
    return (
        <>
            <section className="m-auto max-w-[1536px] border-y p5 py-10 flex flex-col gap-5">

                <ByOrigin fnc={reciveData} />
                <MoviesFilter  />
                <HomeMovieSection />
            </section>
        </>
    )
}

export default HomeSection