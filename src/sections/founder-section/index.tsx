import { founderDetails } from "@/constant";
import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";
import Slider from "react-slick";
import FounderDetailHolder from "./components/FounderDetailHolder";
import useWidth from "@/hooks/useWidth";

const settings = {
	infinite: true,
	centerMode: true,
	centerPadding: "7%",
	slidesToShow: 1,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 2000,
	speed: 500,
	arrows: false, // No arrows
	pauseOnHover: true,
};

const FounderSection = () => {
	const width = useWidth();

	return (
		<section className="w-full md:px-[20px] py-4 flex flex-col gap-y-10 items-center">
			{/* Intro and description part */}
			<div className="flex flex-col justify-center items-center gap-y-2 md:gap-y-10 max-w-[600px]">
				<Heading
					variant="h2"
					children="Page Flows Empowers UX Research for All"
					customClass="text-center"
				/>

				<Paragraph
					children="Discover how leading brands design, test, and implement user experiences, and apply these proven strategies to your UI/UX designs."
					customClass="text-center px-"
				/>
			</div>

			{/* Founder part */}
			<div className="hidden md:grid w-full gap-[20px]  grid-cols-3 max-w-5xl">
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

			{width <= 1100 && (
				<div className="w-full h-[400px]">
					<Slider {...settings}>
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
					</Slider>
				</div>
			)}
		</section>
	);
};

export default FounderSection;
