import { useContext, useState } from "react";
import TaskItem from "./TaskItem";
import Pagination from "../pagination/Pagination";
import { TasksContext } from "../../context/TasksContext";

import { isSameDay, parseISO } from "date-fns";

type Props = {
  header: string;
};

function Alltasks({ header }: Props) {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(7);

  const lastPostIndex = currentPage * itemsPerPage;
  const firstPostIndex = lastPostIndex - itemsPerPage;

  const allTasks = useContext(TasksContext);

  const selectedDayMeetings = (() => {
    const allSelectedDaysMeetings = allTasks.tasks.filter((meeting) =>
      isSameDay(parseISO(meeting.date), allTasks.selectedCalendarDate)
    );

    if (allSelectedDaysMeetings.length === 0) {
      return allTasks.tasks;
    } else {
      return allSelectedDaysMeetings;
    }
  })();

  const paginatedData = selectedDayMeetings?.slice(
    firstPostIndex,
    lastPostIndex
  );

  return (
    <section className="my-6 ">
      <h2 className="font-bold mb-4 text-gray-800">{header}</h2>

      <div className="mt-5 flex flex-col gap-3">
        {paginatedData.length === 0 ? (
          <div>
            <h1 className="text-red-500">No tasks here</h1>
          </div>
        ) : (
          paginatedData.map((item, index) => (
            <TaskItem key={index} item={item} />
          ))
        )}
      </div>

      <Pagination
        totalItems={selectedDayMeetings?.length}
        itemsPerPage={itemsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </section>
  );
}

export default Alltasks;
