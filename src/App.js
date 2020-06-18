import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Components/Header'
import AddTodo from './Components/AddTodo'
import SingleTodo from './Components/SingleTodo'
import About from './Components/About'
import {v4 as uuid} from 'uuid'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {

  const [todos,settodos] = useState([]);
  
  
  

  const addItem = (newtodo) => {

    const newItem = {

      id:uuid(),
      title:newtodo,
      completed:false

    }

    settodos([newItem,...todos]);
    
  }


  const del = (id) => {
       settodos([...todos.filter((todo)=> todo.id !== id)])
  }


  const completedTask = (id) => {
     settodos([...todos.map((todo) => {
       if(todo.id ===id){
         todo.completed = !todo.completed;
       }
      return todo;
     })])
  }

  console.log(todos);



  return (
   <div className='container'>

    <Router>

    <Header></Header>


      <Switch>



      <Route path='/about-me'>
        <About></About>
      </Route>
      
      <Route path='/'>
      <AddTodo addItem={addItem}></AddTodo>
        {
        
          todos.map((todo)=> <SingleTodo key={todo.id} todo={todo} del={del} completedTask={completedTask}></SingleTodo>)
        }

      </Route>

      
    

      </Switch>
    </Router>



     </div>
      
  );
}

export default App;
