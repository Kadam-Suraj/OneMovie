import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion'
import { Input } from './ui/input';
import { Button } from './ui/button';
import { BiSearch } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom'

const SearchComponent = () => {
    const [showInput, setShowInput] = useState(false);
    const inputRef = useRef(null);
    const buttonRef = useRef(null);
    const [input, setInput] = useState("")

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

    return (
        <div className="flex w-60 lg:w-full items-center justify-end space-x-5 relative">
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
            <Button type="button" variant="ghost" className="rounded-full p-0 m-0" onClick={handleButtonClick} ref={buttonRef}>
                <BiSearch className="text-xl" />
            </Button>
        </div>
    );
};

export default SearchComponent;
