import { Button, TextField } from '@material-ui/core';
import { useEffect, useState } from 'react';
import './App.css';
import { db } from './firebase_config';
import firebase from "firebase";
import TodoListItem from './Todo';

function App() {

  const [todoInput, setTodoInput] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos();
  }, [])

  function getTodos() {
    db.collection("todos").onSnapshot(function (querySnapshot) {
      setTodos(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          todo: doc.data().todo,
          inprogress: doc.data().inprogress,
        }))
      );
    });
  }

  function addTodo(e) {
    e.preventDefault();
    db.collection("todos").add({
      inprogress: true,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      todo: todoInput,
    });

    setTodoInput("");
  }

  return (
    <div className="App">
      <div style={{ display: "flex",flexDirection: "column" ,justifyContent: "center" , alignItems: "center"}}>
        <h1>Adly Todos</h1>
        <form>
          <TextField
            id="standard-basic" 
            label="Write a Todo"
            value={todoInput}
            style={{ maxWidth: "300px", width: "90vw" }}
            onChange={(e) => setTodoInput(e.target.value)}
          />
          <Button type="submit" variant="contained" onClick={addTodo} style={{ display: "none" }}>
            Default
          </Button>
        </form>
        <div style={{ maxWidth: "300px", width: "90vw" }}>
          {todos.map((todo) => (
            <TodoListItem todo={todo.todo} inprogress={todo.inprogress} id={todo.id}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
