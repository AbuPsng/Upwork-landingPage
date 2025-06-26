import WebButton from "@/components/WebButton";
import ImageContainer from "./components/ImageContainer";
import InfoContainer from "./components/InfoContainer";
import InfiniteCarousel from "@/components/InfiniteCarousel";

const PitchSection = () => {
	return (
		<section className="w-full flex flex-col pt-[80px] bg-lightDark ">
			{/* Upper body */}
			<div className="flex flex-col gap-y-6 px-4">
				{/* Image part */}
				<ImageContainer />

				{/* Heading and Description part */}
				<InfoContainer />

				{/* Buttons parts */}
				<div className="flex justify-center mt-6 gap-x-4">
					<WebButton
						variant="PRIMARY"
						children="Try It Free"
						customClass="px-8 text-md"
					/>
					<WebButton
						variant="BASIC"
						children="Explore flows"
						customClass="px-8 text-md"
					/>
				</div>
			</div>
			{/* Lower body */}
			<div className="w-full overflow-y-hidden h-[350px]">
				<InfiniteCarousel />
			</div>
		</section>
	);
};

export default PitchSection;
