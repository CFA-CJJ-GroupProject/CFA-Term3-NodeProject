import React from 'react'

export default function Field({
  label,
  type,
  name,
  placeholder,
  defaultValue
}) {
  return (
    <label>
        <span>{ label } </span>
        <input type={ type } name={ name } placeholder={ placeholder } defaultValue={defaultValue}/>
    </label>
  )
}
