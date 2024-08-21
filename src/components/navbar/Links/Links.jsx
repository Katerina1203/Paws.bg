import styles from "./links.module.css";
import NavBarLink from "../NavBarLink";
import {auth} from "@/auth"
import { redirect } from "next/navigation";
import { getUser } from "@/lib/data";

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
		title: "За Контакт",
		path: "/contact",
	},
	{
		title: "Намери Дом",
		path: "/findHome",
	},
	{
		title: "Организации",
		path: "/organisations",
	},

];
const userLogin = async () => {

	const session = await auth();
	console.log(session);

	const dbUser = await getUser(session.user.email)
	

	return (
		<div className={styles.container}>
			<div className={styles.links}>
				{links.map((link) => (
					<NavBarLink item={link} key={link.title} />
				))}
				{
					session ? (
						<>

							<NavBarLink item={{ title: `${session.user.name}`, path: `/user/${dbUser.id}` }} />
              
							
						</>
					) : (
						<NavBarLink item={{ title: "Login", path: "/verifyUser" }} />
					)


				}
			</div>
			<button className={styles.menuButton}>Menu</button>
			{
				session && (
					<div className={styles.mobileLinks}>
						{links.map((link) => (
							<NavBarLink item={link} key={link.title} />
						))}
					</div>
				)
			}
		</div>

	);
};

export default userLogin;
