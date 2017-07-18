import React from 'react'
import Field from './Field'




class ItemForm extends React.Component {


  render() {
    return (
      <div>
      <p>Item:</p>
      <Field required='true' type='number' placeholder='size of mm' name='dimensions{length}' />
      <Field required='true' type='number' placeholder='size of mm' name='dimensions{width}' />
      <Field required='true' type='number' placeholder='size of mm' name='dimensions{height}' />
      <Field required='true' type='number' placeholder='kgs' name='weight' />
      </div>
    );
  }
}

export default ItemForm
