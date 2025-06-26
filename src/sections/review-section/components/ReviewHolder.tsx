import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";
import type { ReviewHolderPropType } from "@/types/types";
import { IoMdQuote } from "react-icons/io";

const ReviewHolder = ({ name, review, role, imgUrl }: ReviewHolderPropType) => {
	return (
		<div className="bg-infoHolder border-[#3F3F46] border-[1px] p-6 max-w-[360px] rounded-lg mt-3 mr-3">
			{/* Image and name Part */}
			<div className="flex gap-x-4">
				{/* image */}

				<img
					src={imgUrl}
					alt="placeholder-image"
					className="w-[48px] h-[48px] rounded-[10px]"
				/>

				{/* name and role */}
				<div className="flex flex-col">
					<Heading variant="h5" children={name} />
					<Paragraph children={role} customClass="text-[#A1A1AA] text-[14px]" />
				</div>
			</div>

			{/* Quote */}
			<div className="mt-14">
				<IoMdQuote className="rotate-[180deg] text-main text-2xl" />
			</div>

			{/* Review */}
			<Paragraph
				children={review}
				customClass="mt-6 font-bold text-white leading-[24px] "
			/>
		</div>
	);
};

export default ReviewHolder;
