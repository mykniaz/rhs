import React from 'react';

const style = {
  primary: {
    fontWeight: 'bold',
  },
};

const TodoListItem = ({label, isPrimary = false}) => (
  <span style={isPrimary ? style.primary : {}}>
    { label }
  </span>
);

export default TodoListItem;
