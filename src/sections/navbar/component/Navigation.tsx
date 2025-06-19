import NavLink from "./NavLink";
import { navLinks } from "../../../assets/constant.ts";
import type { NavLinkPropType } from "@/types/types.js";

const Navigation = () => {
	return (
		<nav className="flex justify-around outline-[0.5px] border-white bg-lightDark py-1 px-2 rounded-lg">
			{navLinks.map((link: NavLinkPropType) => (
				<NavLink key={link.link} link={link.link} children={link.children} />
			))}
		</nav>
	);
};

export default Navigation;
