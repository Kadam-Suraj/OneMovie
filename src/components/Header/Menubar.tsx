import {
    Menubar,
    MenubarMenu,
    MenubarTrigger,
} from "@/components/ui/menubar"
import { NavLink } from "react-router-dom"


import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export function MenubarDesktop() {
    const list = ["Home", "Movies", "Series", "About"]

    return (
        <Menubar className="lg:border-b">
            {
                list.map((item, idx) => {
                    return <MenubarMenu key={idx}>
                        <NavLink to={item == "Home" ? "/" : item} className={({ isActive }) => `${isActive ? "text-red-500 " : ""}`}>
                            <MenubarTrigger className="cursor-pointer" role="link">{
                                item == "Movies" || item == "Series" ?
                                    <Select>
                                        <SelectTrigger className="appearance-none" >
                                            <SelectValue placeholder={item} className="appearance-none" />
                                        </SelectTrigger>
                                        <SelectContent className="appearance-none" >
                                            <SelectGroup className="appearance-none" >
                                                <NavLink to={item} className={({ isActive }) => `${isActive ? "text-red-600" : ""} cursor-pointer `}>
                                                    <SelectLabel>All {item}</SelectLabel>
                                                </NavLink>
                                                <SelectItem value={item} className="cursor-pointer">{item}</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                    :
                                    item

                            }</MenubarTrigger>
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
                        <NavLink to={item == "Home" ? "/" : item} className={({ isActive }) => `${isActive ? "text-red-500 " : ""}`}>
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