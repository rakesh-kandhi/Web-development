import React from "react";
import { usePagination, DOTS } from "./usePagination";

interface Props {
  onPageChange: (page: number) => void;
  totalCount: number;
  siblingCount?: number;
  currentPage: number;
  pageSize: number;
}

const Pagination: React.FC<Props> = ({
  onPageChange,
  totalCount,
  siblingCount = 1,
  currentPage,
  pageSize,
}) => {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });
  const totalPageCount = Math.ceil(totalCount / pageSize);

  if (currentPage <= 0 || paginationRange.length <= 1) {
    return null;
  }

  const onNext = () => {
    onPageChange(
      currentPage < totalPageCount ? currentPage + 1 : currentPage
    );
  };

  const onPrevious = () => {
    onPageChange(currentPage > 1 ? currentPage - 1 : 1);
  };

  return (
    <ul className="pagination">
      <li onClick={onPrevious} aria-disabled={currentPage === 1}>
        Prev
      </li>
      {paginationRange.map((pageNumber, index: number) => (
        <li key={index} onClick={() => onPageChange(pageNumber as number)}>
          {pageNumber === DOTS ? "..." : pageNumber}
        </li>
      ))}
      <li
        onClick={onNext}
        aria-disabled={currentPage === totalPageCount}
      >
        Next
      </li>
    </ul>
  );
};

export default Pagination;
