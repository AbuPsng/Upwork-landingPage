const ProfileImageHolder = ({ imgUrl }: { imgUrl: string }) => {
	return (
		<img
			src={`${imgUrl}`}
			alt="profile-image"
			className="h-6  md:h-7 aspect-square ml-[-8px] md:ml-[-13px] border-2 rounded-3xl border-[#18181B]"
		/>
	);
};

export default ProfileImageHolder;
