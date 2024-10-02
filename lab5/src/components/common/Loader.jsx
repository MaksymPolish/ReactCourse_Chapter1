import React from 'react';

const Loader = ({ isLoading, children }) => {
  return isLoading ? (
    <div className="loader-container">
      <div className="loader-main">
        Loading...
      </div>
    </div>
  ) : (
    children
  );
};

export default Loader;
