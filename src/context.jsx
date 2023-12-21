import { createContext, useContext, useState } from 'react';
import axios from 'axios';

// Creating context for managing contacts
const ContactContext = createContext();

// Context provider component
export const ContactProvider = ({ children }) => {
    // State variables for contacts and home activity
    const [contacts, setContacts] = useState([]);
    const [isHomeActive, setHomeActive] = useState(true);

    // Function to retrieve the contact list from an API
    const getContactList = async () => {
        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/users");
            return response.data;
        } catch (error) {
            return error.message;
        }
    };

    // Function to add a new contact
    const addNewContact = async (body) => {
        try {
            const response = await axios.post('https://jsonplaceholder.typicode.com/users', body);
            return response;
        } catch (error) {
            return error.message;
        }
    };

    // Function to delete a contact
    const deleteContact = async (id) => {
        try {
            const response = await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
            return response;
        } catch (error) {
            return error.message;
        }
    };

    // Providing the context values to the children components
    return (
        <ContactContext.Provider
            value={{
                isHomeActive,
                setHomeActive,
                contacts,
                setContacts,
                getContactList,
                addNewContact,
                // updateContact,
                deleteContact,
            }}
        >
            {children}
        </ContactContext.Provider>
    );
};

// Custom hook to access the contact context
export const useContact = () => {
    return useContext(ContactContext);
};
