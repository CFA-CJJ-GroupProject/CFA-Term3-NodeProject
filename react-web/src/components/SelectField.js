import React from 'react'

export default function SelectField({
  label,
  name,
  placeholder,
  value
}) {
  return (
    <label>
        <span>{ label } </span>
        <select name={ name } placeholder={ placeholder }>
          <option value={ value } />
        </select>
    </label>
  )
}
