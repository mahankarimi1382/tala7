import { MdPerson3       } from "react-icons/md";

const ProfileImage = ({ src, fallbackIcon: Icon = MdPerson3       }) => (
  <div className="flex items-center justify-center rounded-full overflow-hidden bg-gray-200">
    {src ? (
      <img
        src={src}
        alt="Profile"
        className="w-full h-full object-cover"
        onError={(e) => (e.target.style.display = "none")}
      />
    ) : (
      <Icon className="text-white bg-gray-400 text-[90px] " />
    )}
  </div>
);

export default ProfileImage;
