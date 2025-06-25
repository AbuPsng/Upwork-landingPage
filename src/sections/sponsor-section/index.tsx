import { sponsorImages } from "@/assets/constant";
import Paragraph from "@/components/Paragraph";
import LogoHolder from "../../components/LogoHolder";

const Sponsor = () => {
	return (
		<div className="mt-[80px] mb-[20px] pb-10 flex flex-col justify-center items-center gap-y-10">
			{/* Intro */}
			<Paragraph customClass="font-[700] text-[16px]">
				Trusted by 10,000+ brands
			</Paragraph>

			<div className="w-full flex justify-center items-center gap-x-30">
				{sponsorImages.map((image) => (
					<LogoHolder key={image.name} imgUrl={image.imgUrl} name={image.name} />
				))}
			</div>
		</div>
	);
};

export default Sponsor;
