import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

import {
  add,
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  startOfWeek,
  endOfWeek,
  isEqual,
  isSameDay,
  isSameMonth,
  isToday,
  parse,
  parseISO,
  startOfToday,
} from "date-fns";
import { useContext, useState } from "react";
import { TasksContext } from "../../context/TasksContext";

const colStartClasses = [
  "col-start-2",
  "",
  "col-start-3",
  "col-start-4",
  "col-start-5",
  "col-start-6",
  "col-start-7",
];

function classNames(...classes: (string | boolean)[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Calendar() {
  const taskContext = useContext(TasksContext);

  const today = startOfToday();
  const selectedDay = taskContext.selectedCalendarDate;
  const setSelectedDay = taskContext.setSelectedCalendarDate;

  const [currentMonth, setCurrentMonth] = useState(format(today, "MMM-yyyy"));
  const firstDayCurrentMonth = parse(currentMonth, "MMM-yyyy", new Date());

  const days = eachDayOfInterval({
    start: startOfWeek(firstDayCurrentMonth, { weekStartsOn: 1 }),
    end: endOfWeek(endOfMonth(firstDayCurrentMonth), { weekStartsOn: 1 }),
  });

  function previousMonth() {
    const firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 });
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  }

  function nextMonth() {
    const firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  }

  return (
    <div className="pt-4 shadow-lg rounded-lg border border-gray-100 my-6">
      <div className="max-w-md px-4 mx-auto sm:px-7 md:max-w-4xl md:px-6">
        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={previousMonth}
            className="-my-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
          >
            <span className="sr-only">Previous month</span>
            <HiChevronLeft className="w-5 h-5" aria-hidden="true" />
          </button>
          <h2 className=" font-semibold text-gray-900">
            {format(firstDayCurrentMonth, "MMMM yyyy")}
          </h2>
          <button
            onClick={nextMonth}
            type="button"
            className="-my-1.5 -mr-1.5 ml-2 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
          >
            <span className="sr-only">Next month</span>
            <HiChevronRight className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        <div className="flex flex-wrap justify-between gap-1 items-center mt-5">
          <input
            className="w-full md:w-auto outline-none p-2 border border-gray-300 rounded-md shadow-sm"
            disabled
            value={selectedDay ? format(selectedDay, "MMM dd, yyy") : ""}
          />
          <button
            onClick={() => setSelectedDay(today)}
            type="button"
            className="text-gray-800 font-semibold border border-gray-300 p-2 rounded-md shadow-sm"
          >
            Today
          </button>
        </div>

        <div className="grid grid-cols-7 mt-8 text-xs leading-6 text-center text-gray-500">
          <div>Mo</div>
          <div>Tu</div>
          <div>We</div>
          <div>Th</div>
          <div>Fr</div>
          <div>Sa</div>
          <div>Su</div>
        </div>
        <div className="grid grid-cols-7 mt-2 text-sm">
          {days.map((day, dayIdx) => (
            <div
              key={day.toString()}
              className={classNames(
                dayIdx === 0 && colStartClasses[getDay(day)],
                "py-1.5"
              )}
            >
              <button
                type="button"
                onClick={() => {
                  if (isEqual(day, selectedDay)) {
                    setSelectedDay(null);
                  } else {
                    setSelectedDay(day);
                  }
                }}
                className={classNames(
                  isEqual(day, selectedDay) && isToday(day) && "text-white",
                  !isEqual(day, selectedDay) && isToday(day) && "text-red-500",
                  !isEqual(day, selectedDay) &&
                    !isToday(day) &&
                    isSameMonth(day, firstDayCurrentMonth) &&
                    "text-gray-900",
                  !isEqual(day, selectedDay) &&
                    !isToday(day) &&
                    !isSameMonth(day, firstDayCurrentMonth) &&
                    "text-gray-400",
                  isEqual(day, selectedDay) && isToday(day) && "bg-blue-600",
                  isEqual(day, selectedDay) && !isToday(day) && "bg-gray-300",
                  !isEqual(day, selectedDay) && "hover:bg-gray-200",
                  (isEqual(day, selectedDay) || isToday(day)) &&
                    "font-semibold",
                  "mx-auto flex flex-col h-10 w-10 items-center justify-center rounded-full"
                )}
              >
                <time dateTime={format(day, "yyyy-MM-dd")}>
                  {format(day, "d")}
                </time>

                {taskContext.tasks.some((meeting) =>
                  isSameDay(parseISO(meeting.date), day)
                ) && (
                  <div className="w-1 h-1 mx-auto mt-1">
                    <div className="w-1 h-1 rounded-full bg-sky-500"></div>
                  </div>
                )}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
