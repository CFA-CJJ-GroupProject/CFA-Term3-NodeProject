import React from 'react'

class SelectStateField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'NSW'};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <select value={this.state.value} name={this.props.name} onChange={this.handleChange}>
        <option value="NSW">NSW</option>
        <option value="VIC">VIC</option>
        <option value="ACT">ACT</option>
        <option value="WA">WA</option>
        <option value="SA">SA</option>
        <option value="NT">NT</option>
        <option value="QLD">QLD</option>
      </select>
    );
  }
}

export default SelectStateField
