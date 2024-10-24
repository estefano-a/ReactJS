import './App.css';
import React, { useState } from 'react';
import TheContactCard from './contactCard.js';

const App = () => {
  const [contactList, setContactList] = useState([
    {
      name: "Maria Brown",
      profilePic: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png", 
      email: "mariabrown@gmail.com",
      phone: "724-839-8182"
    },
    {
      name: "John Doe",
      profilePic: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png", 
      email: "johndoe@gmail.com",
      phone: "724-837-8839"
    }
  ]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [profilePic, setProfilePic] = useState("");

  const addContact = (e) => {
    e.preventDefault();
    const newContact = {
      name: name,
      profilePic: profilePic || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
      email: email,
      phone: phone
    };
    setContactList([...contactList, newContact]); 
    setName(""); 
    setEmail("");
    setPhone("");
    setProfilePic("");
  };

  const deleteContact = (index) => {
    const updatedContacts = contactList.filter((_, i) => i !== index);
    setContactList(updatedContacts);
  };

  return (
    <div>
      {contactList.map((contact, index) => (
        <TheContactCard 
          key={index} 
          name={contact.name} 
          profilePic={contact.profilePic} 
          email={contact.email} 
          phone={contact.phone} 
          onDelete={() => deleteContact(index)}  
        />
      ))}

      <form onSubmit={addContact}>
        <input 
          type="text" 
          placeholder="Name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
        />
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        <input 
          type="tel" 
          placeholder="Phone" 
          value={phone} 
          onChange={(e) => setPhone(e.target.value)} 
          required 
        />
        <button type="submit">Add Contact</button>
      </form>
    </div>
  );
};

export default App;
