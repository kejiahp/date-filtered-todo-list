import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import { FiCalendar, FiClock } from "react-icons/fi";
import { IoIosNotifications } from "react-icons/io";
import { HiMiniXMark } from "react-icons/hi2";

import "react-datepicker/dist/react-datepicker.css";

import { DateTimeSelectorButton } from "./helper-components";
import Button from "../ui/Button";
import { ModalControlContext } from "../../context/ModalsControlContext";
import { notify } from "../../hooks/useToast";
import { TasksContext } from "../../context/TasksContext";

type Props = {
  hasShadow: boolean;
};

function AddTask({ hasShadow }: Props) {
  const [taskDetails, setTaskDetails] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());

  const modalContext = useContext(ModalControlContext);
  const taskContext = useContext(TasksContext);

  const onSaveHandler = () => {
    if (!taskDetails) {
      notify({ types: "error", message: "todo details are required" });
      return;
    }

    taskContext.setTasks((oldState) => {
      const newState = [...oldState];

      newState.push({
        id: oldState.length + 1,
        title: taskDetails,
        date: startDate.toISOString(),
        startTime: startTime.toISOString(),
        endTime: endTime.toISOString(),
        done: false,
      });

      return newState;
    });

    modalContext.closeAll();
    notify({ types: "success", message: "todo updated" });
  };

  return (
    <section
      className={`px-6 pb-6 pt-0 sm:pt-6 ${
        hasShadow ? "shadow-lg rounded-lg border border-gray-100 my-6" : ""
      }`}
    >
      <div className="mb-3 hidden sm:flex justify-between items-center ">
        <p className="font-bold text-gray-800">Add Task</p>

        <div
          className="cursor-pointer"
          onClick={() => modalContext.setIsAddOpen(false)}
        >
          <HiMiniXMark size={30} className="text-gray-500" />
        </div>
      </div>

      <textarea
        value={taskDetails}
        onChange={(e) => setTaskDetails(e.target.value)}
        className="border outline-none border-gray-300 rounded-lg w-full h-[140px] bg-gray-100 p-2"
      />

      <div className="flex flex-wrap gap-2 items-center justify-between">
        <DatePicker
          dateFormat="yyyy/MM/dd"
          selected={startDate}
          onChange={(date) => setStartDate(date!)}
          customInput={<DateTimeSelectorButton icon={FiCalendar} />}
        />

        <div className="flex flex-wrap items-center gap-2">
          <DatePicker
            selected={startTime}
            onChange={(date) => setStartTime(date!)}
            customInput={<DateTimeSelectorButton icon={FiClock} />}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={1}
            timeCaption="Time"
            dateFormat="h:mm aa"
          />

          <DatePicker
            selected={endTime}
            onChange={(date) => setEndTime(date!)}
            customInput={<DateTimeSelectorButton icon={FiClock} />}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={1}
            timeCaption="Time"
            dateFormat="h:mm aa"
          />
        </div>
      </div>

      <div className="flex items-center justify-between my-4">
        <div className="flex items-center">
          <IoIosNotifications size={20} className="text-gray-500 mr-1" />
          <p className="text-gray-500 font-[500]">10 Minute before</p>
        </div>

        <div className="cursor-pointer">
          <HiMiniXMark size={20} className="text-gray-500" />
        </div>
      </div>

      <div className="flex items-center gap-2 justify-between my-4">
        <Button
          style={{ flex: 1 }}
          onClick={() => modalContext.setIsAddOpen(false)}
          isSmall
          variant="white"
        >
          <p className="font-bold text-gray-700">Cancel</p>
        </Button>
        <Button
          style={{ flex: 1 }}
          onClick={onSaveHandler}
          isSmall
          variant="default"
        >
          <p className="font-bold">Save</p>
        </Button>
      </div>
    </section>
  );
}

export default AddTask;
