import PaginationItem from "./PaginationItem";

type Props = {
  pages: number[];
  firstPages: number[];
  lastPages: number[];
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
};

/**
 * component that decides the pagination style to use based on the number of pages available
 */
const PagNav = ({
  pages,
  firstPages,
  lastPages,
  currentPage,
  setCurrentPage,
}: Props) => {
  if (pages.length > 6) {
    return (
      <div className="flex items-center">
        {firstPages.map((page, index) => {
          return (
            <PaginationItem
              key={index}
              onClick={() => setCurrentPage(page)}
              selected={page === currentPage}
            >
              {page}
            </PaginationItem>
          );
        })}

        <p className={"text-gray-800 p-2 mx-2"}>...</p>

        {lastPages.map((page, index) => {
          return (
            <PaginationItem
              key={index}
              onClick={() => setCurrentPage(page)}
              selected={page === currentPage}
            >
              {page}
            </PaginationItem>
          );
        })}
      </div>
    );
  } else {
    return (
      <div className="flex items-center">
        {pages.map((page, index) => {
          return (
            <PaginationItem
              key={index}
              onClick={() => setCurrentPage(page)}
              selected={page === currentPage}
            >
              {page}
            </PaginationItem>
          );
        })}
      </div>
    );
  }
};

export default PagNav;
