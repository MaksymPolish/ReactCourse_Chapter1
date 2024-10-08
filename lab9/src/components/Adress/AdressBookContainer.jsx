import React, { useState } from 'react'
import AddressBookTable from './AdressBookTable'
import AddAddressBook from './AddAddressBook'
import SearchInput from './SearchInput'

const AddressBookContainer = () => {
  const [contacts, setContacts] = useState([]) //контакти
  const [searchTerm, setSearchTerm] = useState('')

  //Додавання / редагування / видалення контактів
  const addContact = (contact) => {
    setContacts([...contacts, contact])
  }

  const removeContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id))
  }

  const updateContact = (id, updatedValues) => {
    setContacts(
      contacts.map((contact) =>
        contact.id === id ? { ...contact, ...updatedValues } : contact
      )
    )
  }

  //Пошук / філтер контактів
  const handleSearch = (e) => {
    setSearchTerm(e.target.value)
  }

  const filteredContacts = contacts.filter((contact) =>
    `${contact.firstName} ${contact.lastName} ${contact.phone}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  )

  return (
    <div>
      <SearchInput searchTerm={searchTerm} onSearch={handleSearch} />
      <AddAddressBook onAdd={addContact} />
      <AddressBookTable
        contacts={filteredContacts}
        onRemove={removeContact}
        onUpdate={updateContact}
      />
    </div>
  )
}

export default AddressBookContainer
