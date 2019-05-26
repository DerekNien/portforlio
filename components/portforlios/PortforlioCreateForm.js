import React, { Component } from 'react';

class PortforlioCreateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: '', description: '', language: '' };
  }

  handleChange = event => {
    const field = event.target.name;
    this.setState({ [field]: event.target.value });
  };

  handleSubmit = event => {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            name="title"
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Description:
          <textarea
            name="description"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Pick your favorite Programming Language:
          <select
            name="language"
            value={this.state.value}
            onChange={this.handleChange}
          >
            <option value="javascript">Javascript</option>
            <option value="java">Java</option>
            <option value="c#">C#</option>
            <option value="c++">C++</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default PortforlioCreateForm;
