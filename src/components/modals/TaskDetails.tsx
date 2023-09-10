import { FiCalendar, FiClock } from "react-icons/fi";
import { HiMiniXMark } from "react-icons/hi2";
import Button from "../ui/Button";
import { useContext } from "react";

import { TasksContext } from "../../context/TasksContext";
import moment from "moment";
import { ModalControlContext } from "../../context/ModalsControlContext";
import { notify } from "../../hooks/useToast";

type Props = {
  hasShadow: boolean;
};

function TaskDetails({ hasShadow }: Props) {
  const taskContext = useContext(TasksContext);
  const modalContext = useContext(ModalControlContext);

  const selectedTask = taskContext.tasks.find(
    (item) => item.id === taskContext.selectedTask
  );

  const deleteTaskHandler = () => {
    taskContext.setTasks((oldTasks) => {
      const newTasks = [
        ...oldTasks.filter((item) => item.id !== taskContext.selectedTask),
      ];

      return newTasks;
    });

    notify({ types: "success", message: "todo updated" });
    modalContext.setIsDetailsOpen(false);
  };

  const editTaskHandler = () => {
    modalContext.closeAll();
    modalContext.setIsEditOpen(true);
  };

  if (!selectedTask) {
    return (
      <section
        className={`px-6 pb-6 pt-0 sm:pt-6 ${
          hasShadow ? "shadow-lg rounded-lg border border-gray-100 my-6" : ""
        }`}
      >
        <div className="mb-3 hidden sm:flex justify-end items-center ">
          <div
            className="cursor-pointer"
            onClick={() => modalContext.setIsDetailsOpen(false)}
          >
            <HiMiniXMark size={30} className="text-gray-500" />
          </div>
        </div>
        <p>Task not found</p>
      </section>
    );
  }

  return (
    <section
      className={`px-6 pb-6 pt-0 sm:pt-6 ${
        hasShadow ? "shadow-lg rounded-lg border border-gray-100 my-6" : ""
      }`}
    >
      <div className="mb-3 hidden sm:flex justify-end items-center ">
        <div
          className="cursor-pointer"
          onClick={() => modalContext.setIsDetailsOpen(false)}
        >
          <HiMiniXMark size={30} className="text-gray-500" />
        </div>
      </div>

      <div className="">
        <p className="font-bold text-gray-800 mb-4">{selectedTask.title}</p>

        <div className="flex gap-2 items-center">
          <FiCalendar size={15} className="text-blue-800 font-extrabold" />
          <p className="font-medium text-gray-800">
            {moment(selectedTask.date).format("Do MMMM, YYYY")}
          </p>
        </div>

        <div className="flex gap-2 items-center">
          <FiClock size={15} className="text-blue-800 font-extrabold" />
          <p className="font-medium text-gray-800">
            {moment(selectedTask.startTime).format("LT")} -{" "}
            {moment(selectedTask.endTime).format("LT")}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2 justify-between my-4">
        <Button
          style={{ flex: 1 }}
          onClick={deleteTaskHandler}
          isSmall
          variant="white"
        >
          <p className="font-bold text-gray-700">Delete</p>
        </Button>
        <Button
          style={{ flex: 1 }}
          onClick={editTaskHandler}
          isSmall
          variant="default"
        >
          <p className="font-bold">Edit</p>
        </Button>
      </div>
    </section>
  );
}

export default TaskDetails;
