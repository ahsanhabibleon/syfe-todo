import React, { forwardRef } from "react";
import Button from "../../Components/Button/Button";
import "./AddTodoItem.scss";

const AddTodoItem = forwardRef((props, ref) => {
  const { btnText, handleFormSubmit } = props;
  return (
    <form onSubmit={handleFormSubmit} className="add-todo">
      <input ref={ref} />
      <Button type="submit" text={btnText} isPrimary />
    </form>
  );
});

export default AddTodoItem;
