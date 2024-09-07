import Link from "next/link"
import Links from "./Links/Links"
import Image from "next/image"

import { auth } from "@/auth"
import { getUser } from "@/lib/data";

const Navbar = async () => {
	const session = await auth();
	const dbUser = await getUser(session?.user?.email!)
	return (
		<nav className="max-w-[1600px] w-full mx-auto max-h-32">
			<div className="flex items-center justify-between">
				<Link href="/">
					<Image src={"/img/logo.png"} alt="Logo" width={100} height={50} className="mx-10 my-5 cursor-pointer" />
				</Link>
				<div>
					<Links session={session} dbUser={dbUser} />
				</div>
			</div>
		</nav>
	)
}

export default Navbar