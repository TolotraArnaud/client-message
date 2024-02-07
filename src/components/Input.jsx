import React, { useState } from 'react'
import Img from "../img/img.png"
import Attach from "../img/attach.png"
const Input = ({interlocuteur, sendPrivateMessage = () => {}}) => {
  const [message, setMessage] = useState('');
  function handleInput(e) {
    setMessage(e.target.value);
    // console.log(e.target.value);
  }

  const handleSendMessage = () => {
    sendPrivateMessage(interlocuteur, message);
    setMessage(''); // Efface le champ de message après l'envoi.
  };
  return (
    <div className='input'>
      <input type="text" value={message} onChange={handleInput} placeholder='Ecrivez quelque chose...'/>
      <div className="send">
        <img src={Attach} alt="" />
        
        <label htmlFor="file">
          <img src={Img} alt="" />
        </label>
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  )
}

export default Input