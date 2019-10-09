import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ItemStatusFilter extends Component {
  constructor() {
    super();

    this.state = { type: undefined };
  }

  componentDidMount() {
    this.setTypeFromProps();
  }

  componentDidUpdate(prevProps) {
    const { type } = this.props;

    if (prevProps.type === type) return;

    this.setTypeFromProps();
  }

  setTypeFromProps = () => {
    const { type } = this.props;
    this.setState({ type });
  };

  btnClickHandler = (e) => {
    const { onChangeType } = this.props;

    this.setState({ type: e.target.id });

    onChangeType(e.target.id);
  };

  render() {
    const { type } = this.state;

    return (
      <div className="btn-group">
        <button
          type="button"
          id=""
          className={`btn ${type === '' ? 'btn-info' : 'btn-outline-secondary'}`}
          onClick={this.btnClickHandler}
        >
          All
        </button>
        <button
          type="button"
          id="active"
          className={`btn ${type === 'active' ? 'btn-info' : 'btn-outline-secondary'}`}
          onClick={this.btnClickHandler}
        >
          Active
        </button>
        <button
          type="button"
          id="done"
          className={`btn ${type === 'done' ? 'btn-info' : 'btn-outline-secondary'}`}
          onClick={this.btnClickHandler}
        >
          Done
        </button>
      </div>
    );
  }
}

ItemStatusFilter.defaultProps = {
  type: null,
};

ItemStatusFilter.propTypes = {
  type: PropTypes.string,
  onChangeType: PropTypes.func.isRequired,
};
