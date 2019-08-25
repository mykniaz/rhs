import React from 'react';

import TodoListItem from './TodoListItem';
import './TodoList.scss';

const TodoList = ({ items = [] }) => {
  const listItems = items.map((item) => {
    const { id, ...itemProps } = item;

    return (
      <li
        key={id}
        className="list-group-item"
      >
        <TodoListItem {...itemProps} />
      </li>
    );
  });

  return (
    <ul className="list-group todo-list">
      { listItems }
    </ul>
  );
};

export default TodoList;
