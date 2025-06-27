import AuthBtnHolder from "./component/AuthBtnHolder";
import LogoAndSearch from "./component/LogoAndSearch";
import Navigation from "./component/Navigation";

const Navbar = () => {
	return (
		<header className="w-full py-5 px-3 md:py-4 md:px-10 bg-[#18181B] z-20 left-0 top-0 gap-2 flex flex-col lg:flex-row items-center lg:justify-between">
			<div className="flex justify-between gap-x-2 w-full  lg:w-4/5">
				{/* Logo and search container */}
				<LogoAndSearch />

				{/* Navigation holder */}
				<Navigation customClass="hidden lg:flex md:text-md" />

				{/*For sm and md */}
				<AuthBtnHolder
					authClass="flex py-[6px] gap-x-2"
					btnClass="lg:hidden flex flex-col py-5 text-xs md:text-sm font-semibold"
				/>
			</div>

			{/* Sign In and Sign Up buttons holder */}
			<AuthBtnHolder
				authClass="hidden lg:flex gap-x-3 items-center"
				btnClass="hidden lg:flex"
			/>

			<Navigation customClass="lg:hidden flex w-2/5 md:w-fit text-xs md:text-[16px] px-1 " />
		</header>
	);
};

export default Navbar;
