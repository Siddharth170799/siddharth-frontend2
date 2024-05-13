import logo from './logo.svg';
import './App.css';
// import MyComponent from './Project';
import AddToDoItem from './Project';
import TodoList from './GetTodo';
import SignUp from './SignUp';
import SignIn from './SignIn';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (<>
          {/* <AddToDoItem/> */}
          {/* <TodoList/> */}
          {/* <SignUp/>
          <SignIn/>
          <TodoList/>
          <AddToDoItem/> */}
          <BrowserRouter>
          <Routes>
            <Route path="/" element={<SignUp/>}/>
            <Route path="/signin" element={<SignIn/>}/>
            <Route path="/addtodo" element={<TodoList/>}/>
            {/* <Route path="/displaytodo" element={<TodoList/>}/> */}
          </Routes>
          </BrowserRouter>
          </>
  );
}

export default App;
