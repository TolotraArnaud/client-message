import React from 'react'

const Message = ({ content,className }) => {
  return (
    <div className={className}>
      <div className="messageInfo">
        {/* <img src="https://images.pexels.com/photos/19535151/pexels-photo-19535151/free-photo-of-rhume-neige-vacances-femme.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" /> */}
        
      </div>
      <div className="messageContent">
        <p>{content}</p>
        {/* <img src="https://images.pexels.com/photos/19535151/pexels-photo-19535151/free-photo-of-rhume-neige-vacances-femme.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" /> */}
      </div>
    </div>
  )
}

export default Message