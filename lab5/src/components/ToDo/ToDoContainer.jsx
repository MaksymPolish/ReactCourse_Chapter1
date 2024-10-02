import React, { useEffect, useState } from 'react'
import ToDoTable from './ToDoTable'
import SearchInput from './SearchInput'
import AddToDoComponent from './AddToDoComponent'
import useGetAllToDo from '../CustomHooks/useGetAllToDo'
import Pagination from './pagination'
import Loader from '../common/Loader'
const ToDoContainer = () => {
  // Custom hook
  const {
    isLoading,
    data: toDos,
    setData: setToDos,
    error: fetchError,
  } = useGetAllToDo()
  //States
  const [newToDo, setNewToDo] = useState({ id: '', title: '' })
  const [searchQuery, setSearchQuery] = useState('')
  const [error, setError] = useState(null) // Error state for form validation
  const [currentPage, setCurrentPage] = useState(1)
  const [toDosPerPage] = useState(10)

  //New Title Change
  function handleNewTitleChange(event) {
    setNewToDo({ id: new Date().toISOString(), title: event.target.value })
    setError(null)
  }

  //Add to-do function
  function handleSubmit(event) {
    event.preventDefault()
    if (newToDo.title.trim() === '') {
      setError('Task title cannot be empty')
      return
    }
    setToDos((prevToDos) => [...prevToDos, newToDo])
    setNewToDo({ id: '', title: '' })
    setError(null)
  }

  //Remove
  function handleRemove(id) {
    if (id !== null && id !== undefined) {
      setToDos((prevToDos) => prevToDos.filter((toDo) => toDo.id !== id)) //Remove to-do by id
    }
  }

  const filteredToDos = toDos.filter((toDo) =>
    toDo.title.toLowerCase().includes(searchQuery.toLowerCase())
  )
  //Search Change
  function handleSearchChange(event) {
    setSearchQuery(event.target.value)
  }

  //Pagination
  const paginate = (pageNumber) => setCurrentPage(pageNumber)
  const indexOfLastToDo = currentPage * toDosPerPage
  const indexOfFirstToDo = indexOfLastToDo - toDosPerPage
  const currentToDos = filteredToDos.slice(indexOfFirstToDo, indexOfLastToDo)

  //Filter

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
      {/* The loader is centered using Flexbox in the Loader.css */}
      <Loader isLoading={isLoading}>
        <>
          <ToDoTable toDos={currentToDos} onRemove={handleRemove} />
          <Pagination
            toDosPerPage={toDosPerPage}
            totalToDos={filteredToDos.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        </>
      </Loader>
    </div>
  )
}

export default ToDoContainer
