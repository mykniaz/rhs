import React from "react";

import TodoListItem from './TodoListItem'

const TodoList = () => {
  const items = [
    'first',
    'second',
    'third',
  ];

  const listItems = items.map((item, index) =>
    <li key={ index }>
      <TodoListItem text={ item }/>
    </li>
  );

  return (
    <ul>
      { listItems }
    </ul>
  )
};

export default TodoList