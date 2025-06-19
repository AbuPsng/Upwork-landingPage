import WebButton from "@/components/WebButton";

const AuthBtnHolder = () => {
	return (
		<div className="pr-4">
			{/* Login Button */}
			<WebButton variant="BASIC" customClass="text-white">
				Login
			</WebButton>

			{/* SignUp Button */}
			<WebButton
				variant="PRIMARY"
				customClass="text-black bg-main text-sm px-3 py-6 font-[500] tracking-[0.5]"
			>
				Try It Free
			</WebButton>
		</div>
	);
};

export default AuthBtnHolder;
