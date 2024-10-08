import React from 'react';

const SearchInput = ({ searchTerm, onSearch }) => {
  return (
    <div>
      <label>Search:</label>
      <input
        type="text"
        value={searchTerm}
        onChange={onSearch}
        placeholder="Search contacts..."
      />
    </div>
  );
};

export default SearchInput;