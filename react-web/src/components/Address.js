import React from 'react'
import Field from './Field'
import SelectStateField from './SelectStateField'

class Address extends React.Component {
  render() {
    return (
        <div>
        <Field required='true' type='text' placeholder='Street...' name='pickupStreet' />
        <Field required='true' type='text' placeholder='Suburb...' name='pickupSuburb' />
        <ul className='measurements'>
          <li>
            <Field required='true' type='text' placeholder='Postcode...' name='pickupPostcode' />
          </li>
          <li>
            <SelectStateField required='true' name="pickupState"/>
          </li>
        </ul>
      </div>
    );
  }
}
export default Address
