import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../../redux/actions";
import styles from "./PaginadoGlobal.module.css";

const PaginadoGlobal = ({ elementsPerPage, elementToShow }) => {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.currentPage);

  const totalPages = Math.ceil(elementToShow.length / elementsPerPage);

  const getPageRange = () => {
    const rangeSize = 3; // Tamaño del rango de páginas a mostrar
    const rangeMiddle = Math.ceil(rangeSize / 2); // Para que me de 3, el medio (para este caso es 3)
    let start = currentPage - rangeMiddle + 1;
    let end = currentPage + rangeMiddle - 1;

    if (start < 1) {
      start = 1;
      end = Math.min(rangeSize, totalPages);
    } else if (end > totalPages) {
      end = totalPages;
      start = Math.max(1, end - rangeSize + 1);
    }

    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };

  const pageNumbers = getPageRange();

  const nextPage = () => {
    if (currentPage < totalPages) {
      dispatch(setCurrentPage(currentPage + 1));
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      dispatch(setCurrentPage(currentPage - 1));
    }
  };

  const goToPage = (pageNumber) => {
    dispatch(setCurrentPage(pageNumber));
  };

  return (
    <nav className={styles.paginationContainer}>
      {" "}
      {/* Utilizamos el CSS Module */}
      <div>
        <div className="flex justify-center">
          <button
            className={`${styles.paginationButton} ${
              currentPage === 1
                ? styles.disabledPaginationButton
                : "bg-blue-500 hover:bg-blue-600 text-white"
            } rounded`}
            onClick={prevPage}
            disabled={currentPage === 1}
          >
            Anterior
          </button>
          {pageNumbers.map((number) => {
            if (number >= currentPage + 4 || number <= currentPage - 4) {
              return null;
            }
            return (
              <button
                className={`${styles.paginationButton} ${
                  number === currentPage
                    ? styles.activePaginationButton
                    : "bg-blue-200 hover:bg-blue-300 text-blue-800"
                } rounded`}
                key={number}
                onClick={() => goToPage(number)}
              >
                {number}
              </button>
            );
          })}
          <button
            className={`${styles.paginationButton} ${
              currentPage !== totalPages
                ? "bg-blue-500 hover:bg-blue-600 text-white"
                : styles.disabledPaginationButton
            } rounded`}
            onClick={nextPage}
            disabled={currentPage === totalPages}
          >
            Siguiente
          </button>
        </div>
      </div>
    </nav>
  );
};

export default PaginadoGlobal;
