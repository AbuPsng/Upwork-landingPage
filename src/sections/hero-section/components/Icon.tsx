const Icon = ({ imgUrl }: { imgUrl: string }) => {
	return (
		<img
			src={`${imgUrl}`}
			alt=""
			className="w-[34px]  md:w-[94px] object-fit aspect-square rounded-[14px]"
		/>
	);
};

export default Icon;
