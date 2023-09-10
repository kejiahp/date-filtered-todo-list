import { useContext } from "react";
import { ModalControlContext } from "../context/ModalsControlContext";
import TaskDetails from "../components/modals/TaskDetails";
import AddTask from "../components/modals/AddTask";
import EditTask from "../components/modals/EditTask";
import Calendar from "../components/calendar/Calendar";

function DesktopModalsProvider() {
  const modalContext = useContext(ModalControlContext);

  if (modalContext.isAddOpen) {
    return <AddTask hasShadow />;
  }
  if (modalContext.isDetailsOpen) {
    return <TaskDetails hasShadow />;
  }

  if (modalContext.isEditOpen) {
    return <EditTask hasShadow />;
  }

  return <Calendar />;
}

export default DesktopModalsProvider;
