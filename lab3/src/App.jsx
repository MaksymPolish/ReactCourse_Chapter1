import React from 'react';
import './App.css';
import ToDoContainer from './components/ToDoContainer';
import PageTitle from './components/PageTitle';
function App() {
  return (
    <>
    <PageTitle title="MyTask" />
    <ToDoContainer />
    </>
  );
}

export default App;
