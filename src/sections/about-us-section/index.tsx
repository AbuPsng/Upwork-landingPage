import Heading from "@/components/Heading";
import InfoHolder from "./components/InfoHolder";
import { aboutUsContent } from "@/constant";

const AboutUs = () => {
	return (
		<section className="mt-12 w-full flex flex-col justify-center items-center md:py-[60px] gap-y-0 md:gap-y-4 ">
			<Heading
				variant="h2"
				children="Why Choose Page Flows?"
				customClass="text-white "
			/>

			{/* Info container */}
			<div className="w-full flex flex-col gap-y-10 py-10 px-3 md:px-20 items-center">
				{aboutUsContent.map((content) => {
					const { heading, description, imgUrl, name, imgClass } = content;
					return (
						<InfoHolder
							key={name}
							heading={heading}
							description={description}
							imgUrl={imgUrl}
							name={name}
							imgClass={imgClass}
						/>
					);
				})}
			</div>
		</section>
	);
};

export default AboutUs;
