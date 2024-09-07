"use client"
import Image from "next/image"
import NavBarLink from "./NavBarLink";

import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator";
import { ModeToggle } from "@/components/ui/toggle-mode";
import { Session } from "next-auth";

type Props = {
    links: Array<{
		title: string,
		path: string,
	}>
    session: Session | null;
    dbUser: any;
} 
function SheetMenu({links, session, dbUser}: Props) {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Image
                    className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert block row-auto mx-10 md:hidden"
                    src="/hamburger.svg"
                    alt="Next.js Logo"
                    width={30}
                    height={30}
                    priority
                />
            </SheetTrigger>
            <SheetContent>
                {/* <SheetHeader>
                    <SheetTitle></SheetTitle>
                    <SheetDescription>
                        Make changes to your profile here. Click save when you're done.
                    </SheetDescription>
                </SheetHeader> */}
                <div className="grid gap-4 py-4">
                    {links.map((link)=>{
                        return (
                            <NavBarLink item={link} key={link.title} />
                        )
                    })}
                    <Separator orientation="horizontal" className="my-4" />
                    <div className="w-full flex justify-center ">
					    <ModeToggle />
                    </div>
                    {
						session ?
							<NavBarLink item={{ title: `${dbUser.username}`, path: `/user/${dbUser.id}` }} />
							:
							<NavBarLink item={{ title: "Login", path: "/verifyUser" }} />
					}
                </div>
                {/* <SheetFooter>
                    <SheetClose asChild>
                        <Button type="submit">Save changes</Button>
                    </SheetClose>
                </SheetFooter> */}
            </SheetContent>
        </Sheet>
    )
}

export default SheetMenu