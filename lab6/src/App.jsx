import React from 'react'
import './App.css'
import ToDoContainer from './components/ToDo/ToDoContainer'
import PageTitle from './components/common/PageTitle'
function App() {
  return (
    <>
      <div className="container">
        <PageTitle title="MyTask" />
        <ToDoContainer />
      </div>
    </>
  )
}

export default App
