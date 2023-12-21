import React from 'react';
import {useParams} from 'react-router-dom';
import {useContact} from '../../context';
import userIcon from '../../assets/logos/usersIcon.png';
import './ContactDetails.scss';

const ContactDetails = () => {
    const {id} = useParams();
    const {contacts} = useContact();

    // getting single contact 
    const detailsContact = contacts.filter((contact)=>contact.id == id);

    return (
        <div className="contact-deatils-container">
            <div className="details">
                <div className='contact-image'>
                    <img src={userIcon} alt="" />
                </div>
                <div className="contact-content">
                    <p>
                        <span className="key">Name : </span>
                        <span className="value">{detailsContact[0].name} </span>
                    </p>
                    <p>
                        <span className="key">Phone Number : </span>
                        <span className="value">{detailsContact[0].phone} </span>
                    </p>
                    <p>
                        <span className="key">Email : </span>
                        <span className="value">{detailsContact[0].email} </span>
                    </p>
                    <p>
                        <span className="key">Username : </span>
                        <span className="value">{detailsContact[0].username} </span>
                    </p>
                    <p>
                        <span className="key">Website : </span>
                        <span className="value">{detailsContact[0].website} </span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ContactDetails;