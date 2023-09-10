import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import PagNav from "./PaginationType";

type Props = {
  totalItems: number;
  itemsPerPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  currentPage: number;
};

function Pagination({
  totalItems,
  itemsPerPage,
  currentPage,
  setCurrentPage,
}: Props) {
  const pages: number[] = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pages.push(i);
  }

  const firstPages: number[] = [];
  const lastPages: number[] = [];

  if (pages.length > 6) {
    firstPages.push(...pages.slice(0, 3));
    lastPages.push(...pages.slice(pages.length - 3, pages.length));
  }

  const nextPageHandler = () => {
    if (currentPage < pages.length) {
      setCurrentPage(currentPage + 1);
    }
  };
  const previousPageHandler = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="my-8 border-t border-gray-300 flex items-center justify-between text-gray-800">
      <button
        className="flex border-none items-center gap-2 cursor-pointer"
        onClick={previousPageHandler}
      >
        <BsArrowLeftShort size={25} />
        <p className="font-semibold">Previous</p>
      </button>

      <div className="hidden md:block">
        <PagNav
          pages={pages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          firstPages={firstPages}
          lastPages={lastPages}
        />
      </div>

      <button
        className="flex border-none items-center gap-2 cursor-pointer"
        onClick={nextPageHandler}
      >
        <p className="font-semibold">Next</p>
        <BsArrowRightShort size={25} />
      </button>
    </div>
  );
}

export default Pagination;
