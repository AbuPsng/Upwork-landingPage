import { trustedImages } from "@/constant";
import Heading from "@/components/Heading";
import LogoHolder from "@/components/LogoHolder";
import ReviewContainer from "./components/ReviewContainer";

const ReviewSection = () => {
	return (
		<section className="w-full  md:py-[100px] flex flex-col gap-y-[40px] items-center">
			{/* Intro and companies part */}
			<div className="flex flex-col gap-y-10 items-center ">
				<Heading
					variant="h2"
					children="Trusted by Designers and Product Teams Worldwide"
					customClass="max-w-xl text-center text-[42px] leading-[55px] tracking-[-3px] font-bold "
				/>
				<div className="w-full flex justify-center gap-x-12">
					{trustedImages.map((image) => (
						<LogoHolder
							key={image.name}
							imgUrl={image.imgUrl}
							name={image.name}
							customClass="object-contain md:object-cover w-[90px]"
						/>
					))}
				</div>
			</div>

			{/* Reviews Part */}
			<ReviewContainer />
		</section>
	);
};

export default ReviewSection;
