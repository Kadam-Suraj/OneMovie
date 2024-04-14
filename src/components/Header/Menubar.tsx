import {
    Menubar,
    MenubarMenu,
    MenubarTrigger,
} from "@/components/ui/menubar"
import { motion } from "framer-motion"
import { NavLink } from "react-router-dom"

export function MenubarDesktop() {
    const list = ["Home", "Movies", "Series", "About"]

    return (
        <Menubar className="">
            {
                list.map((item, idx) => {
                    return <MenubarMenu key={idx}>
                        <NavLink to={item == "Home" ? "/" : item} className={({ isActive }) => `${isActive ? "text-red-600 borderb  border-red-" : ""}`}>
                            <motion.div
                                initial={{ scale: 1 }}
                                whileHover={{ scale: 1.1 }}
                                className="w-fit"
                            >
                                <MenubarTrigger className="cursor-pointer" role="link">
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
        <Menubar className="flex flex-col justify-start gap-5 items-start">
            {
                list.map((item, idx) => {
                    return <MenubarMenu key={idx}>
                        <NavLink to={item == "Home" ? "/" : item} className={({ isActive }) => `${isActive ? "text-red-600 " : ""}`}>
                            <MenubarTrigger className="cursor-pointer text-sm min-[350px]:text-lg p-0" role="link">{item}</MenubarTrigger>
                        </NavLink>
                    </MenubarMenu>
                })
            }
        </Menubar >


    )
}



// export function SelectContentMenu() {
//     return (
//       <Select>
//         <SelectTrigger className="w-[180px]">
//           <SelectValue placeholder="Select a fruit" />
//         </SelectTrigger>
//         <SelectContent>
//           <SelectGroup>
//             <SelectLabel>Fruits</SelectLabel>
//             <SelectItem value="apple">Apple</SelectItem>
//             <SelectItem value="banana">Banana</SelectItem>
//             <SelectItem value="blueberry">Blueberry</SelectItem>
//             <SelectItem value="grapes">Grapes</SelectItem>
//             <SelectItem value="pineapple">Pineapple</SelectItem>
//           </SelectGroup>
//         </SelectContent>
//       </Select>
//     )
//   }