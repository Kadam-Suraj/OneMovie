import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiClock } from "react-icons/fi";
import { Skeleton } from './ui/skeleton';
import { Card, CardFooter } from './ui/card';
// import { WatchProviders } from '@/api/tmdb';

function CardSkeleton({ isVisible }) {
    return isVisible ? null : (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className='absolute top-0 left-0 right-0 bottom-0 w-full'
        >
            <div className="rounded-md relative grid gap-3">
                <Skeleton className="rounded-t-md h-80" />
                <div className="flex flex-col items-start gap-2 px-2">
                    <div className="w-full">
                        <Skeleton className="w-1/2 h-6 rounded-full" />
                    </div>
                    <div className="flex flex-wrap gap-2 justify-between w-full">
                        <Skeleton className="w-16 h-5 rounded-full" />
                        <Skeleton className="w-16 h-5 rounded-full" />
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

function CardComp({ item, isVisible }) {
    // const [platforms, setplatforms] = useState([])
    // const fetch = async () => {
    //     const data = await WatchProviders()
    //     setplatforms(data)
    // }
    // useEffect(() => {
    //     fetch()
    // }, [])

    // console.log(platforms)

    return (<motion.div
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
    >
        <Link to={`/coming-soon/${item.id}`}>
            <Card className="border hover:border-red-600 transition-colors duration-500 rounded-md relative h-full w-full">
                <div className='p-[.12rem] h-80 flex flex-col items-center justify-center'>
                    {item.poster_path ?
                        <img rel="preload" src={`https://image.tmdb.org/t/p/original${item.poster_path}`} className="rounded-md object-top h-full object-cover w-full" loading="eager" alt={item.title.toLowerCase()} />
                        :
                        <span className='rounded-md text-center w-full font-semibold' >Poster Unavailable</span>
                    }
                </div>
                <CardFooter className="flex flex-col items-start gap-2">
                    <div className="w-full">
                        <h2 className="font-semibold text-xl overflow-hidden text-nowrap text-ellipsis">
                            {item.title}
                        </h2>
                    </div>
                    <div className="flex flex-wrap md:text-lg gap-2 justify-between items-center w-full font-semibold">
                        <span className="flex items-center gap-1     font-light text-sm w-fit">
                            <span>
                                <FiClock />
                            </span>
                            <span>
                                {/* {item.duration} */}
                            </span>
                        </span>
                        <span className="uppercase text-sm text-red-600">
                            {/* {item.genres[0]} */} Genres
                        </span>
                    </div>
                </CardFooter>
            </Card>
        </Link>
    </motion.div>
    );
}

function MovieCard({ data, items }) {
    const [cardsLoaded, setCardsLoaded] = useState([]);
    const itemCount = items ? Math.min(data.length, items) : data.length;

    useEffect(() => {
        const timeoutIds = [];
        data.slice(0, itemCount).forEach((_, index) => {
            const timeoutId = setTimeout(() => {
                setCardsLoaded(prevState => [...prevState, index]);
            }, index * 100); // Delay loading actual card and unloading card Skeleton
            timeoutIds.push(timeoutId);
        });
        return () => {
            timeoutIds.forEach(timeoutId => clearTimeout(timeoutId));
        };
    }, [items, data]);

    return (
        <div className="grid grid-cols-1 min-[300px]:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-2">
            <AnimatePresence>
                {data[0] && data.slice(0, itemCount).map((item, index) => (
                    <div key={index} className='relative'>
                        < CardSkeleton isVisible={cardsLoaded.includes(index)} />
                        <CardComp item={item} isVisible={cardsLoaded.includes(index)} />
                    </div>
                ))}
            </AnimatePresence>
        </div>
    );
}

export default MovieCard;
