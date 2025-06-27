import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";
import useWidth from "@/hooks/useWidth";
import type { InfoHolderPropTYpe } from "@/types/types";
import { twMerge } from "tailwind-merge";

const InfoHolder = ({
	heading,
	description,
	imgUrl,
	name,
	imgClass,
}: InfoHolderPropTYpe) => {
	const width = useWidth();

	return (
		<div className="flex flex-col-reverse lg:grid grid-cols-2 max-w-[1021px] rounded-3xl bg-infoHolder py-8">
			{/* Info part */}
			<div className="flex flex-col gap-y-6 lg:flex-start justify-center items-start h-full md:items-center text-start px-6 md:pl-12">
				<Heading
					variant="h3"
					children={heading}
					customClass="text-start text-white  lg:w-full"
				/>
				<Paragraph children={description} />
			</div>

			{/* Picture Part */}
			<div className="relative w-full h-75 mx-auto max-w-[400px] aspect-square flex justify-center items-center rounded-xl overflow-hidden p-10  mb-10">
				<img
					src={
						width >= 1100
							? name === "four"
								? "../../src/assets/images/about/five.png"
								: imgUrl
							: imgUrl
					}
					alt={`${name}-image`}
					className={twMerge("image-cover mx-auto", imgClass)}
				/>
			</div>
		</div>
	);
};

export default InfoHolder;
