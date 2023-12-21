import {useNavigate} from 'react-router-dom';
import {toast} from 'react-toastify';

import './ContactList.scss';

// importing all the logo used in app
import userIcon from '../../assets/logos/usersIcon.png';
import deleteLogo from '../../assets/logos/deleteLogo.svg';
import editLogo from '../../assets/logos/editLogo.svg';

import { useContact } from '../../context';

const ContactList = () => {

    const navigate=useNavigate();
    const {deleteContact} = useContact();
    let {contacts, setContacts, setHomeActive} = useContact();

    const handleContactDetails = (contactId)=>{
        setHomeActive((prev)=>!prev);
        navigate(`/contact-details/${contactId}`);
    }   

    const handleUpdateContact = (contactId) => {
        setHomeActive((prev)=>!prev);
        navigate(`/update-contact/${contactId}`);
    }

    const handleDeleteContact = async(contactId)=>{
        let deleteResponse = await deleteContact(contactId);
        if(deleteResponse.status === 200)
        {
            const newContact= contacts.filter((contact)=> contact.id !== contactId);
            setContacts(newContact);
            toast.success("Contact Deleted Successfully", {autoClose:5000});
        } else {
            toast.error(deleteResponse, {autoClose:5000});
        }
    }
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