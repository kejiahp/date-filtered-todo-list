import { FiSettings } from "react-icons/fi";
import { IoNotificationsOutline } from "react-icons/io5";
import { HiBars3CenterLeft } from "react-icons/hi2";

import Avatar from "../avatar/Avatar";
import Logo from "../logo/Logo";
import BottomSheet from "../bottom-sheet/BottomSheet";
import { useState } from "react";
import BottomSheetContent from "./BottomSheetContent";

function NavBar() {
  const [isOpen, setOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center py-3">
      <Logo showIcon={true} />
      <div className="hidden sm:flex gap-7 items-center ">
        <FiSettings size={20} className="text-gray-500 cursor-pointer" />
        <IoNotificationsOutline
          size={20}
          className="text-gray-500 cursor-pointer"
        />
        <Avatar />
      </div>
      <div
        className="block sm:hidden cursor-pointer"
        onClick={() => setOpen(true)}
      >
        <HiBars3CenterLeft size={30} className="text-gray-500" />
      </div>

      <BottomSheet
        isOpen={isOpen}
        setIsOpen={setOpen}
        isScrollable={true}
        initialSnap={3}
      >
        <BottomSheetContent />
      </BottomSheet>
    </nav>
  );
}

export default NavBar;
