import React from 'react'
import Cam from "../img/cam.png"
import Add from "../img/add.png"
import More from "../img/more.png"
import Messages from "./Messages"
import Input from "./Input"
// import { sendPrivateMessage } from '../app/Chat'

const Chat = ({ messagesList, handleSendMessage }) => {
  
  return (
    <div className='chat'>
      <div className="chatInfo">
        <span>Jean</span>
        <div className="chatIcons">
          <img src={Cam} alt="" />
          <img src={Add} alt="" />
          <img src={More} alt="" />
        </div>
      </div>
      <Messages messages={messagesList} />
      <Input interlocuteur="miantsa" sendPrivateMessage={handleSendMessage}/>
    </div>
  )
}

export default Chat