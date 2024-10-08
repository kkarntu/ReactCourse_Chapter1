import React, { useState } from 'react';
import ContactForm from './components/ContactForm';
import ContactTable from './components/ContactTable';

const App = () => {
    const [contacts, setContacts] = useState([]);
    const [editingContact, setEditingContact] = useState(null);

    const addContact = (contact) => {
        setContacts([...contacts, { id: Date.now(), ...contact }]);
    };

    const editContact = (updatedContact) => {
        setContacts(contacts.map(contact => (contact.id === updatedContact.id ? updatedContact : contact)));
        setEditingContact(null);
    };

    const startEditing = (contact) => {
        setEditingContact(contact);
    };

    const cancelEditing = () => {
        setEditingContact(null);
    };

    return (
        <div>
            <h1>Address Book</h1>
            <ContactForm
                addContact={addContact}
                editContact={editContact}
                editingContact={editingContact}
                cancelEditing={cancelEditing}
            />
            <ContactTable contacts={contacts} startEditing={startEditing} />
        </div>
    );
};

export default App;