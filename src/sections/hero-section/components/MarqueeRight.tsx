import Icon from "./Icon";

const MarqueeRight = ({ iconsArray }: { iconsArray: Array<string> }) => {
	return (
		<div className="flex flex-row  overflow-hidden space-x-4 group">
			<div className="flex space-x-4 w-max animate-marquee-right group-hover:paused">
				{iconsArray.map((item, index) => {
					return <Icon imgUrl={item} key={index} />;
				})}
			</div>
			<div className="flex space-x-4 w-max  animate-marquee-right group-hover:paused">
				{iconsArray.map((item, index) => {
					return <Icon imgUrl={item} key={index} />;
				})}
			</div>
			<div className="flex space-x-4 w-max  animate-marquee-right group-hover:paused">
				{iconsArray.map((item, index) => {
					return <Icon imgUrl={item} key={index} />;
				})}
			</div>
			<div className="flex space-x-4 w-max  animate-marquee-right group-hover:paused">
				{iconsArray.map((item, index) => {
					return <Icon imgUrl={item} key={index} />;
				})}
			</div>
		</div>
	);
};

export default MarqueeRight;
