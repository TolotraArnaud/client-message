import React, { useEffect, useState } from 'react'
import SideBar from '../components/Sidebar'
import Chat from '../components/Chat'
import { connect,sendPrivateMessage } from '../app/Chat'

const Home = () => {
  const [messagesList, setMessagesList] = useState([]);

  const updateMessageList = (newMessage) => {
    //console.log("========================== Liste message : ", messagesList);
    setMessagesList((old_message) => [...old_message, { sender: 'userhafa', content: newMessage, owner: false}]);
    //console.log("========================== Liste message : ", messagesList);
  };

  //useEffect(() => { console.log(messagesList) }, [messagesList]);

  useEffect(()=> { connect('tolotra', updateMessageList); }, []);
  
  // Notification.requestPermission().then((permission) => {
  //   if (permission === "granted") {
  //     new Notification("Nouveau message", {
  //       body: "message",
  //     });
  //   }
  // });
  const handleSendMessage = (interlocuteur, message) => {
    sendPrivateMessage(interlocuteur, message);

    setMessagesList((old_message) => [...old_message, { sender: 'tolotra', content: message, owner: true}]);
  }

  return (
    <div className='home'>
        <div className="container">
            <SideBar/>
            <Chat messagesList={messagesList} handleSendMessage={handleSendMessage}/>
        </div>
    </div>
  )
}

export default Home