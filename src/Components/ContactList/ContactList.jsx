import React, {useEffect, useState} from 'react';
import Table from '../Table/Table'

function ContactList() {
  
  return (
    <div className="container">
      <div className="heading-container">
        <h1>Contact List</h1>
        <button>X</button>
      </div>
      
      {/*  */}
      <div>
        <Table />
      </div>
    </div>
  )
}

export default ContactList