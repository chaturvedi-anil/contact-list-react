import {useEffect, useState} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.scss';

import {Navbar, NewContact, ContactList, ContactDetails, UpdateContact} from './Components/index';

import { useContact } from './context';


function App() {
  const {getContactList,isHomeActive, setContacts} = useContact();

  // managing state for loading state 
  const [loading, setLoading] = useState(true);

  // getting contact list
  useEffect(async()=>{
      const res= await getContactList();
      setContacts(res);
      setLoading(false);
  },[]);

  return(
    <Router>
      <Navbar />
      {loading ? 
        <h1 className='loadingText'>Fetching Contact List...</h1> 
        :
        <div className='contacts-wrapper'>
          <Routes>
            {
              isHomeActive ? 
              <Route path='/' element={<ContactList />}/> 
              :
              <Route path='/new-contact' element={<NewContact />} />
            }
            <Route path='/update-contact/:id' element={<UpdateContact />}/>
            <Route path='/contact-details/:id' element={<ContactDetails />} />
          </Routes>
        </div>
      }
    </Router>
  )
}

export default App;
