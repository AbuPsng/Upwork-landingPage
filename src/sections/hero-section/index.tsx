import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";
import WebButton from "@/components/WebButton";
import ProfileImageHolder from "./components/ProfileImageHolder";

import {
	lowerMarqueesIcons,
	midMarqueesIcons,
	upperMarqueesIcons,
} from "@/constant";

import MarqueeLeft from "./components/MarqueeLeft";
import MarqueeRight from "./components/MarqueeRight";

const HeroSection = () => {
	return (
		<section className=" md:min-h-screen w-full flex flex-col pt-4 md:pt-[3rem] gap-y-15 md:gap-y-22 items-center overflow-hidden">
			{/* Intro part */}
			<div className="flex flex-col gap-y-8 justify-center items-center mx-auto h-1/2 w-full max-w-[700px]">
				<div className="w-full flex flex-col md:flex-row justify-center gap-2 items-center">
					{/* Images */}
					<div className="flex justify-center ">
						<ProfileImageHolder imgUrl="/assets/profilePictures/small/profile-1.png" />
						<ProfileImageHolder imgUrl="/assets/profilePictures/small/profile-2.png" />
						<ProfileImageHolder imgUrl="/assets/profilePictures/small/profile-3.png" />
					</div>
					<Paragraph children="Supporting over 100,000+ designers worldwide" />
				</div>
				<Heading
					variant="h1"
					children="Unlock UI/UX Inspiration with the Best User Flow Examples"
					customClass=" md:w-full md:max-w-full md:text-[40px] lg:text-[56px] leading-[66px]"
				/>
				<Paragraph
					customClass="text-center max-w-[350px] md:max-w-full"
					children="Explore real-world user flows and design patterns from leading apps and websites. "
				/>

				{/* Buttons */}
				<div className="flex gap-4">
					<WebButton variant="PRIMARY" customClass="px-10 px-10 text-md">
						Try it free
					</WebButton>
					<WebButton variant="SECONDARY" customClass="px-6 text-md">
						Explore flows
					</WebButton>
				</div>
			</div>

			{/* Marquee Part */}
			<div className="flex flex-col overflow-hidden">
				<MarqueeLeft iconsArray={upperMarqueesIcons} />
				<MarqueeRight iconsArray={midMarqueesIcons} />
				<MarqueeLeft iconsArray={lowerMarqueesIcons} />
			</div>
		</section>
	);
};

export default HeroSection;
