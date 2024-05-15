import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function TodoList({key1}) {
  const [todos, setTodos] = useState([]);
  const [input,setInput]=useState("")
  const [input1, setInput1] = useState('');
  // const [button,setButton]=useState(true)

 


  const handleSubmit = async () => {

    try {
      let token= localStorage.getItem("token")
      let headers={
       "Authorization":`${token}`
      }
      await axios.post('https://node-backend-new-l72q.onrender.com/api/todo', { text: input1},{headers} );
     
    //  await axios.post( "http://localhost:5000/api/newTodo",{text:input1})
      setInput('');
    
    } catch (error) {
      console.error('Error adding todo item:', error);
    }
    // setButton(!button)
   
  };
 

  useEffect(() => {
    let token= localStorage.getItem("token")
    let headers={
     "Authorization":`${token}`
    }
    axios.get('https://node-backend-new-l72q.onrender.com/api/todo',{headers})
      .then(response => {
        setTodos(response.data);
      })
      .catch(error => {
        console.error('Error fetching todos:', error);
      });
  }, [todos]);


 
  const delete1=(id)=>{

    axios.delete(`https://node-backend-new-l72q.onrender.com/api/todo/${id}`)
    .then((res)=>{
      setTodos(prevTodos => prevTodos.filter(items => items._id !== id))
    })
    .catch((err)=>{
      return(
        console.log(err)
      )
    })

  }

  const update=(id,input)=>{
    axios.put(`https://node-backend-new-l72q.onrender.com/api/todo/${id}`,{text:input})
    .then((res)=>{
      return(
        setTodos(details=>details.map((item)=>{
          return(
             item._id==id ? input:todos
          )
        }))
      )
    })
    .catch((err)=>{
      return(
        console.log(err,"error occurred")
      )
    })
  }


  return (
  <>
    <div>
    <input
      type="text"
      value={input1}
      onChange={(e) => setInput1(e.target.value)}
      placeholder="Add a new todo"
    />
    <button onClick={handleSubmit}>Add</button>
  </div>
    <div className="todo-list-container"> {/* Apply container class */}
    <h1 className="todo-list-header">Todo List</h1> {/* Apply header class */}
    <ul>
       {todos?.map(todo => (
       <> <li className="todo-item" key={todo._id}>{todo.text}</li> <button onClick={()=>delete1(todo._id)} >Delete</button><input type='text'   onChange={(e)=>update(todo._id,e.target.value)} /> </> 
      ))} 
    </ul>
  </div>
  </>
  );
}

export default TodoList;
