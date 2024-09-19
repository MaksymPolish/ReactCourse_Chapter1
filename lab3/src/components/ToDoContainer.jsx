import { useState } from 'react';
import SearchInput from './SearchInput';
import ToDoTable from './ToDoTable';
import AddToDoComponent from './AddToDoComponent';

const ToDoContainer = () => {
  const [toDos, setToDos] = useState([]);
  const [newToDo, setNewToDo] = useState({ id: '', title: '' });
  const [searchQuery, setSearchQuery] = useState('');

  function handleNewTitleChange(event) {
    setNewToDo({ id: new Date().toISOString(), title: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (newToDo.title.trim() === '') return;
    setToDos([...toDos, newToDo]);
    setNewToDo({ id: '', title: '' });
  }

  function handleRemove(id) {
    setToDos(toDos.filter(toDo => toDo.id !== id));
  }

  function handleSearchChange(event) {
    setSearchQuery(event.target.value);
  }

  const filteredToDos = toDos.filter(toDo =>
    toDo.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container">
      <SearchInput searchQuery={searchQuery} onSearchChange={handleSearchChange} />
      <AddToDoComponent
        title={newToDo.title}
        onTitleChange={handleNewTitleChange}
        onSubmit={handleSubmit}
      />
      <ToDoTable toDos={filteredToDos} onRemove={handleRemove} />
    </div>
  );
};

export default ToDoContainer;
