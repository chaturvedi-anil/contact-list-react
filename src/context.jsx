import { createContext, useContext, useState } from 'react';
import axios from 'axios';
const ContactContext=createContext();

export const ContactProvider = ({children})=>{
    const [contacts, setContacts] = useState([]);

    const getContactList = () => {
        let response = axios.get("https://jsonplaceholder.typicode.com/users")
            .then((res)=>{
                return res.data;
            })
            .catch((error)=>{
                return error.message;
            });

        setContacts(contacts);
        return response;
    }

    const newContact = (body)=> { 
        
    }
    const updateContact = (id) => {

    }

    const deleteContact = (id) => {

    }

    return(
        <ContactContext.Provider value={{contacts, setContacts, getContactList, newContact, updateContact , deleteContact}}>
            {children}
        </ContactContext.Provider>
    )
}

export const useContact=()=>{
    return useContext(ContactContext);
}

