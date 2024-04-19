import {
    Menubar,
    MenubarMenu,
    MenubarTrigger,
} from "@/components/ui/menubar"
import { motion } from "framer-motion"
import { NavLink } from "react-router-dom"
import { SheetClose } from "../ui/sheet"

export function MenubarDesktop() {
    const list = ["Home", "Movies", "Series", "About"]

    return (
        <Menubar className="bg-black text-white dark:bg-white dark:text-black rounded-md space-x-1 divide-x divide-red-600">
            {
                list.map((item, idx) => {
                    return <MenubarMenu key={idx}>
                        <NavLink to={item == "Home" ? "/" : item} className={({ isActive }) => `${isActive ? "text-red-600 borderb  border-red-" : ""}`}>
                            <motion.div
                                initial={{ scale: 1 }}
                                whileHover={{ scale: 1.1 }}
                                className="w-fit"
                            >
                                <MenubarTrigger className="cursor-pointer " role="link">
                                    {item}
                                </MenubarTrigger>
                            </motion.div>
                        </NavLink>
                    </MenubarMenu>
                })
            }
        </Menubar >
    )
}

export function MenubarPhone() {
    const list = ["Home", "Movies", "Series", "About"]

    return (
        <Menubar className="flex flex-col justify-start gap-5 items-start border-t w-full mt-2">
            {
                list.map((item, idx) => {
                    return <MenubarMenu key={idx}>
                        <NavLink to={item == "Home" ? "/" : item} className={({ isActive }) => `${isActive ? "text-red-600" : ""}`}>
                            <SheetClose asChild>
                                <MenubarTrigger className="cursor-pointer text-sm min-[350px]:text-lg p-0" role="link">{item}</MenubarTrigger>
                            </SheetClose>
                        </NavLink>
                    </MenubarMenu>
                })
            }
        </Menubar >
    )
}