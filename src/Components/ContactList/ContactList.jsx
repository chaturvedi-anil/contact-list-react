import React, {useState, useEffect} from 'react';
import './ContactList.scss';
import userIcon from '../../assets/logos/usersIcon.png';
import deleteLogo from '../../assets/logos/deleteLogo.svg';
import editLogo from '../../assets/logos/editLogo.svg';
import { useContact } from '../../context.jsx';

const ContactList = () => {
    const {getContactList, contacts, setContacts} = useContact();
    const handleContactDetails=(contactId)=>{
        
    }

    const handleUpdateContact=(contactId)=>{

    }

    const handleDeleteContact=(contactId)=>{

    }

    useEffect(async()=>{
        const res= await getContactList();
        setContacts(res);
    },[]);
    return (
        <div className='contactList-container'>
            {contacts.map((contact)=>(
                <div className='contacts' key={contact.id}>
                    <div className='contact-image'>
                        <img src={userIcon} alt="" />
                    </div>
                    <div className="contact-content">
                        <div className='contact-text'>
                            <p>
                                <span className="key">Name : </span>
                                <span className="value">{contact.name}</span>
                            </p>
                            <p>
                                <span className="key">Mobile No. : </span>
                                <span className="value"> {contact.phone}</span>
                            </p>
                        </div>
                        <div className='btn-container'>
                            <div className='update-delete-btn'>
                                <button className='update'>
                                    <img src={editLogo} alt="" />
                                </button>
                                <button className='delete'>
                                    <img src={deleteLogo} alt="" />
                                </button>
                            </div>
                            <div className='more-details-btn'>
                                <button>
                                    More Details...
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ContactList;