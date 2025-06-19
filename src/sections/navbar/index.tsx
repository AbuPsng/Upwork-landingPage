import AuthBtnHolder from "./component/AuthBtnHolder";
import LogoAndSearch from "./component/LogoAndSearch";
import Navigation from "./component/Navigation";

const Navbar = () => {
	return (
		<header className="w-full p-[8px] flex justify-between">
			<div className="flex justify-between  w-3/5">
				{/* Logo and search container */}
				<LogoAndSearch />

				{/* Navigation holder */}
				<Navigation />
			</div>

			{/* Sign In and Sign Up buttons holder */}
			<AuthBtnHolder />
		</header>
	);
};

export default Navbar;
