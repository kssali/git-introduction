import React from 'react'
import ContactCard from './ContactCard'

const ContactList = ({contact}) => {
    console.log(contact)
    
    
  const deleteConactHandler = (id) => {
    contact.getContactId(id);
  };
    
    const renterdcontactList=contact.map((contact)=>{
        return(
          <ContactCard contact={contact}
          clickHander={deleteConactHandler}
          key={contact.id}/>
        )
    })
  return (
    <div className="ui celled list">
     {renterdcontactList}
    
    </div>
  )
}

export default ContactList
