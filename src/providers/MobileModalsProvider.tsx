import { useContext } from "react";

import BottomSheet from "../components/bottom-sheet/BottomSheet";
import AddTask from "../components/modals/AddTask";
import TaskDetails from "../components/modals/TaskDetails";
import EditTask from "../components/modals/EditTask";
import { ModalControlContext } from "../context/ModalsControlContext";
import { useScreenSize } from "../hooks/useScreenSize";

function MobileModalsProvider() {
  const modalControlContext = useContext(ModalControlContext);

  /**
   * to ensure the sheet doesn't open and its styling don't load when not in mobile view
   */
  const rootDocWidth = useScreenSize();

  return (
    <>
      <BottomSheet
        isOpen={rootDocWidth < 641 && modalControlContext.isAddOpen}
        setIsOpen={modalControlContext.setIsAddOpen}
        isScrollable={true}
        initialSnap={1}
        header="Add Task"
      >
        <AddTask hasShadow={false} />
      </BottomSheet>

      <BottomSheet
        isOpen={rootDocWidth < 641 && modalControlContext.isDetailsOpen}
        setIsOpen={modalControlContext.setIsDetailsOpen}
        isScrollable={true}
        initialSnap={1}
      >
        <TaskDetails hasShadow={false} />
      </BottomSheet>

      <BottomSheet
        isOpen={rootDocWidth < 641 && modalControlContext.isEditOpen}
        setIsOpen={modalControlContext.setIsEditOpen}
        isScrollable={true}
        initialSnap={0}
        header="Edit Task"
      >
        <EditTask hasShadow={false} />
      </BottomSheet>
    </>
  );
}

export default MobileModalsProvider;
