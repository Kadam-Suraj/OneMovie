import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardFooter } from '../ui/card';
import { urlFor } from '@/api/client';
import { Skeleton } from '../ui/skeleton';

function CardSkeleton({ isVisible }) {
    return isVisible ? null : (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
            className='h-full'
        >
            <div className="rounded-md relative grid gap-3">
                <Skeleton className="rounded-t-md h-80" />
                <div className="flex flex-col items-start gap-2">
                    <div className="w-full">
                        <Skeleton className="w-1/2 h-6" />
                    </div>
                    <div className="flex flex-wrap gap-2 justify-between w-full">
                        <Skeleton className="w-16 h-5" />
                        <Skeleton className="w-16 h-5" />
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

function CardComp({ item, isVisible }) {
    return (<motion.div
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
    >
        <Link to={`/download/${item.slug.current}`}>
            <Card className="border rounded-md relative h-full">
                <div className='p-[.12rem]'>
                    {item.poster ?
                        <img src={urlFor(item?.poster).url()} alt={item.slug.current} className="rounded-md object-top h-80 object-cover w-full" loading="lazy" />
                        :
                        <Skeleton className='rounded-md h-80 w-full' />
                    }
                </div>
                <CardFooter className="flex flex-col items-start gap-2">
                    <div className="w-full">
                        <h2 className="font-semibold text-xl overflow-hidden text-nowrap text-ellipsis">
                            {item.title}
                        </h2>
                    </div>
                    <div className="flex flex-wrap md:text-lg gap-2 justify-between items-center w-full font-semibold">
                        <span className="font-light text-sm">
                            {item.duration}
                        </span>
                        <span className="uppercase text-sm text-red-500">
                            {item.genres[0]}
                        </span>
                    </div>
                </CardFooter>
            </Card>
        </Link>
    </motion.div>
    );
}

function Gallery({ data, items }) {
    const [cardsLoaded, setCardsLoaded] = useState([]);
    const itemCount = items ? Math.min(data.length, items) : data.length;

    useEffect(() => {
        const timeoutIds = [];
        data.slice(0, itemCount).forEach((_, index) => {
            const timeoutId = setTimeout(() => {
                setCardsLoaded(prevState => [...prevState, index]);
            }, index * 200); // Delay loading actual card and unloading card Skeleton
            timeoutIds.push(timeoutId);
        });

        return () => {
            timeoutIds.forEach(timeoutId => clearTimeout(timeoutId));
        };
    }, []);

    return (
        <div className="grid grid-cols-1 min-[350px]:grid-cols-2 sm:grid-cols-4 xl:grid-cols-6 gap-3">
            {data.slice(0, itemCount).map((item, index) => (
                <div key={index} className='h-[24.5rem]'>
                    <CardSkeleton isVisible={cardsLoaded.includes(index)} />
                    <CardComp item={item} isVisible={cardsLoaded.includes(index)} />
                </div>
            ))}
        </div>
    );
}

export default Gallery;
