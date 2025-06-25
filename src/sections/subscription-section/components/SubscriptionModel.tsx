import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";
import WebButton from "@/components/WebButton";
import { cn } from "@/lib/utils";
import type { SubscriptionModelPropType } from "@/types/types";
import { Check } from "lucide-react";

const SubscriptionModel = ({
	plan,
	amount,
	description,
	heading,
	planList,
	conclusion,
}: SubscriptionModelPropType) => {
	return (
		<div
			className={cn(
				"py-[30px] px-[15px] rounded-[12px] bg-lightDark flex flex-col gap-y-8 ",
				plan && "border-[1.5px] border-main"
			)}
		>
			{/* Upper body */}
			<div className="w-full flex flex-col justify-start">
				<div className="flex gap-x-3 items-top">
					<Heading variant="h4" children={heading} />
					{plan && (
						<div className="bg-main h-fit p-1 py-[2.5px] rounded-sm">
							<Paragraph
								children="Popular"
								customClass="text-sm font-semibold text-black/85"
							/>
						</div>
					)}
				</div>
				<div className="flex flex-col w-full gap-y-1 justify-start">
					<Heading
						variant="h2"
						children={`$${amount}`}
						customClass="text-start text-white"
					/>

					<Paragraph children={description} />
				</div>
			</div>

			{/* Button */}
			<div className="flex flex-col w-full">
				{plan ? (
					<div className="flex flex-col gap-y-4">
						<WebButton variant="PRIMARY" customClass="">
							Start your free trial
						</WebButton>
						<Paragraph
							customClass="text-md text-main text-center"
							children="Save 15% Best Value!"
						/>
					</div>
				) : (
					<WebButton variant="GHOST" customClass="">
						Start your free trial
					</WebButton>
				)}
			</div>

			{/* Main body */}
			<div className="flex flex-col gap-y-2">
				{planList.map((plan, index) => {
					return (
						<div key={index} className="flex gap-x-3 ">
							{" "}
							<Check className="h-5 text-white/90" />
							<Paragraph children={plan} customClass="text-white/90 text-sm" />
						</div>
					);
				})}
			</div>

			{/* Lower body */}
			<div>
				<Paragraph children={conclusion} customClass="text-xs" />
			</div>
		</div>
	);
};

export default SubscriptionModel;
