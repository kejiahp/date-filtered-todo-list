import { createContext, useState } from "react";
import { ModalControlContextType } from "../types/ContextTypes";

export const ModalControlContext = createContext<ModalControlContextType>({
  isDetailsOpen: false,
  setIsDetailsOpen: () => {},
  isEditOpen: false,
  setIsEditOpen: () => {},
  isAddOpen: false,
  setIsAddOpen: () => {},
  closeAll: () => {},
});

/**
 * Modal Control Context Provider
 */
function ModalControlContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isAddOpen, setIsAddOpen] = useState(false);

  const closeAll = () => {
    setIsDetailsOpen(false);
    setIsEditOpen(false);
    setIsAddOpen(false);
  };

  return (
    <ModalControlContext.Provider
      value={{
        isDetailsOpen,
        setIsDetailsOpen,
        isEditOpen,
        setIsEditOpen,
        isAddOpen,
        setIsAddOpen,
        closeAll,
      }}
    >
      {children}
    </ModalControlContext.Provider>
  );
}

export default ModalControlContextProvider;
