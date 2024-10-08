import React from 'react'
import './App.css'
import PageTitle from './components/common/PageTitle'
import AddressBookContainer from './components/Adress/AdressBookContainer'
function App() {
  return (
    <>
      <div className="container">
        <PageTitle title="Adress book list" />
        <AddressBookContainer />
      </div>
    </>
  )
}

export default App
