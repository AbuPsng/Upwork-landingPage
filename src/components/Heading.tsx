import { headingClassProperty } from "@/assets/constant";
import type { HeadingPropType } from "@/types/types";
import { twMerge } from "tailwind-merge";

const Heading = ({ variant, children, customClass }: HeadingPropType) => {
	const headingClass = headingClassProperty[variant] + "text-white";

	if (variant === "h1") {
		return (
			<h1 className={twMerge(headingClass, customClass && customClass)}>
				{children}
			</h1>
		);
	} else if (variant === "h2") {
		return (
			<h2 className={twMerge(headingClass, customClass && customClass)}>
				{children}
			</h2>
		);
	} else if (variant === "h3") {
		return (
			<h3 className={twMerge(headingClass, customClass && customClass)}>
				{children}
			</h3>
		);
	} else if (variant === "h4") {
		return (
			<h4 className={twMerge(headingClass, customClass && customClass)}>
				{children}
			</h4>
		);
	} else if (variant === "h5") {
		return (
			<h5 className={twMerge(headingClass, customClass && customClass)}>
				{children}
			</h5>
		);
	} else if (variant === "h6") {
		return (
			<h6 className={twMerge(headingClass, customClass && customClass)}>
				{children}
			</h6>
		);
	}
};

export default Heading;
