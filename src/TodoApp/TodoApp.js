import { useState, useRef, useEffect } from "react";
import {
  loadFromLocalStorage,
  saveInLocalStorage,
} from "../utils/localStorage";
import AddTodoItem from "./AddTodoItem";
import "./TodoApp.scss";
import TodoList from "./TodoList";

const TodoApp = () => {
  const initialTodoList = loadFromLocalStorage("todolist");
  const [todoList, setTodoList] = useState(initialTodoList || []);
  const inputRef = useRef(null);

  const addTodoToList = (e) => {
    e.preventDefault();

    // Get date and time
    const dateToday = new Date().toLocaleDateString();
    const timeNow = new Date().toLocaleTimeString();

    const todo = {
      todo: inputRef.current.value,
      dateTime: { date: dateToday, time: timeNow },
    };

    const newList = [todo, ...todoList];
    setTodoList(newList);
    saveInLocalStorage("todolist", newList);
    inputRef.current.value = "";
  };

  const removeTodo = (index) => () => {
    const newList = [...todoList].filter((todo, idx) => idx !== index);
    setTodoList(newList);
  };

  const editTodo = (index) => () => {
    const newList = [...todoList];
    const val = prompt("Edit todo", newList[index].todo);
    if (val != null) {
      newList[index].todo = val;
    }
    setTodoList(newList);
  };

  useEffect(() => {
    saveInLocalStorage("todolist", todoList);
  }, [todoList]);

  return (
    <div className="todo">
      <div className="add-todo-container">
        <h1>Todo App</h1>
        <AddTodoItem
          ref={inputRef}
          btnText="Add Todo"
          handleFormSubmit={addTodoToList}
        />
      </div>

      <TodoList
        todoList={todoList}
        editTodo={editTodo}
        removeTodo={removeTodo}
      />
    </div>
  );
};

export default TodoApp;
