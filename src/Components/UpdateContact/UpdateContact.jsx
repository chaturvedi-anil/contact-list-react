import React ,{useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {useParams} from 'react-router-dom';
import '../NewContact/NewContact.scss';
import { useContact } from '../../context';

const UpdateContact = () => {
  const {id} = useParams();
  const {updateContact , isHomeActive, setHomeActive} = useContact();
  let {setContacts, contacts} = useContact();
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
    let updateResponse = await updateContact(id,formData);
    if(updateResponse.status === 200)
    {
      let updateCont = contacts.map((contact)=>{
        if(contact.id == id){
          return {
            id: id,
            name: formData.name,
            phone: formData.phone,
            email:  formData.email,
            username: formData.username,
            website:  formData.website,
            company: formData.company,
            city: formData.city,
            zipcode: formData.zipcode
          }
        } else {
          return contact;
        }

      });

      setContacts(updateCont);
    } else {
      
    }
    setHomeActive((prev)=> !prev);
    navigate('/');
  }

  const handleCancel =()=>{
    setHomeActive((prev)=> !prev);
    navigate('/');
  }
  return (
    <div className='new-contact-form-wrapper'>
      <h1>
        Update Contact
      </h1>
      <form onSubmit={handleSubmit} className="">
        <input 
          id="name"
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
          required
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
            Update Contact
          </button>
          <button type='reset' className="reset" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}

export default UpdateContact