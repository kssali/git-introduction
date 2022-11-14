import React from "react";
import { BsTrash } from "react-icons/bs";
import user from "../images/user.png"

const ContactCard = ({ contact }) => {
  const { id, name, email } = contact;
  return (
   
    <div className="item">
     
       <hr/>
      <img className="ui avatar image" src={user} alt="user" />
      <div className="content" key={id}>
        <div className="header">{name}</div>
        <div>{email}</div>
      </div>

      <div className="trash">
        {" "}
        <BsTrash  onClick={() => contact.clickHander(id)}/>
      </div>
    </div>
  );
};

export default ContactCard;
