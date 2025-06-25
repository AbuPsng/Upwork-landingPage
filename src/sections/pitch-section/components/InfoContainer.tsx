import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";

const InfoContainer = () => {
	return (
		<div className="flex flex-col justify-center items-center gap-y-7 w-full max-w-3xl mx-auto">
			<Heading variant="h2" children="Stay Ahead in UX Design" />
			<Paragraph
				children="Join thousands of top designers and product managers who trust Page Flows to craft exceptional user experiences. Subscribe today and unlock exclusive insights, user flow examples, and the latest UX design trends to elevate your skills and projects."
				customClass="text-center"
			/>
		</div>
	);
};

export default InfoContainer;
