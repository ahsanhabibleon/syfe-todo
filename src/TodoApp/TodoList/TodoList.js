import React from "react";
import Button from "../../Components/Button/Button";
import "./TodoList.scss";

const TodoList = (props) => {
  const { todoList, editTodo, removeTodo } = props;

  return (
    <ul className="list-of-todos">
      <li>
        <h4 className="todo-text">Todos</h4>
        <h4 className="created-at">Created at</h4>
        <h4>Actions</h4>
      </li>
      {todoList.length ? (
        todoList.map((todoItem, index) => {
          const {
            todo,
            dateTime: { date, time },
          } = todoItem;
          return (
            <li key={index}>
              <span className="todo-text">
                {index + 1}. {todo}
              </span>
              <span className="created-at">
                {date}@{time}
              </span>
              <div>
                <Button text="Edit" isPrimary onClick={editTodo(index)} />
                <Button text="Remove" isDanger onClick={removeTodo(index)} />
              </div>
            </li>
          );
        })
      ) : (
        <span className="no-todos">
          *You don't have any dotos yet. Please add one to proceed.
        </span>
      )}
    </ul>
  );
};

export default TodoList;
