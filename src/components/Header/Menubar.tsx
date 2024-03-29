import {
    Menubar,
    MenubarMenu,
    MenubarTrigger,
} from "@/components/ui/menubar"
import { NavLink } from "react-router-dom"

export function MenubarDemo() {
    const list = ["Home", "Movies", "Series", "About"]

    return (
        <Menubar className="lg:border-b">
            {
                list.map((item, idx) => {
                    return <MenubarMenu key={idx}>
                        <NavLink to={item == "Home" ? "/" : item} className={({ isActive }) => `${isActive ? "text-red-500 " : ""}`}>
                            <MenubarTrigger className="cursor-pointer">{item}</MenubarTrigger>
                        </NavLink>
                    </MenubarMenu>
                })
            }
        </Menubar >


    )
}
