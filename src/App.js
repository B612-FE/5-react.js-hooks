import './App.css';
import React, {useState} from 'react';
import Toggle from './Toggle';

function App() {

const [isToggle,setIsToggle] = Toggle(false);

const [lastMessage,setlastMessage] = useState([]);

const [message,setMessage] = useState('');


const handleMessage = () =>{
  if (message) {
    const messagetext = { text: message };
    setlastMessage([...lastMessage, messagetext]);
    setMessage('');
  }
}

  return (
    <div className="App">
      <h2>messenger</h2>
      <button className='toggle' onClick={setIsToggle}>
        change
      </button>
      <div className='messages'>
        {lastMessage.map((messagetext,index) => (
          <div className='text' key={index}>
            <div>{messagetext.text}</div>
          </div>
        ))}
      </div>
      <div className='input'>
        <input 
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}/>
        <button onClick={handleMessage}>send</button>
      </div>
    </div>
  );
}

export default App;
