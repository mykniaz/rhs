import React from 'react';
import PropTypes from 'prop-types';

import TodoListItem from '../TodoListItem';
import './TodoList.scss';

const TodoList = (props) => {
  const {
    items,
    onDeleteItem,
    onMarkItem,
    onCrossItem,
  } = props;

  const listItems = items.map((item) => {
    const { id, ...itemProps } = item;

    return (
      <li
        key={id}
        className="list-group-item"
      >
        <TodoListItem
          {...itemProps}
          onDelete={() => onDeleteItem(id)}
          onMark={() => onMarkItem(id)}
          onCross={() => onCrossItem(id)}
        />
      </li>
    );
  });

  return (
    <div className="container mb-4">
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

TodoList.defaultProps = {
  items: [],
};

TodoList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  onDeleteItem: PropTypes.func.isRequired,
  onMarkItem: PropTypes.func.isRequired,
  onCrossItem: PropTypes.func.isRequired,
};

export default TodoList;
