import React from 'react';

const style = {
  primary: {
    fontWeight: 'bold',
  },
};

// eslint-disable-next-line react/prop-types
const TodoListItem = ({ label, isPrimary = false }) => (
  <span style={isPrimary ? style.primary : {}}>
    { label }
  </span>
);

export default TodoListItem;
