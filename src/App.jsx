import {Fragment, useState} from 'react';
import './App.scss';
import ContactList from './Components/ContactList/ContactList';
import addContact from './assets/logos/addContactLogo.svg';  
import homeLogo from './assets/logos/homeLogo.svg';
import NewContact from './Components/NewContact/NewContact';

function App() {
  const [isNewContact, setIsNewContact] = useState(true);
  return(
    <Fragment>
      <div className='header-wrapper'>
        <div className='heading'>
          <h1>Contact List</h1>
        </div>
        <div className="button-container">
          <button 
            onClick={
              ()=>{
                    setIsNewContact((prev => (!prev)))
                  }
            }
          >
            {isNewContact ? 
              <>
                <img src={homeLogo} alt="" />
                <span>Home</span>
              </>
              :
              <>
                <img src={addContact} alt="" />
                <span>Add Contact</span>
              </>
            }
          </button>
        </div>
      </div>
      
      <div className='contacts-wrapper'>
        {console.log('isNewContact ', isNewContact)}
        { isNewContact ? <NewContact /> : <ContactList />}
      </div>
    </Fragment>
  )
}

export default App;
