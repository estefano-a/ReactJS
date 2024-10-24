const TheContactCard = ({ name, profilePic, email, phone, onDelete }) => {
  return (
    <div>
      <div id="profileCard">
        <h1 id='user'>{name}</h1>
        <p id='email'>{email}</p>
        <img id='profilePic' src={profilePic} alt='Profile' />
        <p id='phone'>{phone}</p>
        <button id='delete' onClick={onDelete}>Delete</button>  {/* Button to delete contact */}
      </div>
    </div>
  );
};

export default TheContactCard;
