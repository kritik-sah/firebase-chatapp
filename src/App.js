import {IconButton, FormControl, Input, InputLabel } from '@material-ui/core';

import React , { useEffect, useState } from 'react';
import './App.css';
import Message from './components/Message';
import firebase from 'firebase'
import db from './components/firebase'
import FlipMove from 'react-flip-move';
import Nav from './components/Nav'
import Text from './components/goku'

// icons
import SendIcon from '@material-ui/icons/Send';


function App() {
  const [input , setInput] = useState("");
  const [messages, setMessages] = useState([])
  const [user, setUser] = useState("")

  useEffect(() => {
    db.collection('messages').orderBy('timestamp' , 'asc').onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => ({id : doc.id , message : doc.data()})))
    })
  } , []);

  useEffect(() => {
    let myuser = prompt("*please enter your name?" ,'guest')
    if (myuser === null || myuser === ""){
      setUser('GUEST');
    }else {
      setUser(myuser.toUpperCase());
    }
    
  }, []);

  const sendMessage = (event) => {
    db.collection("messages").add({
      message : input,
      user : user ,
      timestamp : firebase.firestore.FieldValue.serverTimestamp()
    })

    setInput("");
    event.preventDefault();
    window.scrollTo(0, 99999999999999 , 'smooth') ;
    
  }
  return (
    <>
    <div className="App">
      <Nav />
      <div className="spacer"></div>
      <div className='container'>
      <h1>hello & Welcome to Fire🔥 chat App.</h1>
      <p>A place to paste some important links, code or to chill out! 😁</p>
      <Text />
      <h2>WELCOME {user}</h2>
      </div>
      
      <div className="m-auto">
      <form className="app_form">
      <FormControl>
        <InputLabel>Type your message here!</InputLabel>
        <Input value={input} onChange={event => setInput(event.target.value)}/>
      </FormControl>

      <IconButton disabled={!input} type="submit" onClick={sendMessage} variant="outlined" color="primary">
      <SendIcon />
      </IconButton>
      </form>
      </div>
      
      <div className="container-message">
      <FlipMove>
    {
      messages.map(({id , message}) => (
        <Message key={id} user={user} message={message}/>
        
      ))
    }
</FlipMove>
      </div>

    </div>
    </>
  );
}

export default App;
