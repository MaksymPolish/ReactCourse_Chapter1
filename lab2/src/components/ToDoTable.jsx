import React from 'react';

const ToDoTable = ({ toDos }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>
        </tr>
      </thead>
      <tbody>
        {toDos.map((toDo) => (
          <tr key={toDo.id.toString()}>
            <td>{toDo.id}</td>
            <td>{toDo.title}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ToDoTable;
