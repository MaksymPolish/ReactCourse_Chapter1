import React, { useState } from 'react'
const ToDoTable = ({ toDos, onRemove, onUpdate }) => {
  const [editingId, setEditingId] = useState(null)
  const [editValue, setEditValue] = useState('')
  const [error, setError] = useState('') // Повідомлення про помилку

  // Function for "Edit" / "Save"
  const handleEditClick = (toDo) => {
    if (editingId === toDo.id) {
      if (editValue.trim() === '') {
        // If title is empty, show error message
        setError('Title is required')
        return
      }
      onUpdate(toDo.id, editValue)
      setEditingId(null)
      setEditValue('')
      setError('') //Clear error message
    } else {
      setEditingId(toDo.id)
      setEditValue(toDo.title)
      setError('') //Clear error message
    }
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {toDos.map((toDo) => (
          <tr key={toDo.id}>
            <td>{toDo.id}</td>
            <td>
              {editingId === toDo.id ? (
                <>
                  <input
                    type="text"
                    value={editValue}
                    onChange={(e) => setEditValue(e.target.value)}
                    style={{ borderColor: error ? 'red' : '' }} // If input error set red border
                  />
                  {error && <p style={{ color: 'red' }}>{error}</p>}{' '}
                </>
              ) : (
                toDo.title
              )}
            </td>
            <td>
              <button className="remove-button" onClick={() => onRemove(toDo.id)}>
                Remove
              </button>
              <button style={{ marginLeft: '10px' }} className="edit-button" onClick={() => handleEditClick(toDo)}>
                {editingId === toDo.id ? 'Save' : 'Edit'}
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default ToDoTable
