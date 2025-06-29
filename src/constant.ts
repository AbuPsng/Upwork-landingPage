import type { NavLinkPropType } from "@/types/types";

export const headingClassProperty = {
	h1: "text-[36px] leading-[45px]  lg:text-[57px]  text-white  md:leading-[66px] lg:leading-[66px] tracking-[-3px] font-bold text-center  w-full",
	h2: " text-[30px] font-semibold leading-[43px] tracking-[-2px] md:text-[44px] text-white  md:leading-[55px] md:tracking-[-3px] md:font-bold text-center",
	h3: "text-[30px] font-semibold leading-[40px] tracking-[-1px] md:text-3xl  text-white leading-[40px] tracking-[-1px] font-semibold text-start",
	h4: "text-xl text-white  leading-[28px] tracking-[-1px] font-semibold text-start mb-[16px]",
	h5: "text-base text-white  leading-[24px] tracking-[-0.5px] font-bold text-start",
	h6: "text-lg text-white  leading-[28px] tracking-[-0.5px] capitalize font-semibold text-start",
};

export const buttonBgVariant = {
	PRIMARY: "  bg-main/90 hover:bg-main text-black hover:text-lightBlack",
	SECONDARY: "  bg-charcoal hover:bg-gray-500/20 text-white/70 hover:text-white",
	GHOST: "  bg-white/80 hover:bg-white text-charcoal hover:text-black",
	BASIC: "  bg-charcoal hover:bg-gray-400/20  text-white/70 hover:text-white",
	PLAIN: "px-0 py-0",
};

export const navLinks: Array<NavLinkPropType> = [
	{ link: "/ios", children: "IOS" },
	{ link: "/android", children: "Android" },
	{ link: "/web", children: "Web" },
	{ link: "/emails", children: "Emails" },
];

export const upperMarqueesIcons = [
	"assets/icons/hero/upper/upper-1.png",
	"assets/icons/hero/upper/upper-2.png",
	"assets/icons/hero/upper/upper-3.png",
	"assets/icons/hero/upper/upper-4.png",
	"assets/icons/hero/upper/upper-5.png",
	"assets/icons/hero/upper/upper-6.png",
	"assets/icons/hero/upper/upper-7.png",
	"assets/icons/hero/upper/upper-8.png",
	"assets/icons/hero/upper/upper-9.png",
	"assets/icons/hero/upper/upper-10.png",
	"assets/icons/hero/upper/upper-11.png",
	"assets/icons/hero/upper/upper-12.png",
];

export const midMarqueesIcons = [
	"assets/icons/hero/mid/mid-1.png",
	"assets/icons/hero/mid/mid-2.png",
	"assets/icons/hero/mid/mid-3.png",
	"assets/icons/hero/mid/mid-4.png",
	"assets/icons/hero/mid/mid-5.png",
	"assets/icons/hero/mid/mid-6.png",
	"assets/icons/hero/mid/mid-7.png",
	"assets/icons/hero/mid/mid-8.png",
	"assets/icons/hero/mid/mid-9.png",
	"assets/icons/hero/mid/mid-10.png",
	"assets/icons/hero/mid/mid-11.png",
	"assets/icons/hero/mid/mid-12.png",
	"assets/icons/hero/mid/mid-13.png",
];

export const lowerMarqueesIcons = [
	"assets/icons/hero/lower/lower-1.png",
	"assets/icons/hero/lower/lower-2.png",
	"assets/icons/hero/lower/lower-3.png",
	"assets/icons/hero/lower/lower-4.png",
	"assets/icons/hero/lower/lower-5.png",
	"assets/icons/hero/lower/lower-6.png",
	"assets/icons/hero/lower/lower-7.png",
	"assets/icons/hero/lower/lower-8.png",
	"assets/icons/hero/lower/lower-9.png",
	"assets/icons/hero/lower/lower-10.png",
	"assets/icons/hero/lower/lower-11.png",
	"assets/icons/hero/lower/lower-12.png",
];

export const sponsorImages = [
	{
		imgUrl: "assets/images/sponsor/Booking.png",
		name: "Booking",
	},
	{
		imgUrl: "assets/images/sponsor/Disney.png",
		name: "Disney",
	},
	{
		imgUrl: "assets/images/sponsor/Google.png",
		name: "Google",
	},
	{
		imgUrl: "assets/images/sponsor/Sonos.png",
		name: "Sonos",
	},
	{
		imgUrl: "assets/images/sponsor/Vimeo.png",
		name: "Vimeo",
	},
];

export const aboutUsContent = [
	{
		heading: "Real-World User Flow Examples",
		description:
			"Gain insights into the user experiences of popular apps and websites. Browse through user onboarding processes, login pages, checkouts, search flows, and more to enhance your own designs.",
		imgUrl: "assets/images/about/one.png",
		name: "one",
		imgClass: "",
	},
	{
		heading: "Screen Recordings & Annotations",
		description:
			"Watch detailed screen recordings with step-by-step annotations highlighting key UI/UX design elements & interactions. Understand exactly how top companies guide users through their digital experiences.",
		imgUrl: "assets/images/about/two.png",
		name: "lower",
		imgClass: "",
	},
	{
		heading: "Filter and Search with Ease",
		description:
			"Quickly find the screen flows you need with powerful filtering options for categories, industries, and UX patterns. Save time by accessing precisely what you’re looking for with just a few clicks.",
		imgUrl: "assets/images/about/three.png",
		name: "three",
		imgClass: "w-[352px] h-[400px] ",
	},
	{
		heading: "Learn from the Best",
		description:
			"Access a curated library of UX flows from top companies like Airbnb, Dropbox, and Slack. Discover how market leaders design intuitive, user-friendly experiences and apply these insights to your projects.",
		imgUrl: "assets/images/about/four.png",
		name: "four",
		imgClass: " object-cover absolute right-0",
	},
];

export const founderDetails = [
	{
		name: "founder-one",
		imgUrl: "assets/images/founder/founder-one.png",
		role: "UX & UI Inspiration for Designers",
		description:
			"Page Flows showcases visual examples & case studies from industry leaders, helping create intuitive, engaging, & high-converting user interfaces & experiences.",
	},
	{
		name: "founder-lower",
		imgUrl: "assets/images/founder/founder-two.png",
		role: "Refine the User Journey for Product Managers",
		description:
			"Leverage Page Flows to uncover best practices for optimizing product onboarding, enhancing conversion funnels, & improving customer retention.",
	},
	{
		name: "founder-three",
		imgUrl: "assets/images/founder/founder-three.png",
		role: "Perfect App Flows for Developers",
		description:
			"Page Flows equips developers with actionable insights & step-by-step examples to fine-tune UX design elements & ensure seamless app performance.",
	},
];

export const trustedImages = [
	{
		imgUrl: "assets/images/review/companies/google.png",
		name: "google",
	},
	{
		imgUrl: "assets/images/review/companies/product-hunt.png",
		name: "product-hunt",
	},
	{
		imgUrl: "assets/images/review/companies/trust-pilot.png",
		name: "trust-pilot",
	},
];

export const reviewsDetails = [
	{
		upper: {
			name: "Jane P.",
			role: "Designer",
			review:
				"Can’t say it enough: love love love Page Flows for real-life design inspiration. Massive timesaver.",
			imgUrl: "assets/images/review/placeholder/placeholder.png",
		},
		lower: {
			name: "Shankar S.",
			role: "UX/UI Designer",
			review:
				"I find pageflows.com to be a really helpful resource for finding interaction design inspiration. They capture user flows from a wide range of web and mobile applications and patterns. ",
			imgUrl: "assets/images/review/placeholder/placeholder.png",
		},
	},
	{
		upper: {
			name: "Matt N",
			role: "UX/UI Designer",
			review:
				"Today I found that someone has recorded themself over 2,000 times going through different user flows on various apps and made them all available for $99 a year.",
			imgUrl: "assets/images/review/placeholder/placeholder.png",
		},
		lower: {
			name: "Aazar S.",
			role: "UX/UI Designer",
			review: "This is one-- product done well.",
			imgUrl: "assets/images/review/placeholder/placeholder.png",
		},
	},
	{
		upper: {
			name: "Jessica K.",
			role: "Lead UX Designer",
			review:
				"Page Flows has been a game changer for our design team. The ability to see how top companies craft their experiences is invaluable.",
			imgUrl: "assets/images/review/placeholder/placeholder.png",
		},
		lower: {
			name: "Adam S.",
			role: "Head of Product",
			review:
				"Using Page Flows has drastically improved my workflow. Not only does it help me solve UX problems, it's also super helpful to get validated by seeing what others are doing. I highly recommend",
			imgUrl: "assets/images/review/placeholder/placeholder.png",
		},
	},
	{
		upper: {
			name: "Karo W.",
			role: "Designer",
			review: "Awesome tool!!! Love it.",
			imgUrl: "assets/images/review/placeholder/placeholder.png",
		},
		lower: {
			name: "Michael R.",
			role: "Product Manager",
			review:
				"A must-have tool for anyonw serious about improving their product.'s user experience..",
			imgUrl: "assets/images/review/placeholder/placeholder.png",
		},
	},
	{
		upper: {
			name: "Chris S.",
			role: "Founder",
			review:
				"Page Flows is an absolutely essential tool for product designers and founders!",
			imgUrl: "assets/images/review/placeholder/placeholder.png",
		},
		lower: {
			name: "Jack O.",
			role: "Designer",
			review:
				"Just found Page Flows, they literally have vids of proven and successful website user flows.",
			imgUrl: "assets/images/review/placeholder/placeholder.png",
		},
	},
];

export const subscriptionModelDetails = [
	{
		plan: false,
		amount: "13",
		heading: "Quarterly",
		description: "per user per month",
		planList: [
			"5-day free trial included with every sign-up!",
			"Unlimited access to all user flow recordings",
			"Unlimited access to emails",
			"Unlimited access to screens and UI elements",
			"Enhanced search + filtering",
			"Batch download screens",
			"Unlimited bookmarks",
		],
		conclusion:
			"Billed at $39 (USD) per quarter after your 5-day free trial ends. Cancel anytime during the trial.",
	},
	{
		plan: true,
		amount: "8.25",
		heading: "Yearly",
		description: "per user per month",
		planList: [
			"5-day free trial included with every sign-up!",
			"Unlimited access to all user flow recordings",
			"Unlimited access to emails",
			"Unlimited access to screens and UI elements",
			"Enhanced search + filtering",
			"Batch download screens",
			"Unlimited bookmarks",
		],
		conclusion:
			"Billed at $39 (USD) per quarter after your 5-day free trial ends. Cancel anytime during the trial.",
	},
	{
		plan: false,
		amount: "188",
		heading: "Team",
		description: "3 user user per month",
		planList: [
			"Unlimited access to all user flow recordings",
			"Unlimited access to emails",
			"Unlimited access to screens and UI elements",
			"Enhanced search + filtering",
			"Batch download screens",
			"Unlimited bookmarks",
		],
		conclusion:
			"Billed at $39 (USD) per quarter after your 5-day free trial ends. Cancel anytime during the trial.",
	},
];

export const founderImageUrls = [
	"assets/images/founder/founder-one.png",
	"assets/images/founder/founder-two.png",
	"assets/images/founder/founder-three.png",
];

export const pitchImages = [
	"assets/images/pitch/1.png",
	"assets/images/pitch/2.png",
	"assets/images/pitch/3.png",
	"assets/images/pitch/4.png",
	"assets/images/pitch/5.png",
	"assets/images/pitch/6.png",
	"assets/images/pitch/7.png",
];

export const footerWebLinks = [
	"Home",
	"Blog",
	"Submit a request",
	"Contact Us",
];

export const footerSocialLinks = [
	{ name: "twitter", srcUrl: "assets/svgs/twitter.svg" },
	{ name: "linkedin", srcUrl: "assets/svgs/linkedin.svg" },
	{ name: "pintrest", srcUrl: "assets/svgs/pintrest.svg" },
	{ name: "instagram", srcUrl: "assets/svgs/instagram.svg" },
	{ name: "tiktok", srcUrl: "assets/svgs/tiktok.svg" },
	{ name: "facebook", srcUrl: "assets/svgs/facebook.svg" },
	{ name: "youtube", srcUrl: "assets/svgs/youtube.svg" },
];
