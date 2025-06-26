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
		<div className="max-w-[1021px]  rounded-3xl w-full md:h-[404px] grid grid-rows-2 gap-y-0 md:grid-cols-2 bg-infoHolder gap-x-2">
			{/* Info part */}
			<div className="flex flex-col gap-y-6 justify-center items-start text-start px-6 md:pl-12">
				<Heading
					variant="h3"
					children={heading}
					customClass="text-start text-white"
				/>
				<Paragraph children={description} />
			</div>

			{/* Picture Part */}
			<div className="relative w-full flex justify-center items-center rounded-xl overflow-hidden p-3 h-full ">
				<img
					src={imgUrl}
					alt={`${name}-image`}
					className={twMerge(
						" image-contain h-[300px] aspect-square md:h-[400px]  md:object-contain w-full md:pl-12",
						imgClass
					)}
				/>
			</div>
		</div>
	);
};

export default InfoHolder;
