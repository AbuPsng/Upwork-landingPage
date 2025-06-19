import { headingClassProperty } from "@/assets/constant";
import type { HeadingPropType } from "@/types/types";

const Heading = ({ variant, children }: HeadingPropType) => {
	const headingClass = headingClassProperty[variant] + "text-white";

	if (variant === "h1") {
		return <h1 className={`${headingClass}`}>{children}</h1>;
	} else if (variant === "h2") {
		return <h2 className={`${headingClass}`}>{children}</h2>;
	} else if (variant === "h3") {
		return <h3 className={`${headingClass}`}>{children}</h3>;
	} else if (variant === "h4") {
		return <h4 className={`${headingClass}`}>{children}</h4>;
	} else if (variant === "h5") {
		return <h5 className={`${headingClass}`}>{children}</h5>;
	} else if (variant === "h6") {
		return <h6 className={`${headingClass}`}>{children}</h6>;
	}
};

export default Heading;
