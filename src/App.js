import { Button , FormControl, Input, InputLabel } from '@material-ui/core';

import React , { useEffect, useState } from 'react';
import './App.css';
import Message from './components/Message';
import firebase from 'firebase'
import db from './components/firebase'

// icons
import SendIcon from '@material-ui/icons/Send';


function App() {
  const [input , setInput] = useState("");
  const [messages, setMessages] = useState([])
  const [user, setUser] = useState("")

  useEffect(() => {
    db.collection('messages').orderBy('timestamp' , 'asc').onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => doc.data()))
    })
  } , []);

  useEffect(() => {
    setUser(prompt("please enter your name?"))
  }, []);

  const sendMessage = (event) => {
    db.collection("messages").add({
      message : input,
      user : user ,
      timestamp : firebase.firestore.FieldValue.serverTimestamp()
    })

    setInput("");
    event.preventDefault();
  }
  return (
    <div className="App">
      <h1>hello & Welcome to Fire🔥 chat App.</h1>
      <h2>WELCOME {user}</h2>

      <form>
      <FormControl>
        <InputLabel>Type your message here!</InputLabel>
        <Input value={input} onChange={event => setInput(event.target.value)}/>
      </FormControl>
      <Button disabled={!input} type="submit" onClick={sendMessage} variant="outlined" color="primary"><SendIcon /></Button>
      </form>

    {
      messages.map(message => (
        <Message user={user} message={message}/>
      ))
    }

    </div>
  );
}

export default App;
