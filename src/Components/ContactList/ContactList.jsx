import React, {useState, useEffect} from 'react';
import './ContactList.scss';
import userIcon from '../../assets/logos/usersIcon.png';
import deleteLogo from '../../assets/logos/deleteLogo.svg';
import editLogo from '../../assets/logos/editLogo.svg';
import { useContact } from '../../context.jsx';

const ContactList = () => {
    const {getContactList, deleteContact ,contacts, setContacts} = useContact();
    const [showContactDetails, setShowContactDetails] = useState(false);
    let showContact=[];

    const handleContactDetails=(contactId)=>{
        setShowContactDetails(true);
        showContact=contacts.filter((contact)=> contactId===contact.id);
        console.log("showContact : ", showContact);
    }   

    const handleUpdateContact=(contactId)=>{
        console.log("update id : ", contactId);
    }

    const handleDeleteContact= async(contactId)=>{
        let res= await deleteContact(contactId);
        console.log('delete response : ', res);
        if(res.status === 200){
            let newContacts= contacts.filter((contact) => contact.id !== contactId);
            setContacts(newContacts);
        }
    }

    useEffect(async()=>{
        const res= await getContactList();
        setContacts(res);
    },[setContacts]);
    return (
        <div className='contactList-container'>
            {console.log("contact List : ", contacts)}
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
                                <button className='update' onClick={()=>{handleUpdateContact(contact.id)}}>
                                    <img src={editLogo} alt="" />
                                </button>
                                <button className='delete' onClick={()=>{handleDeleteContact(contact.id)}}>
                                    <img src={deleteLogo} alt="" />
                                </button>
                            </div>
                            <div className='more-details-btn'>
                                <button onClick={()=>{handleContactDetails(contact.id)}}>
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