import './App.css';
import TheContactCard from './contactCard.js';

const contactList = [{
  name: "Maria Brown",
  profilePic: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png", 
  email: "mariabrown@gmail.com",
  phone: "724-839-8182"
}];

const App = () => {
  return (
    <div>
      {contactList.map((contact, index) => (
        <TheContactCard 
          key={index} 
          name={contact.name} 
          profilePic={contact.profilePic} 
          email={contact.email} 
          phone={contact.phone} 
        />
      ))}
    </div>
  );
};

export default App;
