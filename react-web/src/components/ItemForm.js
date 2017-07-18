import React from 'react'
import Field from './Field'

class ItemForm extends React.Component {
  render() {
    return (
      <div>
      <ul className='measurements'>
        <li>
          <label>L</label>
          <Field required='true' type='number' placeholder='mm' name='lengthField' />
        </li>

        <li>
          <label>W</label>
          <Field required='true' type='number' placeholder='mm' name='width' />
        </li>

            <li>
              <label>H</label>
              <Field required='true' type='number' placeholder='mm' name='height' />
            </li>
            <li>
              <label>KGS</label>
              <Field required='true' type='number' placeholder='kgs' name='weight' />
            </li>
      </ul>
      </div>
    );
  }
}

export default ItemForm
