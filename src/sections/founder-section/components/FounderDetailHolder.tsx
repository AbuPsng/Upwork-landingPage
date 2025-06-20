import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";
import type { FounderDetailPropType } from "@/types/types";

const FounderDetailHolder = ({
	name,
	imgUrl,
	description,
	role,
}: FounderDetailPropType) => {
	return (
		<div className="flex flex-col p-[20px]  rounded-xl bg-lightDark">
			{/* Image and role */}
			<div className="flex flex-col items-start gap-y-4">
				<img
					src={`${imgUrl}`}
					alt={`${name}-image`}
					className="w-[46px] aspect-square "
				/>
				<Heading variant="h4" children={role} customClass="w-4/5" />
			</div>

			{/* Role Description */}
			<div>
				<Paragraph children={description} customClass="text-[16px] text-white" />
			</div>
		</div>
	);
};

export default FounderDetailHolder;
