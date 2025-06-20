import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";
import type { InfoHolderPropTYpe } from "@/types/types";
import { twMerge } from "tailwind-merge";

const InfoHolder = ({
	heading,
	description,
	imgUrl,
	name,
	imgClass,
}: InfoHolderPropTYpe) => {
	return (
		<div className="max-w-[1021px] rounded-3xl w-full h-[404px] grid grid-cols-2 bg-infoHolder gap-x-2">
			{/* Info part */}
			<div className="flex flex-col gap-y-6 justify-center items-start text-start pl-12">
				<Heading
					variant="h3"
					children={heading}
					customClass="text-start text-white"
				/>
				<Paragraph children={description} />
			</div>

			{/* Picture Part */}
			<div className="relative overflow-x-hidden h-full w-full">
				<img
					src={imgUrl}
					alt={`${name}-image`}
					className={twMerge("h-[400px] object-contain w-full pl-12", imgClass)}
				/>
			</div>
		</div>
	);
};

export default InfoHolder;
