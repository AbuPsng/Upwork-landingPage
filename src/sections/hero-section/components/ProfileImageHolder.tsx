const ProfileImageHolder = ({ imgUrl }: { imgUrl: string }) => {
	return (
		<img
			src={`${imgUrl}`}
			alt="profile-image"
			className="h-7 w-7 ml-[-13px] border-2 rounded-3xl border-[#18181B]"
		/>
	);
};

export default ProfileImageHolder;
