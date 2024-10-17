import React from 'react';

const SearchInput = ({ searchQuery, onSearchChange }) => {
  return (
    <input
      type="text"
      placeholder="Search by title"
      value={searchQuery}
      onChange={onSearchChange}
    />
  );
};

export default SearchInput;
