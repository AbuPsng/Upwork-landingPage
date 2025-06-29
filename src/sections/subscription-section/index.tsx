import { subscriptionModelDetails } from "@/constant";
import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";
import type { SubscriptionModelPropType } from "@/types/types";
import Slider from "react-slick";
import SubscriptionModel from "./components/SubscriptionModel";
import useWidth from "@/hooks/useWidth";

const settings = {
	infinite: true,
	centerMode: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 2000,
	speed: 500,
	arrows: true,
	pauseOnHover: true,
	className: "w-full over-x-hidden flex items-center",
};

const SubscriptionSection = () => {
	const width = useWidth();

	return (
		<section className="w-full flex flex-col items-center py-12 gap-y-4 mb-[30px]">
			{/* Intro Part */}
			<div className="flex flex-col items-center gap-y-4 px-6 ">
				<Heading
					variant="h2"
					children="Choose the Plan That Fits Your Needs"
					customClass="text-[30px] leading[43px] "
				/>
				<Paragraph
					customClass="text-center max-w-[780px]"
					children="Unlock full access to the Page Flows library with our affordable subscription plans. Start with a free 5-day trial to explore top user flows, screen recordings, and detailed design annotations. See how they can elevate your website and mobile app designs."
				/>
			</div>

			{/* Subscription Part */}
			<div className="hidden lg:grid grid-cols-3 gap-[30px] items-center w-full max-w-[1186px] mt-14">
				{subscriptionModelDetails.map((model: SubscriptionModelPropType) => (
					<div
						key={model.heading}
						className="h-full w-full flex items-center justify-center"
					>
						<SubscriptionModel {...model} />
					</div>
				))}
			</div>

			{width <= 700 && (
				<div className="flex w-full mt-10 items-center justify-center">
					<Slider {...settings}>
						{subscriptionModelDetails.map((model: SubscriptionModelPropType) => (
							<div
								key={model.heading}
								className="h-full w-full flex items-center justify-center"
							>
								<SubscriptionModel {...model} />
							</div>
						))}
					</Slider>
				</div>
			)}
		</section>
	);
};

export default SubscriptionSection;
