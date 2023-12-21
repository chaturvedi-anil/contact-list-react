import {useEffect, useState} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.scss';

import Navbar from './Components/Navbar/Navbar';
import ContactList from './Components/ContactList/ContactList';
import NewContact from './Components/NewContact/NewContact';
import UpdateContact from './Components/UpdateContact/UpdateContact';

import { useContact } from './context';
import ContactDetails from './Components/ContactDetails/ContactDetails';

function App() {
  const {getContactList,isHomeActive, setContacts} = useContact();
  const [loading, setLoading] = useState(true);

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
