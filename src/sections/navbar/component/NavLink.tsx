import type { NavLinkPropType } from "@/types/types";
import { Link } from "react-router-dom";

const NavLink = ({ link, children }: NavLinkPropType) => {
	return (
		<Link to={link}>
			<div className="py-3 px-4 font-[16px] tracking-[-0.5px] leading-[21px] hover:bg-navLink rounded-lg">
				{children}
			</div>
		</Link>
	);
};

export default NavLink;
