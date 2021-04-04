import './App.css';
import { Button, TextField } from '@material-ui/core';
import React,{useEffect, useState } from 'react';
import Todo from './Todo';
import firebase from 'firebase';
import db from './firebase';
function App() {
  const [todos,setTodos] = useState([]);
  const [input,setInputs] = useState('');
  console.log(input);

  const addToDo = (event ) => {
    event.preventDefault();
   // console.log(input);
   //setTodos([...todos,input]);

    db.collection('todoss').add(
      {
          todo: input,
          timestamp: firebase.firestore.FieldValue.serverTimestamp() 
      }
    );
    setInputs('');
  }

  //on app loads it need to fetch data 

  useEffect(()=>
  {
    //
      db.collection('todoss').orderBy('timestamp','desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc =>({ id: doc.id,todo: doc.data().todo })))
    });
  },[]);

  return (
    <div className="App">
     <h1>Hello Welcome to My Chat Room !</h1>
     <form>
     <TextField value={input} onChange={ event => setInputs(event.target.value)} label="Enter Message" variant="outlined" className="texfile" multiline="true"/>
     <Button disabled= {!input} onClick={addToDo} type="submit" color="primary" variant="contained" className="btn">Send Message</Button>
     </form>
     <ul>
       { todos.map(todo => (
         <Todo text={todo} />
        // <li>{todo}</li>
       ))}
     </ul>
    </div>
  );
}

export default App;
