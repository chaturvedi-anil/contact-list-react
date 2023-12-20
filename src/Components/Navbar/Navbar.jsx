import React from 'react';
import { Link } from 'react-router-dom';
import addContact from '../../assets/logos/addContactLogo.svg';  
import homeLogo from '../../assets/logos/homeLogo.svg';
import './Navbar.scss';

const Navbar = ({ stateVal }) => {
  const { isNewContactActive, setNewContactActive } = stateVal;

  const handleAddNewContact = () => {
    setNewContactActive((prev) => !prev);
  };

  return (
    <div className='header-wrapper'>
      <div className='heading'>
        <h1>Contact List</h1>
      </div>
      <div className="button-container">
        <button onClick={handleAddNewContact}> 
          {isNewContactActive ? (
            <Link to="/">
              <img src={homeLogo} alt="Home" />
              <span>Home</span>
            </Link>
          ) : (
            <Link to="/new-contact">
              <img src={addContact} alt="Add Contact" />
              <span>Add Contact</span>
            </Link>
          )}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
