import React from 'react'
import Field from './Field'




class ItemForm extends React.Component {


  render() {
    return (
      <div>
      <p>Item:</p>
      <ul className='measurements'>
      <li><Field required='true' type='number' placeholder='size of mm' name='dimensions{length}' /></li>
      <li><Field required='true' type='number' placeholder='size of mm' name='dimensions{width}' /></li>
      <li><Field required='true' type='number' placeholder='size of mm' name='dimensions{height}' /></li>
      <li><Field required='true' type='number' placeholder='kgs' name='weight' /></li>
      </ul>
      </div>
    );
  }
}

export default ItemForm
