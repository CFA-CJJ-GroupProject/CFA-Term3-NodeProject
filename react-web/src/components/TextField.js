import React from 'react'

export default function TextField({
  label,
  name,
  placeholder,
  required
}) {
  return (
    <label>
        <span>{ label } </span>
        <textarea name={ name } placeholder={ placeholder } required={ required }/>
    </label>
  )
}
