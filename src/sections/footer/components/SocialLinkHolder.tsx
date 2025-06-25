const SocialLinkHolder = ({
	name,
	svgSrc,
}: {
	name: string;
	svgSrc: string;
}) => {
	return (
		<div className="p-3 bg-charcoal flex justify-center items-center rounded-full h-10 aspect-square cursor-pointer text-black">
			<img src={svgSrc} alt={`${name}-icon`} className=" " />
		</div>
	);
};

export default SocialLinkHolder;
