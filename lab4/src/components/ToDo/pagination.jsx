import React from 'react';

const Pagination = ({ toDosPerPage, totalToDos, paginate, currentPage }) => {
  const pageNumbers = [];

  // Calculate total page numbers
  for (let i = 1; i <= Math.ceil(totalToDos / toDosPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul
        className="pagination"
        style={{ display: 'flex', listStyleType: 'none', padding: 0 }}
      >
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={`page-item ${currentPage === number ? 'active' : ''}`}
            style={{ margin: '0 5px' }}
          >
            <a
              onClick={() => paginate(number)}
              href="!#"
              className="page-link"
              style={{ cursor: 'pointer', padding: '5px 10px' }}
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
