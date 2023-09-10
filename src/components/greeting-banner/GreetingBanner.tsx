import { FaPlus } from "react-icons/fa";

import Button from "../ui/Button";
import { useContext } from "react";
import { ModalControlContext } from "../../context/ModalsControlContext";

function GreetingBanner() {
  const context = useContext(ModalControlContext);

  return (
    <section className="flex justify-between items-center mt-[30px]">
      <div>
        <h1 className="text-2xl text-gray-800 font-semibold">Good morning!</h1>
        <small className="text-gray-500">You got some task to do.</small>
      </div>

      <Button
        onClick={() => context.setIsAddOpen(true)}
        isSmall
        className="hidden sm:block"
      >
        <div className="flex items-center gap-3">
          <FaPlus size={15} />
          <p>Create New Task</p>
        </div>
      </Button>
    </section>
  );
}

export default GreetingBanner;
