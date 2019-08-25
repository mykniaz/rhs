import React from 'react';

import TodoListItem from './TodoListItem';
import './TodoList.scss';

// eslint-disable-next-line react/prop-types
const TodoList = ({ items = [] }) => {
  // eslint-disable-next-line react/prop-types
  const listItems = items.map((item) => {
    const { id, ...itemProps } = item;

    return (
      <li
        key={id}
        className="list-group-item"
      >
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <TodoListItem {...itemProps} />
      </li>
    );
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <ul className="list-group todo-list">
            { listItems }
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
