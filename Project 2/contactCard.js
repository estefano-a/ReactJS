const TheContactCard = ({ name, profilePic, email, phone }) => {
    return (
      <div>
        <div id="profileCard">
          <h1 id='user'>{name}</h1>
          <p id='email'>{email}</p>
          <img id='profilePic' src={profilePic} alt='Profile' />
          <p id='phone'>{phone}</p>
        </div>
      </div>
    );
  };
  
  export default TheContactCard;
  