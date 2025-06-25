import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import { pitchImages } from "@/assets/constant";

const settings = {
	infinite: true,
	centerMode: true,
	slidesToShow: 5,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 2000,
	speed: 500,
	arrows: true,
	pauseOnHover: true,
};

const InfiniteCarousel = () => {
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
