import { createContext, useState } from "react";

export const ModalControlContext = createContext<{
  isDetailsOpen: boolean;
  setIsDetailsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isEditOpen: boolean;
  setIsEditOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isAddOpen: boolean;
  setIsAddOpen: React.Dispatch<React.SetStateAction<boolean>>;
  closeAll: () => void;
}>({
  isDetailsOpen: false,
  setIsDetailsOpen: () => {},
  isEditOpen: false,
  setIsEditOpen: () => {},
  isAddOpen: false,
  setIsAddOpen: () => {},
  closeAll: () => {},
});

/**
 * Desktop Modal Control Provider
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
