import NavLink from "./NavLink";
import { navLinks } from "../../../assets/constant.ts";
import type { NavLinkPropType } from "@/types/types.js";
import { cn } from "@/lib/utils.ts";

const Navigation = ({ customClass }: { customClass?: string }) => {
	return (
		<nav
			className={cn(
				"justify-around outline-[0.5px]  border-white bg-lightDark py-[0px] md:py-1  px-2 rounded-lg",
				customClass
			)}
		>
			{navLinks.map((link: NavLinkPropType) => (
				<NavLink
					customClass={customClass}
					key={link.link}
					link={link.link}
					children={link.children}
				/>
			))}
		</nav>
	);
};

export default Navigation;
