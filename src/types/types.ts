export type HeadingPropType = {
	variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
	children: string;
	customClass?: string;
};

export type NavLinkPropType = {
	link: string;
	children: string;
	customClass?: string;
};

export type InfoHolderPropTYpe = {
	heading: string;
	description: string;
	imgUrl: string;
	name: string;
	imgClass?: string;
};

export type FounderDetailPropType = {
	imgUrl: string;
	role: string;
	description: string;
	name: string;
};

export type ReviewHolderPropType = {
	imgUrl: string;
	name: string;
	role: string;
	review: string;
};

export type SubscriptionModelPropType = {
	plan: boolean;
	amount: string;
	heading: string;
	description: string;
	planList: Array<string>;
	conclusion: string;
};
