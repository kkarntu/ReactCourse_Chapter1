import React, { useState, useEffect } from 'react';

const ContactForm = ({ addContact, editContact, editingContact, cancelEditing }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (editingContact) {
            setFirstName(editingContact.firstName);
            setLastName(editingContact.lastName);
            setPhone(editingContact.phone);
        } else {
            setFirstName('');
            setLastName('');
            setPhone('');
        }
    }, [editingContact]);

    const validate = () => {
        const newErrors = {};
        if (!firstName) newErrors.firstName = "The first name is required";
        if (!lastName) newErrors.lastName = "The last name is required";
        if (!phone) newErrors.phone = "The phone is required";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            const contact = { firstName, lastName, phone };
            if (editingContact) {
                editContact({ ...editingContact, firstName, lastName, phone });
            } else {
                addContact(contact);
            }
            setFirstName('');
            setLastName('');
            setPhone('');
            setErrors({});
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>First Name</label>
                <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                {errors.firstName && <span style={{ color: 'red' }}>{errors.firstName}</span>}
            </div>
            <div>
                <label>Last Name</label>
                <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                {errors.lastName && <span style={{ color: 'red' }}>{errors.lastName}</span>}
            </div>
            <div>
                <label>Phone</label>
                <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
                {errors.phone && <span style={{ color: 'red' }}>{errors.phone}</span>}
            </div>
            <button type="submit">{editingContact ? "Edit Contact" : "Add Contact"}</button>
            {editingContact && <button type="button" onClick={cancelEditing}>Cancel</button>}
        </form>
    );
};

export default ContactForm;