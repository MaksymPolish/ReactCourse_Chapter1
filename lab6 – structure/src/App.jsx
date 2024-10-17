import React from 'react'
import './App.css'
import ToDoContainer from './features/components/ToDoContainer'
import PageTitle from './features/common/PageTitle'
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
