import { useContext, useState } from "react";
import { data } from "../assets/data";
import Card from "./Card";

const CardWithPagination = ({ itemsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const pagesToShow = 4;
  const totalPagesLeft = totalPages - currentPage;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleNextClick = () => {
    if (totalPagesLeft > 0) {
      setCurrentPage(currentPage + pagesToShow);
    }
  };

  return (
    <>
      <Card currentPage={currentPage} itemsPerPage={itemsPerPage} />

      <div className="pagination flex justify-center">
        {currentPage > 1 && (
          <button
            className="btn btn-outline"
            onClick={() => handlePageChange(currentPage - pagesToShow)}
          >
            Previous
          </button>
        )}

        {totalPagesLeft > 0 && (
          <button className="btn btn-outline" onClick={handleNextClick}>
            Next
          </button>
        )}
      </div>
    </>
  );
};

export default CardWithPagination;
