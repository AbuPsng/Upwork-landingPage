import { twMerge } from "tailwind-merge";

const Paragraph = ({
	children,
	customClass,
}: {
	children: string;
	customClass?: string;
}) => {
	return (
		<p className={twMerge("font-base font-normal leading-[26px]", customClass)}>
			{children}
		</p>
	);
};

export default Paragraph;
