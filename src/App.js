import { useState, useEffect } from 'react';
import { collection, getDocs, onSnapshot, addDoc } from "firebase/firestore"; 
import { db } from "./firebase"
import './App.css';

function App() {

  const [messages, setMessages] = useState([]);
  const [text, setText] = useState('');
  const user = 'User ' + Math.floor(Math.random() *100);


  useEffect( () => {
    const getData = async () => {
      const querySnapshot = await getDocs(collection(db, "messages"));
      //  onSnapshot(collection(db, "messages"), (collection) => {
      //   console.log(collection);
      const currentMessages = querySnapshot.docs.map(doc => {
        const obj = {
          id: doc.id,
          ...doc.data(),
        };
        return obj;
      });
      console.log(currentMessages);
      setMessages(currentMessages);
    }
    getData()
  },[]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newMessage = {
      user,
      text,
    };
    console.log(newMessage);
    addDoc(collection(db, "messages"), newMessage);
    setText("");
  }

  return (
    <div className="App">
      <h1>Hello guys</h1>
      <form onSubmit={handleSubmit}>
      <input 
      type={text} 
      onChange={(e) => setText(e.target.value)}/>
      </form>
      <ul>
       {messages.map((message, index) => (
         <li key={index}>
         <h4>{message.user}</h4>
         <p>{message.text}</p>

         </li>
       ))} 
      </ul>
    </div>
  );
}

export default App;
