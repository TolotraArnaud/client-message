import Stomp from 'webstomp-client';
import SockJS from "sockjs-client";
import { callPost } from "./Api";



// $(document).ready(function() {
//     console.log('Index page ready');
//     connect();
    
//     $('#send').click(function () {
//         sendMessage();
//     });

//     $('#send-private').click(function () {
//         sendPrivateMessage();
//     });
// });

export function connect(idmessageuser, updateMessageList) {
    var socket = new SockJS('http://localhost:8080/ws-voiture?idmessageuser='+idmessageuser);
    var stompClient = Stomp.over(socket);
    stompClient.debug = function () {};
    stompClient.connect({}, function (message) {
        
        stompClient.subscribe('/user/topic/private-messages', function (message) {
            const parsedMessage = JSON.parse(message.body).content;
            console.log(parsedMessage);
            console.log("ajout message from other user");
            updateMessageList(parsedMessage);
        });
    });
}
// "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkYXRhIHVzZXIiLCJpZGVudGlmaWFudCI6ImplYW5AZ21haWwuY29tIiwibm9tIjoiSmVhbiBCYXB0aXN0ZSIsImV4cCI6MTcwNTkyNjk2NX0.YAkt9PFfkRdGk2voTxf4oeumxy1ghWXOZj8GCVR8F_K23r_wZDsR1gYRG1-tI72wZg6VZUYuPXXrnQ3j5GKlrw"
export function getMessageFilter(message,idsender) {
    if(message.sender === idsender){
        return message;
    }
    //$("#messages").append("<tr><td>"+message+"</td></tr>");
}

export function sendPrivateMessage(idreceiver, message) {
    let data = {
        'messageContent' : message
    }
    // stompClient.send("/ws/private-message", {},JSON.stringify(data));
    callPost("http://localhost:8080/ws/sendmessages/"+idreceiver, JSON.stringify(data), false);
}