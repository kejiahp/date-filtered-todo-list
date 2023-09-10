import { FiSettings } from "react-icons/fi";
import { IoNotificationsOutline } from "react-icons/io5";

import Avatar from "../avatar/Avatar";

function BottomSheetContent() {
  return (
    <div className="px-5 flex flex-col gap-4">
      <div className="flex items-center gap-4 cursor-pointer">
        <FiSettings size={20} className="text-gray-500" />
        <p className="font-semibold">Settings</p>
      </div>

      <hr />

      <div className="flex items-center gap-4 cursor-pointer">
        <IoNotificationsOutline size={20} className="text-gray-500" />
        <p className="font-semibold">Settings</p>
      </div>

      <hr />

      <div className="flex items-center gap-4 cursor-pointer">
        <Avatar />
        <p className="font-semibold">Profile</p>
      </div>
    </div>
  );
}

export default BottomSheetContent;
