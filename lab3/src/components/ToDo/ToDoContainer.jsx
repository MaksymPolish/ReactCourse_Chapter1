import { useState } from 'react'
import ToDoTable from './ToDoTable'
import SearchInput from './SearchInput'
import AddToDoComponent from './AddToDoComponent'

const ToDoContainer = () => {
  const [toDos, setToDos] = useState([])
  const [newToDo, setNewToDo] = useState({ id: '', title: '' })
  const [searchQuery, setSearchQuery] = useState('')
  const [error, setError] = useState(null) // Error state validation

  function handleNewTitleChange(event) {
    setNewToDo({ id: new Date().toISOString(), title: event.target.value })
    setError(null)
  }

  function handleSubmit(event) {
    event.preventDefault()
    // Validation for empty title
    if (newToDo.title.trim() === '') {
      setError('Task title cannot be empty')
      return
    }

    setToDos([...toDos, newToDo])
    setNewToDo({ id: '', title: '' })
    setError(null)
  }

  function handleRemove(id) {
    if (id !== null && id !== undefined) {
      setToDos(toDos.filter((toDo) => toDo.id !== id))
    }
  }

  function handleSearchChange(event) {
    setSearchQuery(event.target.value)
  }

  const filteredToDos = toDos.filter((toDo) =>
    toDo.title.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="container">
      <SearchInput
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
      />
      <AddToDoComponent
        title={newToDo.title}
        onTitleChange={handleNewTitleChange}
        onSubmit={handleSubmit}
      />
      {error && <p style={{ color: 'red' }}>{error}</p>}{' '}
      {<ToDoTable toDos={filteredToDos} onRemove={handleRemove} />}
    </div>
  )
}

export default ToDoContainer
