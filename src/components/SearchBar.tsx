import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion'
import { Input } from './ui/input';
import { Button } from './ui/button';
import { BiSearch } from 'react-icons/bi';
import { Link, useNavigate } from 'react-router-dom'
import { search, urlFor } from '@/api/client';
import { getYear } from '@/constants/getYear';

const SearchComponent = () => {
    const [showInput, setShowInput] = useState(false);
    const inputRef = useRef(null);
    const buttonRef = useRef(null);
    const [input, setInput] = useState("")
    const [data, setData] = useState([])
    // const [isLoading, setisLoading] = useState(true)

    const redirect = useNavigate()

    const overFlowHandler = () => {
        if (showInput) {
            document.body.style.overflow = "clip"
            // document.body.style.height = "100svh"
        }
        else {
            document.body.removeAttribute("style")
        }
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (showInput && !inputRef.current.contains(event.target) && !buttonRef.current.contains(event.target)) {
                setShowInput(false);
            }
        };
        document.addEventListener('click', handleClickOutside);
        overFlowHandler()

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
        <div className="flex w-60 lg:w-fit items-center justify-end space-x-5">
            <div className='relative' ref={inputRef}>
                <div className="w-56 absolute lg:static top-14 -right-28 sm:-right-20 md:right-0" >
                    {showInput && (
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 20 }}
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
                <div className="w-[21rem] absolute lg:stat top-[7rem] lg:top-20 -right-36 sm:-right-40 md:right-0 w-ful  ">
                    {showInput && input && data[0] && (
                        <div className='rounded-md border overflow-hidden'>
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className="w-fit  grid gap-2 p-2 lg:border-non max-h-[25rem] overflow-y-scroll bg-white dark:bg-black backdrop-blur bg-opacity-90 dark:bg-opacity-85"
                            >
                                {data.map((item, idx) => (
                                    <Link to={`/download/${item.slug.current}`} key={idx} onClick={handleButtonClick}>
                                        <div className="flex items-center gap-3 w-80 border-b dark:hover:bg-gray-800 hover:bg-gray-300 transition duration-200 rounded-md">
                                            <img
                                                src={urlFor(item.poster).url()}
                                                alt={item.slug.current}
                                                className="h-fit w-20 object-cover rounded-md"
                                            />
                                            <div>
                                                <h2 className="font-semibold text-lg pr-1">{item.title}</h2>
                                                <span className="text-gray-400 dark:text-gray-300">
                                                    {getYear(item.releaseDate)}
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </motion.div>
                        </div>
                    )}
                </div>
            </div>
            <Button type="button" variant="ghost" className="rounded-full p-0 m-0" onClick={handleButtonClick} ref={buttonRef}>
                <BiSearch className="text-xl" />
            </Button>


        </div>
    );
};

export default SearchComponent;
