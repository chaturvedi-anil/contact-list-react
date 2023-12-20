import {useEffect, useState} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.scss';

import Navbar from './Components/Navbar/Navbar';
import ContactList from './Components/ContactList/ContactList';
import NewContact from './Components/NewContact/NewContact';
import UpdateContact from './Components/UpdateContact/UpdateContact';

import { useContact } from './context';

function App() {
  const {getContactList} = useContact();
  const [isNewContactActive, setNewContactActive] = useState(false);
  let {setContacts} = useContact();

  useEffect(async()=>{
      const res= await getContactList();
      setContacts(res);
  },[]);

  return(
    <Router>
      <Navbar stateVal={{isNewContactActive, setNewContactActive}} />
      <div className='contacts-wrapper'>
          <Routes>
            {
              isNewContactActive ?  
              <Route path='/new-contact' element={<NewContact stateVal={{isNewContactActive, setNewContactActive}}/>} />
              : 
              <Route path='/' element={<ContactList />}/>
            }
            <Route path='/update-contact' element={<UpdateContact />}/>
          </Routes>
      </div>
    </Router>
  )
}

export default App;
