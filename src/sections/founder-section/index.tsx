import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";
import FounderDetailHolder from "./components/FounderDetailHolder";
import { founderDetails } from "@/assets/constant";

const FounderSection = () => {
	return (
		<section className="w-full px-[20px] py-4 flex flex-col gap-y-10 items-center">
			{/* Intro and description part */}
			<div className="flex flex-col justify-center items-center gap-y-10 max-w-[600px]">
				<Heading
					variant="h2"
					children="Page Flows Empowers UX Research for All"
					customClass="text-center"
				/>

				<Paragraph
					children="Discover how leading brands design, test, and implement user experiences, and apply these proven strategies to your UI/UX designs."
					customClass="text-center"
				/>
			</div>

			{/* Founder part */}
			<div className="w-full gap-[20px] grid grid-cols-3 max-w-5xl">
				{founderDetails.map((detail) => {
					const { name, imgUrl, description, role } = detail;
					return (
						<FounderDetailHolder
							key={name}
							name={name}
							imgUrl={imgUrl}
							description={description}
							role={role}
						/>
					);
				})}
			</div>
		</section>
	);
};

export default FounderSection;
