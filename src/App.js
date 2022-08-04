import './App.css';
import Header from './MyComponents/Header';
import { Todos } from './MyComponents/Todos';
import { Footer } from './MyComponents/Footer';
import { AddToDo } from './MyComponents/AddToDo';
import { About } from './MyComponents/About';
import React, { useState, useEffect } from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
// if `default function` isn't used and rather `arrow function` is used, we should use curly braces to import components

function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null){
    initTodo = [];
  }
  else{
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo)=>{
    console.log("I am on delete of todo", todo);
    // Deleting this way in React does not work
    // let index = todos.indexOf(todo);
    // todos.splice(index, 1);

    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const addTodo = (title, desc)=>{
      console.log("I am adding this todo", title, desc);

      let sno;
      if (todos.length===0) {
        sno = 0;
      }
      else{
        sno = todos[todos.length-1].sno + 1;
      }
      //Here, the idea is, todos[index].sno + 1, since the length of todos array or in JS `todos.length` is 3, and we have to target the sno of the 2nd index to add 1, we have subtracted 1 from the length number to get the index number which is [todos.length-1] and placed it at the place of index
      const myTodo = {
        sno : sno,
        title : title,
        desc : desc,
      };
      setTodos([...todos, myTodo]);
      console.log(myTodo);
  }

  const [todos, setTodos] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return (
    <>
    <BrowserRouter>
      <Header title="MyTodosList" searchBar={true}/>
      <Switch>
        <Route exact path="/" render = {()=>{
          return(
            <>
              <AddToDo addTodo={addTodo}/>
              <Todos todos={todos} onDelete={onDelete}/>
            </>)
        }}/>
        <Route exact path='/about' component={About} />
      </Switch>
      <Footer/>
    </BrowserRouter>
    </>);
}
 //if boolean value of searchBar  is set to false, searchBar will be gone
export default App;
