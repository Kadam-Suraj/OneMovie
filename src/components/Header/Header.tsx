import { logo } from "@/assets"
import { MenubarDesktop } from "./Menubar"
import { ModeToggle } from "../mode-toggle"
import { BiSearch } from "react-icons/bi";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useState } from "react";
import { Link } from "react-router-dom";
import { MobileMenu } from "./MobileMenu";
import SearchBar from "../SearchBar";

const Header = () => {
    const [search, setSearch] = useState(false)

    const openSearch = () => {
        setSearch(true)
    }

    return (
        <header className="bg-white dark:bg-black backdrop-blur bg-opacity-30 border-b md:border-b-0 md:border-x border-slate-300 border-x- dark:bg-opacity-30 md:rounded-full items-center grid grid-cols-2 md:grid-cols-3 gap-2 px-5 py-2 pt-3 mx-auto max-w-[1536px]">
            <Link to={"/"} className="w-fit z-10 flex items-center gap-5">
                <img className="dark:invert-0 invert select-none" src={logo} width={40} alt="logo" />
                <span className="text-2xl font-semibold min-[380px]:block hidden">Rapid<span className="text-red-600">Flix</span></span>
            </Link>
            <nav role="navigation" className="md:flex hidden items-center justify-center">
                <ul className="flex gap-2" role="menubar">
                    <li role="menuitem">
                        <MenubarDesktop></MenubarDesktop>
                    </li>
                </ul>
            </nav>
            <nav className="relative flex gap-2 items-center justify-end">
                <BiSearch onClick={openSearch} className={`${search ? "hidden" : "block"} hidden text-2xl cursor-pointer`} id="search" />
                <div className={`${search ? "block" : "hidden"} hidden absolute top-14 right-0 items-center gap-5`} id="search">
                    <Input className="w-44" type="text" placeholder="Search content"></Input>
                    <Button>Search</Button>
                </div>
                <div className="flex gap-2 items-center justify-center">
                    <SearchBar></SearchBar>
                    <ModeToggle></ModeToggle>
                </div>
                <div className="md:hidden block">
                    <MobileMenu></MobileMenu>
                </div>
            </nav>
        </header>
    )
}

export default Header