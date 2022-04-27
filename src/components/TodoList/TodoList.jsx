import React from "react";
import { useRecoilValue } from "recoil";
import { TodoItem } from "./TodoItem";
import { TodoItemCreator } from "./TodoItemCreator";
import { TodoListFilters } from "./TodoListFilters";
import { filteredTodoListState } from "./TodoListState";
import { TodoListStats } from "./TodoListStats";

export function TodoList() {
  const TodoList = useRecoilValue(filteredTodoListState);

  return (
    <>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />
      {TodoList.map((todo) => (
        <TodoItem key={todo.id} item={todo} />
      ))}
    </>
  );
}
