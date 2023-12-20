import { createContext, useContext, useState } from 'react';
import axios from 'axios';

// creating context
const ContactContext=createContext();


// context provider
export const ContactProvider = ({children})=>{
    let [contacts, setContacts] = useState([]);

    const getContactList = () => {
        const getResponse = axios.get("https://jsonplaceholder.typicode.com/users")
            .then((res)=>{
                return res.data;
            })
            .catch((error)=>{
                return error.message;
            });

        return getResponse;
    }

    const addNewContact = (body)=> { 
        let addResponse=axios.post('https://jsonplaceholder.typicode.com/users', body)
            .then((res)=>{
                return res;
            })
            .catch((error)=>{
                return error.message;
            })
        return addResponse;
    }
    const updateContact = (id) => {
        
    }

    const deleteContact = (id) => {
        let deleteResponse = axios.delete(`https://jsonplaceholder.typicode.com/users/:${id}`)
            .then((res)=>{
                return res;
            })
            .catch((error)=>{
                return error.message;
            });
        return deleteResponse;
    }

    return(
        <ContactContext.Provider value={{contacts, setContacts, getContactList, addNewContact, updateContact , deleteContact}}>
            {children}
        </ContactContext.Provider>
    )
}

// customhook 
export const useContact=()=>{
    return useContext(ContactContext);
}

