import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ItemStatusFilter from '../ItemStatusFilter';

export default class SearchPanel extends Component {
  constructor() {
    super();

    this.state = { value: '' };
  }

  inputChangeHandler = (event) => {
    const { onSearchInput } = this.props;
    const { value } = event.target;

    this.setState({ value });

    onSearchInput(value);
  };

  render() {
    const { value } = this.state;
    const { onChangeType } = this.props;

    return (
      <div className="container mb-4">
        <div className="row">
          <div className="col-sm-6">
            <input
              type="text"
              className="form-control"
              value={value}
              onChange={this.inputChangeHandler}
            />
          </div>
          <div className="col-sm-6">
            <ItemStatusFilter onChangeType={(type) => onChangeType(type)} />
          </div>
        </div>
      </div>
    );
  }
}

SearchPanel.propTypes = {
  onSearchInput: PropTypes.func.isRequired,
  onChangeType: PropTypes.func.isRequired,
};
