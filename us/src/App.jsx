import logo from './logo.svg';
import './App.css'; 
import Main from './pages/Main/Main';
import { Route,Routes } from 'react-router-dom';
import AddTodo from './pages/AddTodo/AddTodo';
import Header from './components/Header/Header';
import { useState } from 'react';

function App() { 
  const [todos, setTodos] = useState([]) 
  console.log(todos)
  return (
    <> 
    <div className="App">  
    <Header/> 
    </div>
    <Routes>
      <Route path='/'element={<Main todos={todos}/>}/>
      <Route path='/record' element={<AddTodo todos={todos} setTodos={setTodos}/>}/>
      <Route path='*' element=''/>
    </Routes> 
    </>
   
  );
}

export default App;
