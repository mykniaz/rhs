import React from 'react';
import PropTypes from 'prop-types';

import './TodoListItem.scss';

const TodoListItem = (props) => {
  const {
    label,
    isDone,
    isImportant,
    onDelete,
    onMark,
    onCross,
  } = props;

  return (
    <div className="todo-list-item">
      <span
        className={
          `todo-list-item__label
          ${isDone && ' todo-list-item__label--done'}
          ${isImportant && ' todo-list-item__label--important'}`
        }
        onClick={onCross}
      >
        {label}
      </span>
      <button
        type="button"
        className="btn btn-outline-danger todo-list-item__btn"
        onClick={onDelete}
      >
        X
      </button>
      <button
        type="button"
        className="btn btn-outline-success ml-2 todo-list-item__btn"
        onClick={onMark}
      >
        !
      </button>
    </div>
  );
};

TodoListItem.defaultProps = {
  label: '',
  isDone: false,
  isImportant: false,
};

TodoListItem.propTypes = {
  label: PropTypes.string,
  isDone: PropTypes.bool,
  isImportant: PropTypes.bool,
  onDelete: PropTypes.func.isRequired,
  onMark: PropTypes.func.isRequired,
  onCross: PropTypes.func.isRequired,
};

export default TodoListItem;
