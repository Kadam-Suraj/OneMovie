import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
import {
    Sheet,
    // SheetClose,
    SheetContent,
    // SheetDescription,
    // SheetFooter,
    // SheetHeader,
    // SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { MenubarPhone } from "./Menubar"

export function MobileMenu() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="ghost">Menu</Button>
            </SheetTrigger>
            <SheetContent className="px-0 pt-10">
                {/* <SheetHeader>
                    <SheetTitle>Edit profile</SheetTitle>
                    <SheetDescription>
                        Make changes to your profile here. Click save when you're done.
                    </SheetDescription>
                </SheetHeader> */}
                {/* <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                       
                        <Input id="name" value="Pedro Duarte" className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        
                        <Input id="username" value="@peduarte" className="col-span-3" />
                    </div>
                </div> */}

                <ul className="flex gap-2 ">
                    <MenubarPhone></MenubarPhone>
                </ul>
                {/* <SheetFooter>
                    <SheetClose asChild>
                        <Button type="submit">Save changes</Button>
                    </SheetClose>
                </SheetFooter> */}
            </SheetContent>
        </Sheet>
    )
}
