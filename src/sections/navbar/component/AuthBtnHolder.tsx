import WebButton from "@/components/WebButton";
import { cn } from "@/lib/utils";

const AuthBtnHolder = ({
	authClass,
	btnClass,
}: {
	authClass?: string;
	btnClass?: string;
}) => {
	return (
		<div className={cn("pr-4", authClass)}>
			{/* Login Button */}
			<WebButton variant="PLAIN" customClass={cn("text-white", btnClass)}>
				Login
			</WebButton>

			{/* SignUp Button */}
			<WebButton
				variant="PRIMARY"
				customClass={cn(
					"text-black bg-main text-sm px-3 py-6 font-[500] tracking-[0.5]",
					btnClass
				)}
			>
				Try It Free
			</WebButton>
		</div>
	);
};

export default AuthBtnHolder;
