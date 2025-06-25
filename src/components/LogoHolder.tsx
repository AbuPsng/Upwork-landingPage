import { twMerge } from "tailwind-merge";

const LogoHolder = ({
	imgUrl,
	name,
	customClass,
}: {
	imgUrl: string;
	name: string;
	customClass?: string;
}) => {
	return (
		<img
			src={`${imgUrl}`}
			alt={`${name}-logo`}
			className={twMerge("h-[30px] max-w-[200px] object-contain", customClass)}
		/>
	);
};

export default LogoHolder;
