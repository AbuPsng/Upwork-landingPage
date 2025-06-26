import { cn } from "@/lib/utils";

const SocialLinkHolder = ({
	name,
	svgSrc,
	customClass,
}: {
	name: string;
	svgSrc: string;
	customClass?: string;
}) => {
	return (
		<div
			className={cn(
				"md:p-3 bg-charcoal flex justify-center items-center rounded-full  aspect-square cursor-pointer text-black",
				customClass
			)}
		>
			<img src={svgSrc} alt={`${name}-icon`} className=" " />
		</div>
	);
};

export default SocialLinkHolder;
