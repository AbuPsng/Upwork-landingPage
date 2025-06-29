import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import { pitchImages } from "@/constant";
import { useEffect, useState } from "react";
import useWidth from "@/hooks/useWidth";

const InfiniteCarousel = () => {
	const width = useWidth();

	const [settings, setSettings] = useState({
		infinite: true,
		centerMode: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		speed: 500,
		arrows: true,
		pauseOnHover: true,
		className: "w-full over-x-hidden flex items-center",
	});

	useEffect(() => {
		if (width >= 500) {
			setSettings((cur) => ({ ...cur, slidesToShow: 4 }));
		} else {
			setSettings((cur) => ({ ...cur, slidesToShow: 1 }));
		}
	}, [width]);
	return (
		<Slider {...settings} className="mt-18 ">
			{pitchImages.map((img, i) => (
				<div key={i}>
					<img
						src={img}
						alt={`slide-${i}`}
						className=" object-cover w-full  rounded-[35px] px-[8px] "
					/>
				</div>
			))}
		</Slider>
	);
};

export default InfiniteCarousel;
