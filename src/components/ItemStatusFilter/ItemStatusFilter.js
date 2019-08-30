import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ItemStatusFilter extends Component {
  constructor() {
    super();

    this.state = { type: '' };
  }

  typeBtnClickHandler(type) {
    const { onChangeType } = this.props;
    this.setState({ type });

    onChangeType(type);
  }

  render() {
    const { type } = this.state;

    return (
      <div className="btn-group">
        <button
          type="button"
          className={`btn ${type === '' ? 'btn-info' : 'btn-outline-secondary'}`}
          onClick={() => this.typeBtnClickHandler('')}
        >
          All
        </button>
        <button
          type="button"
          className={`btn ${type === 'active' ? 'btn-info' : 'btn-outline-secondary'}`}
          onClick={() => this.typeBtnClickHandler('active')}
        >
          Active
        </button>
        <button
          type="button"
          className={`btn ${type === 'done' ? 'btn-info' : 'btn-outline-secondary'}`}
          onClick={() => this.typeBtnClickHandler('done')}
        >
          Done
        </button>
      </div>
    );
  }
}

ItemStatusFilter.propTypes = {
  onChangeType: PropTypes.func.isRequired,
};
