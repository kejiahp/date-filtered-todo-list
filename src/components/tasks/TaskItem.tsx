import { useContext } from "react";
import { IoCheckboxOutline } from "react-icons/io5";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import moment from "moment";
import { TaskType } from "../../types/TodoTypes";
import { TasksContext } from "../../context/TasksContext";
import { ModalControlContext } from "../../context/ModalsControlContext";

type Props = {
  item: TaskType;
};

function TaskItem({ item }: Props) {
  const taskContext = useContext(TasksContext);
  const modalContext = useContext(ModalControlContext);

  const determineDay = (date: string) => {
    return moment(date).calendar(null, {
      lastDay: "[Yesterday]",
      sameDay: "[Today]",
      nextDay: "[Tomorrow]",
      lastWeek: "[last] dddd",
      nextWeek: "dddd",
      sameElse: "L",
    });
  };

  const markHasDone = (id: number) => {
    taskContext.setTasks((oldState) => {
      const newState = oldState.map((item) =>
        item.id === id ? { ...item, done: !item.done } : item
      );

      return newState;
    });
  };

  return (
    <div
      className={`relative ${
        taskContext.selectedTask === item.id ? "bg-gray-200" : "bg-gray-50"
      }`}
    >
      <div
        className="absolute top-7 left-3 cursor-pointer"
        onClick={() => markHasDone(item.id)}
      >
        {item.done ? (
          <IoCheckboxOutline size={20} className="text-blue-600" />
        ) : (
          <MdCheckBoxOutlineBlank size={20} className="text-gray-400" />
        )}
      </div>

      <div
        onClick={() => {
          taskContext.setSelectedTask(item.id);
          modalContext.closeAll();
          modalContext.setIsDetailsOpen(true);
        }}
        className={`flex justify-between items-center rounded-sm border-b border-gray-200 p-3 ml-8 `}
      >
        <div>
          <h2
            className={` font-semibold ${
              item.done ? "line-through text-gray-300" : "text-gray-800"
            }`}
          >
            {item.title}
          </h2>
          <p
            className={` ${
              item.done ? "line-through text-gray-300" : "text-gray-500"
            }`}
          >
            {moment(item.startTime).format("LT").toLowerCase()} -{" "}
            {moment(item.endTime).format("LT").toLowerCase()}
          </p>
        </div>

        <p className="text-gray-500">{determineDay(item.date)}</p>
      </div>
    </div>
  );
}

export default TaskItem;
