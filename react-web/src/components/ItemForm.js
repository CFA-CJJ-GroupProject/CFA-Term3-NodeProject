import React from 'react'
import Field from './Field'




class ItemForm extends React.Component {


  render() {
    return (
      <div>
      <p>Item:</p>
      <Field required='true' type='number' placeholder='size of mm' name='lengthField' />
      <Field required='true' type='number' placeholder='size of mm' name='width' />
      <Field required='true' type='number' placeholder='size of mm' name='height' />
      <Field required='true' type='number' placeholder='kgs' name='weight' />
      </div>
    );
  }
}

export default ItemForm
