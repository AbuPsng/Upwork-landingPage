import HeroSection from "./sections/hero-section";
import Navbar from "./sections/navbar";

const App = () => {
	return (
		<div className="bg-[#18181B] relative min-h-screen text-[#A1A1AA] text-[16px] font-geist">
			<Navbar />
			<HeroSection />
		</div>
	);
};

export default App;
