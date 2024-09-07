"use client"
import { Session } from "next-auth";
import NavBarLink from "../NavBarLink";
import SheetMenu from "@/components/navbar/SheetMenu";
import { Separator } from "@/components/ui/separator";
import { ModeToggle } from "@/components/ui/toggle-mode";

const links = [
	{
		title: "За Нас",
		path: "/about",
	},
	{
		title: "Животни",
		path: "/animals",
	},
	
	{
		title: "Подай Сигнал",
		path: "/signal",
	},
	{
		title: "Сигнали",
		path: "/allsignals",
	},
	{
		title: "Организации",
		path: "/organisations",
	},
	{
		title: "За Контакт",
		path: "/contact",
	},
];
type Props = {
	session: Session | null;
	dbUser: any;
}
const userLogin = ({ session, dbUser }: Props) => {
	return (
		<>
			<div className="hidden row-auto md:block h-full z-10">
				<div className="flex items-center gap-3">
					{links.map((link) => {
						if(link.path === "/signal" && !session) return null;
						return(
							<NavBarLink item={link} key={link.title} />
						)
					}
					
					)}
					<Separator className="mx-4" />
					<ModeToggle />
					{
						session ?
							<NavBarLink item={{ title: `${dbUser.username}`, path: `/user/${dbUser._id}` }} />
							:
							<NavBarLink item={{ title: "Login", path: "/verifyUser" }} />
					}
				</div>
			</div>
			<div>
				<SheetMenu links={links} session={session} dbUser={dbUser} />
			</div>
		</>

	);
};

export default userLogin;
