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

export const upperMarqueesIcons = [
	"../../src/assets/icons/hero/upper/upper-1.png",
	"../../src/assets/icons/hero/upper/upper-2.png",
	"../../src/assets/icons/hero/upper/upper-3.png",
	"../../src/assets/icons/hero/upper/upper-4.png",
	"../../src/assets/icons/hero/upper/upper-5.png",
	"../../src/assets/icons/hero/upper/upper-6.png",
	"../../src/assets/icons/hero/upper/upper-7.png",
	"../../src/assets/icons/hero/upper/upper-8.png",
	"../../src/assets/icons/hero/upper/upper-9.png",
	"../../src/assets/icons/hero/upper/upper-10.png",
	"../../src/assets/icons/hero/upper/upper-11.png",
	"../../src/assets/icons/hero/upper/upper-12.png",
];

export const midMarqueesIcons = [
	"../../src/assets/icons/hero/mid/mid-1.png",
	"../../src/assets/icons/hero/mid/mid-2.png",
	"../../src/assets/icons/hero/mid/mid-3.png",
	"../../src/assets/icons/hero/mid/mid-4.png",
	"../../src/assets/icons/hero/mid/mid-5.png",
	"../../src/assets/icons/hero/mid/mid-6.png",
	"../../src/assets/icons/hero/mid/mid-7.png",
	"../../src/assets/icons/hero/mid/mid-8.png",
	"../../src/assets/icons/hero/mid/mid-9.png",
	"../../src/assets/icons/hero/mid/mid-10.png",
	"../../src/assets/icons/hero/mid/mid-11.png",
	"../../src/assets/icons/hero/mid/mid-12.png",
	"../../src/assets/icons/hero/mid/mid-13.png",
];

export const lowerMarqueesIcons = [
	"../../src/assets/icons/hero/lower/lower-1.png",
	"../../src/assets/icons/hero/lower/lower-2.png",
	"../../src/assets/icons/hero/lower/lower-3.png",
	"../../src/assets/icons/hero/lower/lower-4.png",
	"../../src/assets/icons/hero/lower/lower-5.png",
	"../../src/assets/icons/hero/lower/lower-6.png",
	"../../src/assets/icons/hero/lower/lower-7.png",
	"../../src/assets/icons/hero/lower/lower-8.png",
	"../../src/assets/icons/hero/lower/lower-9.png",
	"../../src/assets/icons/hero/lower/lower-10.png",
	"../../src/assets/icons/hero/lower/lower-11.png",
	"../../src/assets/icons/hero/lower/lower-12.png",
];

export const sponsorImages = [
	{
		imgUrl: "../../src/assets/images/sponsor/Booking.png",
		name: "Booking",
	},
	{
		imgUrl: "../../src/assets/images/sponsor/Disney.png",
		name: "Disney",
	},
	{
		imgUrl: "../../src/assets/images/sponsor/Google.png",
		name: "Google",
	},
	{
		imgUrl: "../../src/assets/images/sponsor/Sonos.png",
		name: "Sonos",
	},
	{
		imgUrl: "../../src/assets/images/sponsor/Vimeo.png",
		name: "Vimeo",
	},
];
