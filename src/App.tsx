import AboutUs from "./sections/about-us-section";
import FounderSection from "./sections/founder-section";
import HeroSection from "./sections/hero-section";
import Navbar from "./sections/navbar";
import PitchSection from "./sections/pitch-section";
import ReviewSection from "./sections/review-section";
import Sponsor from "./sections/sponsor-section";
import SubscriptionSection from "./sections/subscription-section";

const App = () => {
	return (
		<div className="bg-[#18181B] relative min-h-screen text-[#A1A1AA] text-[16px] font-geist">
			<Navbar />
			<HeroSection />
			<Sponsor />
			<AboutUs />
			<FounderSection />
			<ReviewSection />
			<SubscriptionSection />
			<PitchSection />
		</div>
	);
};

export default App;
