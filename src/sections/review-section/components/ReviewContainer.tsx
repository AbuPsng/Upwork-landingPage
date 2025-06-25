import { reviewsDetails } from "@/assets/constant";
import ReviewHolder from "./ReviewHolder";

const ReviewContainer = () => {
	return (
		<div className="w-max py-2 gap-4 relative overflow-x-hidden flex flex-row group">
			<div className="flex gap-4 w-max animate-marquee-left  group-hover:paused">
				{reviewsDetails.map((detail, index) => {
					const { upper, lower } = detail;

					return (
						<div key={index} className="gap-4 flex flex-col ">
							<ReviewHolder
								name={upper.name}
								imgUrl={upper.imgUrl}
								role={upper.role}
								review={upper.review}
							/>
							<ReviewHolder
								name={lower.name}
								imgUrl={lower.imgUrl}
								role={lower.role}
								review={lower.review}
							/>
						</div>
					);
				})}
			</div>
			<div className="flex gap-4 w-max animate-marquee-left group-hover:paused">
				{reviewsDetails.map((detail, index) => {
					const { upper, lower } = detail;

					return (
						<div key={index} className="gap-4 flex flex-col ">
							<ReviewHolder
								name={upper.name}
								imgUrl={upper.imgUrl}
								role={upper.role}
								review={upper.review}
							/>
							<ReviewHolder
								name={lower.name}
								imgUrl={lower.imgUrl}
								role={lower.role}
								review={lower.review}
							/>
						</div>
					);
				})}
			</div>
			<div className="flex gap-4 w-max animate-marquee-left group-hover:paused">
				{reviewsDetails.map((detail, index) => {
					const { upper, lower } = detail;

					return (
						<div key={index} className="gap-4 flex flex-col ">
							<ReviewHolder
								name={upper.name}
								imgUrl={upper.imgUrl}
								role={upper.role}
								review={upper.review}
							/>
							<ReviewHolder
								name={lower.name}
								imgUrl={lower.imgUrl}
								role={lower.role}
								review={lower.review}
							/>
						</div>
					);
				})}
			</div>
			<div className="flex gap-4 w-max animate-marquee-left group-hover:paused">
				{reviewsDetails.map((detail, index) => {
					const { upper, lower } = detail;

					return (
						<div key={index} className="gap-4 flex flex-col ">
							<ReviewHolder
								name={upper.name}
								imgUrl={upper.imgUrl}
								role={upper.role}
								review={upper.review}
							/>
							<ReviewHolder
								name={lower.name}
								imgUrl={lower.imgUrl}
								role={lower.role}
								review={lower.review}
							/>
						</div>
					);
				})}
			</div>
			<div className="flex gap-4 w-max animate-marquee-left group-hover:paused">
				{reviewsDetails.map((detail, index) => {
					const { upper, lower } = detail;

					return (
						<div key={index} className="gap-4 flex flex-col ">
							<ReviewHolder
								name={upper.name}
								imgUrl={upper.imgUrl}
								role={upper.role}
								review={upper.review}
							/>
							<ReviewHolder
								name={lower.name}
								imgUrl={lower.imgUrl}
								role={lower.role}
								review={lower.review}
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default ReviewContainer;
