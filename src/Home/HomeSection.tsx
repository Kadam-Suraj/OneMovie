import { useEffect } from "react"
import HomeMovieSection from "@/components/HomeSection";
import ByOrigin from "@/components/MoviesFilter/ByOrigin";
import MoviesFilter from "@/components/MoviesFilter/MoviesFilter";
import { useOrigin } from "@/Context/OriginContext";
import TVDBMovie from "@/Movies/TVDBMovie";

const HomeSection = () => {
    const { setOrigin } = useOrigin()

    useEffect(() => {
        // const cachedData = localStorage.getItem('origin');
        // cachedData ? setOrigin(cachedData) : setOrigin('hollywood');
    }, []);

    const handleStoreInCache = (item) => {
        localStorage.setItem('origin', item);
        setOrigin(item)
    };

    return (
        <>
            <section className="m-auto max-w-[1536px] border-y py-10 flex flex-col gap-5">
                <div className="">
                    <ByOrigin cachefnc={handleStoreInCache} />
                </div>
                <MoviesFilter />
                <HomeMovieSection />
                <TVDBMovie></TVDBMovie>
            </section >
        </>
    )
}

export default HomeSection
