import React from 'react';

const AddToDoComponent = ({ title, onTitleChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <label>
        <input
          type="text"
          value={title}
          onChange={onTitleChange}
          placeholder="Enter task title"
        />
      </label>
      <button type="submit">Add</button>
    </form>
  );
};

export default AddToDoComponent;
