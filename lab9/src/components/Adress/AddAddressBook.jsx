import React, { useState } from 'react';

const AddAddressBook = ({ onAdd }) => {
  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    phone: '',
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  // Валідація форми
  const validate = () => {
    const newErrors = {};
    //Валідація імені
    if (!formValues.firstName.trim()) {
      newErrors.firstName = 'The first name is required';
    }
    //Валідація прізвища
    if (!formValues.lastName.trim()) {
      newErrors.lastName = 'The last name is required';
    }
    //Валідація телефону
    if (!formValues.phone.trim()) {
      newErrors.phone = 'The phone is required';
    } else if (!/^\d+$/.test(formValues.phone)) {
      // Перевірка на цифри
      newErrors.phone = 'The phone must contain only digits';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    onAdd({
      id: Date.now(),
      ...formValues,
    });

    setFormValues({ firstName: '', lastName: '', phone: '' });
    setErrors({});
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name:</label>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formValues.firstName}
          onChange={handleInputChange}
          style={{ borderColor: errors.firstName ? 'red' : '' }}
        />
        {errors.firstName && <p style={{ color: 'red' }}>{errors.firstName}</p>}
      </div>

      <div>
        <label>Last Name:</label>
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formValues.lastName}
          onChange={handleInputChange}
          style={{ borderColor: errors.lastName ? 'red' : '' }}
        />
        {errors.lastName && <p style={{ color: 'red' }}>{errors.lastName}</p>}
      </div>

      <div>
        <label>Phone:</label>
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={formValues.phone}
          onChange={handleInputChange}
          style={{ borderColor: errors.phone ? 'red' : '' }}
        />
        {errors.phone && <p style={{ color: 'red' }}>{errors.phone}</p>}
      </div>

      <button type="submit">Add Contact</button>
    </form>
  );
};

export default AddAddressBook;
