import React from 'react'

  class SelectRoleField extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};

      this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
      this.setState({value: event.target.value});
    }

    render() {
      return (
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="Driver">Driver</option>
              <option value="Customer">Customer</option>
            </select>
      );
    }
  }

  export default SelectRoleField
