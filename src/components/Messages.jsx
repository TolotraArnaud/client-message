import React from 'react'
import Message from "./Message"


const Messages = ({ messages }) => {
  
  return (
    <div className='messages'>
        {messages.map((message, index) => (
          
          <Message key={index} className={message.owner ? "message owner" : "message"} content={message.content}/>
        ))}
    </div>
  )
}

export default Messages