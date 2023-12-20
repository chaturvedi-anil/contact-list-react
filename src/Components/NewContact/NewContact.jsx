import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import './NewContact.scss';

import { useContact } from '../../context';

const NewContact = ({stateVal}) => {
  const {isNewContactActive, setNewContactActive} = stateVal;
  const {addNewContact} = useContact();
  let {setContacts} = useContact();
  const navigate = useNavigate();

  const [formData, setFormData]=useState({
    name:"",
    phone:"",
    email:"",
    username:"",
    website:"",
    company: "",
    city: "",
    zipcode: ""
  });

  const handleChange=(e)=>{
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit= async (e)=>{
    e.preventDefault();
    let addResponse = await addNewContact(formData);
    if(addResponse.status === 201){
      setContacts((prev)=> [formData, ...prev]);
    }

    setNewContactActive((prev)=> !prev);
    navigate('/');
  }
  return (
    <div className='new-contact-form-wrapper'>
      <h1>
        Add New Contact
      </h1>
      <form onSubmit={handleSubmit} className="">
        <input 
          type="text" 
          placeholder="Enter Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input 
          type="number" 
          placeholder="Enter Phone Number"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <input 
          type="email" 
          placeholder="Enter Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input 
          type="text" 
          placeholder="Enter username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <input 
          type="text" 
          placeholder="Enter website"
          name="website"
          value={formData.website}
          onChange={handleChange}
        />
        <input 
          type="text" 
          placeholder="Enter Company"
          name="company"
          value={formData.company}
          onChange={handleChange}
        />
        <input 
          type="text" 
          placeholder="Enter city"
          name="city"
          value={formData.city}
          onChange={handleChange}
        />
        <input 
          type="number" 
          placeholder="Enter zipcode"
          name="zipcode"
          value={formData.zipcode}
          onChange={handleChange}
        />

        <div className='btn-container'>
          <button type='submit' className="submit">
            Add Contact
          </button>
          <button type='reset' className="reset">
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}

export default NewContact