import logo from "../../../assets/react.svg";

const LogoAndSearch = () => {
	return (
		<div className="flex gap-x-[20px] px-2 py-[2px] max-w-[600px]">
			<div className="square-aspect w-[30px]">
				{" "}
				<img src={logo} alt="logo-image" className="w-full h-full object-contain" />
			</div>
			<input
				type="text"
				placeholder="🔍  Search"
				className="bg-lightDark py-[9px] px-5 outline-[0.5px] w-[270px]  rounded-lg"
			/>
		</div>
	);
};

export default LogoAndSearch;
