import React, { useState } from 'react'
import ToDoTable from './ToDoTable'
import SearchInput from './SearchInput'
import AddToDoComponent from './AddToDoComponent'
import useGetAllToDo from '../CustomHooks/useGetAllToDo'
import Pagination from './pagination'
import Loading from './Loading'

const ToDoContainer = () => {
  const { isLoading, data, error: fetchError } = useGetAllToDo() // Custom hook
  const [toDos, setToDos] = useState([])
  const [newToDo, setNewToDo] = useState({ id: '', title: '' })
  const [searchQuery, setSearchQuery] = useState('')
  const [error, setError] = useState(null) // Error state for form validation
  const [currentPage, setCurrentPage] = useState(1)
  const [toDosPerPage] = useState(10)

  function handleNewTitleChange(event) {
    setNewToDo({ id: new Date().toISOString(), title: event.target.value })
    setError(null)
  }

  function handleSubmit(event) {
    event.preventDefault()
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

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  const filteredToDos = toDos.filter((toDo) =>
    toDo.title.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const allToDos = [...data, ...toDos]

  const indexOfLastToDo = currentPage * toDosPerPage
  const indexOfFirstToDo = indexOfLastToDo - toDosPerPage
  const currentToDos = (filteredToDos.length ? filteredToDos : allToDos).slice(
    indexOfFirstToDo,
    indexOfLastToDo
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

      {error && <p style={{ color: 'red' }}>{error}</p>}
      {fetchError && <p style={{ color: 'red' }}>{fetchError}</p>}
      {isLoading ? (
        <Loading /> // Use the new Loading component here
      ) : (
        <>
          <ToDoTable toDos={currentToDos} onRemove={handleRemove} />
          <Pagination
            toDosPerPage={toDosPerPage}
            totalToDos={
              filteredToDos.length ? filteredToDos.length : allToDos.length
            }
            paginate={paginate}
            currentPage={currentPage}
          />
        </>
      )}
    </div>
  )
}

export default ToDoContainer
