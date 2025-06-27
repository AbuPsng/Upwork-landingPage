import { reviewsDetails } from "@/assets/constant";
import ReviewHolder from "./ReviewHolder";
import Slider from "react-slick";
import type { ReviewHolderPropType } from "@/types/types";
import { useEffect, useState } from "react";

const ReviewContainer = () => {
	const [width, setWidth] = useState(window.innerWidth);

	const [settings, setSettings] = useState({
		infinite: true,
		centerMode: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		speed: 500,
		arrows: true,
		pauseOnHover: true,
		className: "w-full over-x-hidden flex",
	});

	useEffect(() => {
		const handleResize = () => {
			setWidth(window.innerWidth);
		};
		window.addEventListener("resize", handleResize);

		return () => window.removeEventListener("resize", handleResize);
	}, []);

	useEffect(() => {
		if (width >= 1100) {
			setSettings((cur) => ({ ...cur, slideToShow: 4 }));
		} else {
			setSettings((cur) => ({ ...cur, slidesToShow: 1 }));
		}
	}, [width]);

	return (
		<div className="w-full overflow-x-hidden">
			<Slider {...settings}>
				{reviewsDetails.map(
					(
						rev: { upper: ReviewHolderPropType; lower: ReviewHolderPropType },
						index
					) => (
						<div key={index} className=" hidden h-fit md:flex flex-col gap-y-10">
							<ReviewHolder
								name={rev.upper.name}
								role={rev.upper.role}
								imgUrl={rev.upper.imgUrl}
								review={rev.upper.review}
							/>
							<ReviewHolder
								name={rev.lower.name}
								role={rev.lower.role}
								imgUrl={rev.lower.imgUrl}
								review={rev.lower.review}
							/>
						</div>
					)
				)}
			</Slider>
		</div>
	);
};

export default ReviewContainer;
