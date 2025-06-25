import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";
import SubscriptionModel from "./components/SubscriptionModel";
import { subscriptionModelDetails } from "@/assets/constant";
import type { SubscriptionModelPropType } from "@/types/types";

const SubscriptionSection = () => {
	return (
		<section className="w-full flex flex-col items-center py-12 gap-y-4 mb-[30px]">
			{/* Intro Part */}
			<div className="flex flex-col items-center gap-y-4">
				<Heading variant="h2" children="Choose the Plan That Fits Your Needs" />
				<Paragraph
					customClass="text-center max-w-[780px]"
					children="Unlock full access to the Page Flows library with our affordable subscription plans. Start with a free 5-day trial to explore top user flows, screen recordings, and detailed design annotations. See how they can elevate your website and mobile app designs."
				/>
			</div>

			{/* Subscription Part */}
			<div className="grid grid-cols-3 gap-[30px] items-center w-full max-w-[1186px] mt-14">
				{subscriptionModelDetails.map((model: SubscriptionModelPropType) => {
					const { heading, amount, description, plan, planList, conclusion } = model;
					return (
						<SubscriptionModel
							key={heading}
							plan={plan}
							heading={heading}
							amount={amount}
							description={description}
							planList={planList}
							conclusion={conclusion}
						/>
					);
				})}
			</div>
		</section>
	);
};

export default SubscriptionSection;
