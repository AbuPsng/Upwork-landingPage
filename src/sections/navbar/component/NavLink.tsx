import { cn } from "@/lib/utils";
import type { NavLinkPropType } from "@/types/types";
import { Link } from "react-router-dom";

const NavLink = ({ link, children, customClass }: NavLinkPropType) => {
	return (
		<Link to={link}>
			<div
				className={cn(
					"py-3 px-2 md:px-4 font-normal w-fit text-base tracking-[-0.5px] leading-[21px] hover:bg-navLink rounded-lg",
					customClass
				)}
			>
				{children}
			</div>
		</Link>
	);
};

export default NavLink;
