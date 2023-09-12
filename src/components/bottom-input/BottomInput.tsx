import { BsFillMicFill } from "react-icons/bs";
import { useContext } from "react";
import { ModalControlContext } from "../../context/ModalsControlContext";

function BottomInput() {
  const modalControlContext = useContext(ModalControlContext);

  return (
    <div className="bg-white p-4 sm:hidden fixed z-10 bottom-0 mx-auto left-0 right-0">
      <div
        className="relative"
        onClick={() => modalControlContext.setIsAddOpen(true)}
      >
        <div className="border w-full border-gray-300 rounded-lg py-2 pl-2 pr-9">
          <p className="text-gray-500 font-medium">Input task</p>
        </div>
        <BsFillMicFill
          size={18}
          className="text-blue-600 absolute top-3 right-3"
        />
      </div>
    </div>
  );
}

export default BottomInput;
