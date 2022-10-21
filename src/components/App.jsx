import React, { useState, useEffect } from 'react';
import Form from './Form/Form';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';


const App = () => {
  
  const[contacts, setContacts] = useState([
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ])
  const[filter, setFilter]=useState('')
 
  
   useEffect(()=>{
     if (!localStorage.getItem('contacts')) {
      
      return;
    }
     setContacts( JSON.parse(localStorage.getItem('contacts')));
     
  },[]) 

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  },[contacts])
 
      

  const addContacts = (data) => {
    
    let names = contacts.map((contact) => contact.name.toLowerCase());

    names.includes(data.name.toLowerCase())
      ? alert(`${data.name} is already in contact`)
      : setContacts([data, ...contacts]);
    console.log(names)
  };

  const deleteContacts = (contactId) => {
    setContacts(contacts.filter((contact) => contact.id !== contactId));
  };

  const changeFilter = (event) => {
    setFilter( event.currentTarget.value );
  };

  
  const getVisibleContacts = () => {
    const filterNormalized = filter.toLowerCase();

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filterNormalized)
    );
  };

  

    return (
      <div>
        <Form onSubmit={addContacts} />
        <Filter filter={filter} changeFilter={changeFilter} />
        <Contacts
            contacts={getVisibleContacts()}
            onContactDelete={deleteContacts}
          />
     </div>
    );
  
}

export default App;
