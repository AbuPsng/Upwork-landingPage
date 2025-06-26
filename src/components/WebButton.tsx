import { buttonBgVariant } from "@/assets/constant";
import { Button } from "./ui/button";

import { twMerge } from "tailwind-merge";

const WebButton = ({
	variant,
	customClass,
	children,
}: {
	variant: "PRIMARY" | "SECONDARY" | "GHOST" | "BASIC" | "PLAIN";
	customClass?: string;
	children: string;
}) => {
	const bgClass: string = buttonBgVariant[variant];
	return (
		<Button
			className={twMerge(
				" md:text-[16px] py-6 font-geist cursor-pointer transition-all duration-300 ease-in-out ",
				customClass,
				bgClass
			)}
		>
			{children}{" "}
		</Button>
	);
};

export default WebButton;
