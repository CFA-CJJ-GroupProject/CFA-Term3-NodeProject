import React from 'react'

export default function TextField({
  label,
  name,
  placeholder
}) {
  return (
    <label>
        <span>{ label } </span>
        <textarea name={ name } placeholder={ placeholder } required={ required }/>
    </label>
  )
}
