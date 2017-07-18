import React from 'react'
import ItemForm from './ItemForm'

class AddItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showComponent: false,
    };
    this._onButtonClick = this._onButtonClick.bind(this);
  }

  _onButtonClick() {
    this.setState({
      showComponent: true,
    });
  }

  render() {
    return (
      <div>
        <button type='button' onClick={this._onButtonClick}>Add Item</button>
        {this.state.showComponent ?
           <ItemForm /> :
           null
        }
      </div>
    );
  }
}

export default AddItem
