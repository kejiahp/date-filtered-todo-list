import { createContext, useState } from "react";
import { TaskType } from "../types/TodoTypes";
import { startOfToday } from "date-fns";
import { TasksContextType } from "../types/ContextTypes";

export const TasksContext = createContext<TasksContextType>({
  tasks: [],
  setTasks: () => {},
  selectedTask: null,
  setSelectedTask: () => {},
  selectedCalendarDate: startOfToday(),
  setSelectedCalendarDate: () => {},
});

function TasksContextProvider({ children }: { children: React.ReactNode }) {
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const [selectedTask, setSelectedTask] = useState<any>(null);
  const [selectedCalendarDate, setSelectedCalendarDate] = useState<any>(null);

  return (
    <TasksContext.Provider
      value={{
        tasks,
        setTasks,
        selectedTask,
        setSelectedTask,
        selectedCalendarDate,
        setSelectedCalendarDate,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
}

export default TasksContextProvider;
