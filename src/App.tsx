import AboutUs from "./sections/about-us-section";
import Footer from "./sections/footer";
import FounderSection from "./sections/founder-section";
import HeroSection from "./sections/hero-section";
import Navbar from "./sections/navbar";
import PitchSection from "./sections/pitch-section";
import ReviewSection from "./sections/review-section";
import Sponsor from "./sections/sponsor-section";
import SubscriptionSection from "./sections/subscription-section";

const navbarHeight = 80;
const App = () => {
	return (
		<div className="h-screen overflow-hidden bg-[#18181B] text-[#A1A1AA] text-[16px] font-geist">
			<Navbar />

			<div
				style={{
					height: `calc(100vh - ${navbarHeight}px)`,
				}}
				className="overflow-y-auto"
			>
				<HeroSection />
				<Sponsor />
				<AboutUs />
				<FounderSection />
				<ReviewSection />
				<SubscriptionSection />
				<PitchSection />
				<Footer />
			</div>
		</div>
	);
};

export default App;
