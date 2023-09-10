import React from "react";
import ModalControlContextProvider from "./ModalsControlContext";
import TasksContextProvider from "./TasksContext";

type Props = {
  children: React.ReactNode;
};

function GlobalStateContext({ children }: Props) {
  return (
    <TasksContextProvider>
      <ModalControlContextProvider>{children}</ModalControlContextProvider>
    </TasksContextProvider>
  );
}

export default GlobalStateContext;
