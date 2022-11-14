
import AddContact from "./Component/AddContact"
import ContactList from "./Component/ContactList"
import './App.css';
import { v4 as uuid } from "uuid";
import Header from "./Component/Header";
import { useEffect, useState } from "react";

function App() {
const LOCAL_STORAGE_KEY="contacts"
 const[contacts,setContacts]=useState(
  JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []
 )
  const addContactHandler=(contact)=>{
    console.log(contact)
    setContacts([...contacts,{id:uuid(),...contact}])
 }
//  useEffect(() => {
//     const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
//     if (retriveContacts) setContacts(retriveContacts);
//   }, []);



const removeContactHandler = (id) => {
  const newContactList = contacts.filter((contact) => {
    return contact.id !== id;
  });

  setContacts(newContactList);
};

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);
  return (
    <div className="ui container">
   <Header/>
    <AddContact addContactHandler={addContactHandler}/>
    <ContactList contact={contacts} getContactId={removeContactHandler}/>

    </div>
       
  );
}

export default App;
