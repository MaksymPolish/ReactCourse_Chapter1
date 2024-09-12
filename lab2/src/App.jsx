import { useState } from 'react';
import './App.css';
import ToDoTable from './components/ToDoTable';
import AddToDoComponent from './components/AddToDoComponent';

function App() {
  const [toDos, setToDos] = useState([]);
  const [newToDo, setNewToDo] = useState({ id: '', title: '' });

  function handleNewTitleChange(event) {
    setNewToDo({ id: new Date().toISOString(), title: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault(); 
    if (newToDo.title.trim() === '') return; 
    setToDos([...toDos, newToDo]);
    setNewToDo({ id: '', title: '' }); 
  }

  return (
    <>
      <AddToDoComponent
        title={newToDo.title}
        onTitleChange={handleNewTitleChange}
        onSubmit={handleSubmit}
      />
      <ToDoTable toDos={toDos} />
    </>
  );
}

export default App;
