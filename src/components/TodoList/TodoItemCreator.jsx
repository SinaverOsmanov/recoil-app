import React, { useId, useState } from "react";
import { useSetRecoilState } from "recoil";
import { todoListState } from "./TodoListState";

export function TodoItemCreator() {
  const [inputValue, setInputValue] = useState("");
  const setTodoList = useSetRecoilState(todoListState);
  const uniqueId = useId();

  const addItem = () => {
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      { id: uniqueId, text: inputValue, isCompleted: false },
    ]);
    setInputValue("");
  };

  const onChange = ({ target: { value } }) => {
    setInputValue(value);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={onChange} />
      <button onClick={addItem}>Add</button>
    </div>
  );
}
