import { TaskType } from "./TodoTypes";

export type ModalControlContextType = {
  isDetailsOpen: boolean;
  setIsDetailsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isEditOpen: boolean;
  setIsEditOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isAddOpen: boolean;
  setIsAddOpen: React.Dispatch<React.SetStateAction<boolean>>;
  closeAll: () => void;
};

export type TasksContextType = {
  tasks: TaskType[];
  setTasks: React.Dispatch<React.SetStateAction<TaskType[]>>;
  selectedTask: any;
  setSelectedTask: React.Dispatch<React.SetStateAction<any>>;
  selectedCalendarDate: Date;
  setSelectedCalendarDate: React.Dispatch<React.SetStateAction<any>>;
};
