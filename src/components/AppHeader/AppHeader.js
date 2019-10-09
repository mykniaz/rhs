import React from 'react';
import PropTypes from 'prop-types';

const AppHeader = (props) => {
  const { todo, done } = props;
  return (
    <div className="container app-header">
      <div className="row">
        <div className="col-sm-6">
          <h1>React To-Do List</h1>
        </div>
        <div className="col-sm-6 mt-3">
          {todo} more to do,  {done} done
        </div>
      </div>
    </div>
  );
};

AppHeader.defaultProps = {
  todo: 0,
  done: 0,
};

AppHeader.propTypes = {
  todo: PropTypes.number,
  done: PropTypes.number,
};

export default AppHeader;
