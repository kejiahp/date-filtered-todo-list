import React from "react";

type Props = {
  selected?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
};

function PaginationItem({ selected, children, onClick }: Props) {
  return (
    <p
      onClick={onClick}
      className={`${
        selected ? "text-gray-950 font-semibold" : "text-gray-600"
      } p-2 cursor-pointer mx-2`}
    >
      {children}
    </p>
  );
}

export default PaginationItem;
