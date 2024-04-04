import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion'
import { Input } from './ui/input';
import { Button } from './ui/button';
import { BiSearch } from 'react-icons/bi';
import { Link, useNavigate } from 'react-router-dom'
import { search, urlFor } from '@/api/client';
import { getYear } from './Banner';

const SearchComponent = () => {
    const [showInput, setShowInput] = useState(false);
    const inputRef = useRef(null);
    const buttonRef = useRef(null);
    const [input, setInput] = useState("")
    const [data, setData] = useState([])
    // const [isLoading, setisLoading] = useState(true)


    const redirect = useNavigate()

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (showInput && !inputRef.current.contains(event.target) && !buttonRef.current.contains(event.target)) {
                setShowInput(false);
            }
        };
        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [showInput]);

    const handleButtonClick = () => {
        setShowInput(!showInput);
    };

    const submitInput = (e: any) => {
        if (e.key == "Enter") {
            redirect(`/search/${input}`);
            setShowInput(false);
        }
    }

    const getData = async () => {
        const data = await search(input)
        setData(data)
    }

    useEffect(() => {
        if (input) {
            getData()
        }
        // setTimeout(() => {
        //     setisLoading(false)
        // }, 100);
    }, [input])

    return (
        <div className="flex w-60 lg:w-full items-center justify-end space-x-5">
            <div className='relative'>
                <div className="w-56 absolute lg:static top-14 -right-28 sm:-right-20 md:right-0" ref={inputRef}>
                    {showInput && (
                        <motion.div
                            initial={{ opacity: 0, x: 0 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3 }}
                            className="border lg:border-none rounded-md bg-white dark:bg-black backdrop-blu bg-opacity-90 dark:bg-opacity-85"
                        >
                            <Input
                                type="text" placeholder="Search Content by Title, ..."
                                className=''
                                value={input}
                                onChange={((e) => setInput(e.target.value))}
                                onKeyDown={((e) => submitInput(e))}
                                autoFocus
                            />
                        </motion.div>
                    )}
                </div>
            </div>
            <Button type="button" variant="ghost" className="rounded-full p-0 m-0" onClick={handleButtonClick} ref={buttonRef}>
                <BiSearch className="text-xl" />
            </Button>
            <div className="-56 absolute lg:stat top-[7rem] lg:top-20 right-28 sm:right-20 md:right-0 w-full">
                {showInput && input && data[0] && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "26rem" }}
                        transition={{ duration: 0.5 }}
                        className=" w-fit border grid gap-2 p-2 lg:border-non max-h6 overflow-y-scroll scroll-mb-0 rounded-md bg-white dark:bg-black backdrop-blu bg-opacity-90 dark:bg-opacity-85"
                    >
                        {data.map((item, idx) => {
                            return <Link to={`/download/${item.slug.current}`}>
                                <div key={idx} className='flex items-center gap-3 w-80 border-b pb-2'>
                                    <img src={urlFor(item.poster).url()} alt={item.slug.current} className='h-fit w-20 object-cover rounded-md' />
                                    <div>
                                        <h2 className='font-semibold text-lg'>{item.title}</h2>
                                        <span className='text-gray-300'>{getYear(item.releaseDate)}</span>
                                    </div>
                                </div>
                            </Link>
                        })}
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default SearchComponent;
