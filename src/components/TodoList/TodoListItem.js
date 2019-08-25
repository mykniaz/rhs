import React from 'react';

import './TodoListItem.scss';

const style = {
  primary: {
    fontWeight: 'bold',
  },
};

// eslint-disable-next-line react/prop-types
const TodoListItem = ({ label, isPrimary = false }) => (
  <div className="todo-list-item">
    <span
      className="todo-list-item__label"
      style={isPrimary ? style.primary : {}}
    >
      { label }
    </span>
    <button type="button" className="btn btn-danger todo-list-item__btn">
      remove
    </button>
  </div>
);

export default TodoListItem;
