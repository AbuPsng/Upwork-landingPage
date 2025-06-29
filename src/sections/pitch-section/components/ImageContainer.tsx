import { founderImageUrls } from "@/constant";

const ImageContainer = () => {
	return (
		<div className="flex gap-x-3 justify-center  items-center">
			{founderImageUrls.map((imageUrl) => (
				<img
					key={imageUrl}
					src={imageUrl}
					className="w-[35px] aspect-square object-contain"
				/>
			))}
		</div>
	);
};

export default ImageContainer;
