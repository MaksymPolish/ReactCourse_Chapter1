import React from 'react';
import './App.css';
import ToDoContainer from './components/ToDo/ToDoContainer';
import PageTitle from './components/common/PageTitle';
function App() {
  return (
    <>
    <PageTitle title="MyTask" />
    <ToDoContainer />
    </>
  );
}

export default App;
