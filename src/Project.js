import React, { useState } from 'react';
import axios from 'axios';
import GetTodo from './GetTodo'
import { useNavigate } from 'react-router-dom';

const AddToDoItem = () => {
  const [input, setInput] = useState('');
  const [button,setButton]=useState(true)
  const [input2,setInput2]=useState("")
  const [input3,setInput3]=useState("")
  const navigate=useNavigate()


  const handleSubmit = async () => {
    try {
      await axios.post('http://localhost:5000/api/todo', { text: input });
      setInput('');
      navigate("/displaytodo")
    } catch (error) {
      console.error('Error adding todo item:', error);
    }
    setButton(!button)
  };



  return (
    <>
 
 
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new todo"
      />
      <button onClick={handleSubmit}>Add</button>
    </div>
    <GetTodo key1={button}/></>
  );
};

export default AddToDoItem;

