import React from 'react'

  class SelectDeliveryField extends React.Component {
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
              <option value="TruckLight">Truck (light) </option>
              <option value="Ute">Ute</option>
              <option value="TruckCrane">Truck (crane)</option>
            </select>
      );
    }
  }

  export default SelectDeliveryField
