const LogoHolder = ({ imgUrl, name }: { imgUrl: string; name: string }) => {
	return (
		<img
			src={`${imgUrl}`}
			alt={`${name}-logo`}
			className="h-[30px] max-w-[100px] object-contain"
		/>
	);
};

export default LogoHolder;
