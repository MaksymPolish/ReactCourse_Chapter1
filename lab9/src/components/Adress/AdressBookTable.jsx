import React, { useState } from 'react';

const AddressBookTable = ({ contacts, onRemove, onUpdate }) => {
  const [editingId, setEditingId] = useState(null);
  const [editValues, setEditValues] = useState({ firstName: '', lastName: '', phone: '' });
  const [errors, setErrors] = useState({});

  // Function for "Edit" / "Save"
  const handleEditClick = (contact) => {
    if (editingId === contact.id) {
      const newErrors = validate(editValues);
      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        return;
      }
      onUpdate(contact.id, editValues);
      setEditingId(null);
      setEditValues({ firstName: '', lastName: '', phone: '' });
      setErrors({});
    } else {
      setEditingId(contact.id);
      setEditValues({
        firstName: contact.firstName,
        lastName: contact.lastName,
        phone: contact.phone
      });
      setErrors({});
    }
  };

  // Validation function
  const validate = (values) => {
    const newErrors = {};
    if (!values.firstName.trim()) newErrors.firstName = 'The first name is required';
    if (!values.lastName.trim()) newErrors.lastName = 'The last name is required';
    if (!values.phone.trim()) newErrors.phone = 'The phone is required';
    return newErrors;
  };

  // Handling input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditValues({
      ...editValues,
      [name]: value
    });
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Phone</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {contacts.length === 0 ? (
          <tr>
            <td colSpan="5">No data to display</td>
          </tr>
        ) : (
          contacts.map((contact) => (
            <tr key={contact.id}>
              <td>{contact.id}</td>
              <td>
                {editingId === contact.id ? (
                  <>
                    <input
                      type="text"
                      name="firstName"
                      value={editValues.firstName}
                      onChange={handleInputChange}
                      style={{ borderColor: errors.firstName ? 'red' : '' }}
                    />
                    {errors.firstName && <p style={{ color: 'red' }}>{errors.firstName}</p>}
                  </>
                ) : (
                  contact.firstName
                )}
              </td>
              <td>
                {editingId === contact.id ? (
                  <>
                    <input
                      type="text"
                      name="lastName"
                      value={editValues.lastName}
                      onChange={handleInputChange}
                      style={{ borderColor: errors.lastName ? 'red' : '' }}
                    />
                    {errors.lastName && <p style={{ color: 'red' }}>{errors.lastName}</p>}
                  </>
                ) : (
                  contact.lastName
                )}
              </td>
              <td>
                {editingId === contact.id ? (
                  <>
                    <input
                      type="text"
                      name="phone"
                      value={editValues.phone}
                      onChange={handleInputChange}
                      style={{ borderColor: errors.phone ? 'red' : '' }}
                    />
                    {errors.phone && <p style={{ color: 'red' }}>{errors.phone}</p>}
                  </>
                ) : (
                  contact.phone
                )}
              </td>
              <td>
                <button className="remove-button" onClick={() => onRemove(contact.id)}>
                  Remove
                </button>
                <button style={{ marginLeft: '10px' }} className="edit-button" onClick={() => handleEditClick(contact)}>
                  {editingId === contact.id ? 'Save' : 'Edit'}
                </button>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

export default AddressBookTable;
