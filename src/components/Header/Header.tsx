import { logo } from "@/assets"
import { MenubarDemo } from "./Menubar"
import { ModeToggle } from "../mode-toggle"
import { BiSearch } from "react-icons/bi";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useState } from "react";
import { Link } from "react-router-dom";
import { MobileMenu } from "./MobileMenu";

const Header = () => {
    const [search, setSearch] = useState(false)

    const openSearch = () => {
        setSearch(true)
    }
    // const closeSearch = () => {
    //     setSearch(false)
    // }
    // if (search == true) {
    //     const body = document.body
    //     body.addEventListener("click", (e) => {
    //         if (e.target.id == "search") {
    //         }
    //         else {
    //             closeSearch()
    //             console.log("close")
    //         }
    //     })
    // }

    // console.log(search)

    return (
        <header className="bg-white dark:bg-black backdrop-blur bg-opacity-30 border-b md:border-b-0 md:border-x border-slate-300 border-x- dark:bg-opacity-30 md:rounded-full items-center grid grid-cols-2 md:grid-cols-3 gap-2 px-5 py-2 pt-3 mx-auto max-w-[1536px]">
            <Link to={"/"}>
                <img className="dark:invert-0 invert select-none" src={logo} width={40} alt="logo" />
            </Link>
            <nav className="md:flex hidden items-center justify-center">
                <ul className="flex gap-2">
                    <MenubarDemo></MenubarDemo>
                </ul>
            </nav>
            <nav className="relative flex gap-2 items-center justify-end">
                <BiSearch onClick={openSearch} className={`${search ? "hidden" : "block"} hidden text-2xl cursor-pointer`} id="search" />
                <div className={`${search ? "block" : "hidden"} hidden absolute top-14 right-0 items-center gap-5`} id="search">
                    <Input className="w-44" type="text" placeholder="Search content"></Input>
                    <Button>Search</Button>
                </div>
                <ModeToggle></ModeToggle>
                <div className="md:hidden block">
                    <MobileMenu></MobileMenu>
                </div>
            </nav>
        </header>
    )
}

export default Header