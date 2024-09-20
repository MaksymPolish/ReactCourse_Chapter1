import React from 'react';

const ToDoTable = ({ toDos, onRemove }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {toDos.map((toDo) => (
          <tr key={toDo.id}>
            <td>{toDo.id}</td>
            <td>{toDo.title}</td>
            <td>
              <button onClick={() => onRemove(toDo.id)}>Remove</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ToDoTable;
