import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Pagination = ({ totalItems, itemsPerPage, onPageChange, currentPage }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const maxVisibleButtons = 11;

  let startPage = Math.max(1, currentPage - Math.floor(maxVisibleButtons / 2));
  let endPage = Math.min(startPage + maxVisibleButtons - 1, totalPages);

  if (endPage - startPage + 1 < maxVisibleButtons) {
    startPage = Math.max(1, endPage - maxVisibleButtons + 1);
  }

  const visiblePageNumbers = Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage + index);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <div className="flex items-center justify-between mt-4">
      <div className="flex items-center">
        <button
          className="flex justify-between items-center gap-1 mr-5 px-3 py-1 text-[#4C4C4C] rounded-md border-[1px] border-[#D9D9D9] shadow-sm"
          onClick={() => handlePageChange(currentPage - 1)}
        >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="w-4 h-4 stroke-[#4C4C4C]">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
            <span className="ml-1">Previous</span>            
        </button>        
        <button
          className={`px-2 py-1 w-8 h-8 ${
            startPage > 1 ? 'text-[#4C4C4C] hover:bg-[#4c4c4c2f]' : 'hidden'
          } rounded`}
          onClick={() => handlePageChange(1)}
        >
          1
        </button>        
        {
            currentPage >= 8 ? <span>...</span> : ''
        }
        <div className="flex mx-2">
          {visiblePageNumbers.map((pageNumber) => (
            <button
              key={pageNumber}
              className={`w-8 h-8 mx-1 px-2 py-1 ${
                pageNumber === currentPage
                  ? 'bg-[#146EB4] text-white'
                  : 'text-[#4C4C4C] hover:bg-[#4c4c4c2f]'
              } rounded`}
              onClick={() => handlePageChange(pageNumber)}
            >
              {pageNumber}
            </button>
          ))}
        </div>     
        {
            currentPage <= totalPages - 7 ? <span>...</span> : ''
        }   
        <button
          className={`px-2 py-1 ${
            endPage < totalPages ? 'text-[#4C4C4C] hover:bg-[#4c4c4c2f]' : 'hidden'
          } rounded`}
          onClick={() => handlePageChange(totalPages)}
        >
          {totalPages}
        </button>
        <button
          className="flex justify-between items-center gap-1 ml-5 px-3 py-1 bg-white text-[#4C4C4C] rounded-md border-[1px] border-[#D9D9D9] shadow-sm"
          onClick={() => handlePageChange(currentPage + 1)}
        >
          <span className="mr-1">Next</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="w-4 h-4 stroke-[#4C4C4C]">
            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>
    </div>
  );
};

Pagination.propTypes = {
  totalItems: PropTypes.number.isRequired,
  itemsPerPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
};

export default Pagination;
