import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './form.scss';

export default class Form extends Component {
  constructor() {
    super();

    this.state = {
      value: '',
    };
  }

  submitHandler = (event) => {
    event.preventDefault();

    const { onAdd } = this.props;
    const { value } = this.state;

    if (value === '') return;

    onAdd(value);

    this.setState({ value: '' });
  };

  inputChangeHandler = (event) => {
    this.setState({ value: event.target.value });
  };

  render() {
    const { value } = this.state;

    return (
      <form
        className="container form"
        onSubmit={this.submitHandler}
      >
        <div className="row">
          <div className="col-sm-12">
            <div className="form__control-wrapper">
              <div className="form__label-input">
                <input
                  type="text"
                  className="form-control"
                  value={value}
                  onChange={this.inputChangeHandler}
                />
              </div>
              <button type="submit" className="btn btn-outline-success form__btn-add">
                Add
              </button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

Form.propTypes = {
  onAdd: PropTypes.func.isRequired,
};
