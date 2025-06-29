import Heading from "@/components/Heading";
import logo from "/assets/logo.svg";
import { footerSocialLinks, footerWebLinks } from "@/constant";
import Paragraph from "@/components/Paragraph";

import { Dot } from "lucide-react";
import SocialLinkHolder from "./components/SocialLinkHolder";

const Footer = () => {
	return (
		<footer className="w-full flex flex-col">
			{/* Upper part */}
			<div className="p-7 w-full bg-black flex flex-col gap-y-7 lg:flex-row justify-center lg:justify-between">
				{/* Link Part */}

				<div className=" flex justify-center">
					{/* Logo and Company name */}
					<div className="flex gap-x-2 justify-center items-center ">
						<img src={logo} alt="logo-image" />
						<Heading variant="h5" children="Page Flows" />
					</div>
				</div>

				{/* Web links */}
				<div className="flex justify-center md:justify-between gap-x-4 items-center">
					{footerWebLinks.map((link) => {
						return (
							<Paragraph
								key={link}
								children={link}
								customClass="text-white/90 text-xs font-semibold md:font-normal md:text-sm px-0"
							/>
						);
					})}
				</div>

				{/* Social Links */}
				<div className="flex justify-center items-center gap-x-2">
					{footerSocialLinks.map((link) => {
						const { name, srcUrl } = link;
						return (
							<SocialLinkHolder
								key={name}
								name={name}
								svgSrc={srcUrl}
								customClass="p-2"
							/>
						);
					})}
				</div>
			</div>

			{/* Reserve and Copyright part */}
			<div className="w-full bg-charcoal px-5 flex justify-center gap-x-2 items-center py-4">
				<Paragraph
					customClass="text-xs md:text-sm "
					children="Page Flows © Copyright 2025. All rights reserved"
				/>

				<Dot />

				<Paragraph customClass="text-xs md:text-sm" children="Terms & Privacy" />
			</div>
		</footer>
	);
};

export default Footer;
