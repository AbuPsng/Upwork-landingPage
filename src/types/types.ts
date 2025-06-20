export type HeadingPropType = {
	variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
	children: string;
	customClass?: string;
};

export type NavLinkPropType = {
	link: string;
	children: string;
};

export type InfoHolderPropTYpe = {
	heading: string;
	description: string;
	imgUrl: string;
	name: string;
	imgClass?: string;
};
