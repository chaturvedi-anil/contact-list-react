import React, {useState} from 'react';
import {useContact} from '../../context';
import './NewContact.scss';

const NewContact = () => {
  const {addNewContact} = useContact();

  const [formData, setFormData]=useState({
    name:"",
    phoneNumber:"",
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
    let addResponse= await addNewContact(formData);
    console.log("addResponnse : ", addNewContact);
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
        />
        <input 
          type="number" 
          placeholder="Enter Phone Number"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
        />
        <input 
          type="email" 
          placeholder="Enter Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <input 
          type="text" 
          placeholder="Enter username"
          name="username"
          value={formData.username}
          onChange={handleChange}
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