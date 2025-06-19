import type { NavLinkPropType } from "@/types/types";

export const classProperty = {
	h1: "font-[57px] leading-[66px] tracking-[-3px] font-[700] text-center",
	h2: "font-[44px] leading-[55px] tracking-[-3px] font-[700] text-center",
	h3: "font-[30px] leading-[40px] tracking-[-1px] font-[600] text-start",
	h4: "font-[20px] leading-[28px] tracking-[-1px] font-[600] text-start mb-[50px]",
	h5: "font-[16px] leading-[24px] tracking-[-0.5px] font-[700] text-start",
	h6: "font-[18px] leading-[28px] tracking-[-0.5px] capitalize font-[600] text-start",
};

export const buttonBgVariant = {
	PRIMARY: "bg-main/90 hover:bg-main text-black hover:text-lightBlack",
	SECONDARY: "bg-main hover:bg-main/90 text-charcoal hover:text-black",
	GHOST: "bg-main hover:bg-main/90 text-charcoal hover:text-black",
	BASIC: "text-white/70 hover:text-white",
};

export const navLinks: Array<NavLinkPropType> = [
	{ link: "/ios", children: "IOS" },
	{ link: "/android", children: "Android" },
	{ link: "/web", children: "Web" },
	{ link: "/emails", children: "Emails" },
];
