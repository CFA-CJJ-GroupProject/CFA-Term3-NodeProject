import React from 'react'

export default function Field({
  label,
  type,
  name,
  placeholder
}) {
  return (
    <label>
        <span>{ label } </span>
        <input type={ type } name={ name } placeholder={ placeholder } />
    </label>
  )
}
