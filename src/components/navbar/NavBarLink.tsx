
import Link from "next/link";

import { usePathname } from "next/navigation";

type Props = {
	item: {
		path: string;
		title: string;
	}
}

const NavBarLink = ({ item }: Props) => {
	const pathName = usePathname();
	return (
		<Link
			href={item.path}
			className={`min-w-16 p-2 rounded-lg font-medium text-center cursor-pointer ${pathName === item.path && "text-primary bg-white"}`}
		>
			{item.title}
		</Link>
	);
};

export default NavBarLink;