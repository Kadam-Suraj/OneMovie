import { getProfile, urlFor } from "@/api/client"
import { banner } from "@/assets"
import Banner from "@/components/Banner"
import HomeMovieSection from "@/components/HomeSection"
import MoviesFilter from "@/components/MoviesFilter/MoviesFilter"
import { useCallback, useEffect, useState } from "react"

const Hero = () => {
    const [profile, setProfile] = useState([])

    const fetchData = useCallback(async () => {
        const data = await getProfile();
        setProfile(data);
    }, []);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return (
        <>
            <div className="m-auto max-w-[1536px] px-5 min-h-screen">
                <div className="absolute top-0 left-0 right-0 -z-10 w-full h-screen">
                    {profile.map((item, idx) => {
                        return <img key={idx} src={profile[0] ? urlFor(item.image).url() : banner} className="h-[450px] w-full object-cover object-top pointer-events-none select-none backdrop-brightne" alt={item.slug.current} draggable={false} />
                    })}
                    <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-t from-white from-60% via-transparent to-white dark:from-black dark:from-60% dark:via-transparent dark:to-black  " />
                </div>
                <div className="mt-32">
                    <Banner></Banner>
                </div>
                <MoviesFilter />
                <HomeMovieSection />
            </div>
        </>
    )
}

export default Hero