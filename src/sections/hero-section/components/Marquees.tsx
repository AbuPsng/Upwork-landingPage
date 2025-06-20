import Icon from "./Icon";

const Marquees = ({
	iconsArray,
	direction,
}: {
	iconsArray: Array<string>;
	direction: "left" | "right";
}) => {
	const animateClass = `animate-marquee-${direction}`;
	return (
		<div className="flex flex-row  overflow-hidden space-x-4">
			<div className={`flex space-x-4 w-max ${animateClass}`}>
				{iconsArray.map((item, index) => {
					return <Icon imgUrl={item} key={index} />;
				})}
			</div>
			<div className={`flex space-x-4 w-max  ${animateClass}`}>
				{iconsArray.map((item, index) => {
					return <Icon imgUrl={item} key={index} />;
				})}
			</div>
			<div className={`flex space-x-4 w-max  ${animateClass}`}>
				{iconsArray.map((item, index) => {
					return <Icon imgUrl={item} key={index} />;
				})}
			</div>
			{direction === "left" && (
				<div className={`flex space-x-4 w-max  ${animateClass}`}>
					{iconsArray.map((item, index) => {
						return <Icon imgUrl={item} key={index} />;
					})}
				</div>
			)}
		</div>
	);
};

export default Marquees;
