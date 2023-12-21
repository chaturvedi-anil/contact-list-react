import React from 'react';
import { useNavigate } from 'react-router-dom';
import addContact from '../../assets/logos/addContactLogo.svg';  
import homeLogo from '../../assets/logos/homeLogo.svg';
import './Navbar.scss';
import { useContact } from '../../context';

const Navbar = () => {
  const navigate=useNavigate();
  const {isHomeActive, setHomeActive} = useContact();

  const handleAddNewContact = () => {
    if(isHomeActive){
      navigate('/new-contact');
    } else {
      navigate('/');
    }
    setHomeActive((prev)=>!prev);
  };

  return (
    <div className='header-wrapper'>
      <div className='heading'>
        <h1>Contact List</h1>
      </div>
      <div className="button-container">
        <button onClick={handleAddNewContact}> 
          {isHomeActive ? (
            <>
              <img src={addContact} alt="Add Contact" />
              <span>Add Contact</span>
            </>
          ) : (
            <>
              <img src={homeLogo} alt="Home" />
              <span>Home</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
