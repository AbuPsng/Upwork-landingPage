import type { NavLinkPropType } from "@/types/types";

export const headingClassProperty = {
	h1: "text-[57px] text-white  leading-[66px] tracking-[-3px] font-bold text-center  w-full",
	h2: "text-[44px] text-white  leading-[55px] tracking-[-3px] font-bold text-center",
	h3: "text-3xl  text-white leading-[40px] tracking-[-1px] font-semibold text-start",
	h4: "text-xl text-white  leading-[28px] tracking-[-1px] font-semibold text-start mb-[50px]",
	h5: "text-base text-white  leading-[24px] tracking-[-0.5px] font-bold text-start",
	h6: "text-lg text-white  leading-[28px] tracking-[-0.5px] capitalize font-semibold text-start",
};

export const buttonBgVariant = {
	PRIMARY: "bg-main/90 hover:bg-main text-black hover:text-lightBlack",
	SECONDARY: "bg-charcoal hover:bg-gray-500/20 text-white/70 hover:text-white",
	GHOST: "bg-main hover:bg-main/90 text-charcoal hover:text-black",
	BASIC: "text-white/70 hover:text-white",
};

export const navLinks: Array<NavLinkPropType> = [
	{ link: "/ios", children: "IOS" },
	{ link: "/android", children: "Android" },
	{ link: "/web", children: "Web" },
	{ link: "/emails", children: "Emails" },
];
