import Heading from "@/components/Heading";
import logo from "../../assets/logo.svg";
import { footerSocialLinks, footerWebLinks } from "@/assets/constant";
import Paragraph from "@/components/Paragraph";

import { Dot } from "lucide-react";
import SocialLinkHolder from "./components/SocialLinkHolder";

const Footer = () => {
	return (
		<footer className="w-full flex flex-col">
			{/* Upper part */}
			<div className="p-7 w-full bg-black flex justify-between">
				{/* Link Part */}

				<div className=" flex  ">
					{/* Logo and Company name */}
					<div className="flex gap-x-2 justify-center items-center ">
						<img src={logo} alt="logo-image" />
						<Heading variant="h5" children="Page Flows" />
					</div>
				</div>

				{/* Web links */}
				<div className="flex justify-between gap-x-4 items-center">
					{footerWebLinks.map((link) => {
						return (
							<Paragraph
								key={link}
								children={link}
								customClass="text-white/90 text-sm"
							/>
						);
					})}
				</div>

				{/* Social Links */}
				<div className="flex justify-center items-center gap-x-2">
					{footerSocialLinks.map((link) => {
						const { name, srcUrl } = link;
						return <SocialLinkHolder name={name} svgSrc={srcUrl} />;
					})}
				</div>
			</div>

			{/* Reserve and Copyright part */}
			<div className="w-full bg-charcoal flex justify-center gap-x-2 items-center py-4">
				<Paragraph
					customClass="text-sm"
					children="Page Flows © Copyright 2025. All rights reserved"
				/>

				<Dot />

				<Paragraph customClass="text-sm" children="Terms & Privacy" />
			</div>
		</footer>
	);
};

export default Footer;
