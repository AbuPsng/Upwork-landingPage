import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";
import WebButton from "@/components/WebButton";
import ProfileImageHolder from "./components/ProfileImageHolder";

const HeroSection = () => {
	return (
		<section className="min-h-screen w-full flex flex-col pt-[7rem]  items-center">
			{/* Intro part */}
			<div className="flex flex-col gap-y-10 justify-center items-center mx-auto h-1/2 w-full max-w-[700px]">
				<div className="w-full flex justify-center gap-x-2 items-center">
					{/* Images */}
					<div className="flex justify-center ">
						<ProfileImageHolder imgUrl="../../src/assets/profilePictures/small/profile-1.png" />
						<ProfileImageHolder imgUrl="../../src/assets/profilePictures/small/profile-2.png" />
						<ProfileImageHolder imgUrl="../../src/assets/profilePictures/small/profile-3.png" />
					</div>
					<Paragraph children="Supporting over 100,000+ designers worldwide" />
				</div>
				<Heading
					variant="h1"
					children="Unlock UI/UX Inspiration with the Best User Flow Examples"
				/>
				<Paragraph children="Explore real-world user flows and design patterns from leading apps and websites. " />

				{/* Buttons */}
				<div className="flex gap-4">
					<WebButton variant="PRIMARY" customClass="px-10">
						Try it free
					</WebButton>
					<WebButton variant="SECONDARY" customClass="px-6">
						Explore flows
					</WebButton>
				</div>
			</div>

			{/* Marquee Part */}
			<div className="flex flex-col justify-center items-center"></div>
		</section>
	);
};

export default HeroSection;
