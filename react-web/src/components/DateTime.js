import React from 'react'
import Field from './Field'


class DateTime extends React.Component {
  render() {
    return (
      <div>
      <ul className='measurements'>
        <li>
          <Field required='true' type='date' name='deliveryDate' />
        </li>

        <li>
          <Field required='true' type='time' name='deliveryTime' />
        </li>
      </ul>
      </div>
    );
  }
}

export default DateTime
