import './App.css';
import React, {useState} from 'react';
import Toggle from './Toggle';

function App() {

const [lastMessage,setlastMessage] = useState([]);
const [message,setMessage] = useState('');
const [user, switchUser] = Toggle();


const handleMessage = () =>{
  if (message) {
    const nowtime = new Date().toLocaleTimeString();
    const messagetext = { text: message, time:nowtime, sender: user };
    setlastMessage([...lastMessage, messagetext]);
    setMessage('');
  }
}

  return (
    <div className="App">
      <h2>messenger</h2>
      <button className='toggle' onClick={switchUser}>
        change ({user ==='user1' ? 'user2' : 'user1'})
      </button>
      
      <div className='messages'>
        {lastMessage.map((messagetext,index) => (
          <div 
            key={index}
            className={`message-container ${
              messagetext.sender === 'user1' ? 'user1' : 'user2'
           }`} >
            <div>{messagetext.text}</div>
            <div className='time'>{messagetext.time}</div>
          </div>
        ))}
      </div>
      <div className='input'>
        <input 
          type="text"
          value={message}
          placeholder='Type your message!'
          onChange={(e) => setMessage(e.target.value)}/>
        <button onClick={handleMessage}>send</button>
      </div>
    </div>
  );
}

export default App;
