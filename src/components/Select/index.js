import React, { useRef, useEffect } from 'react'
import { useField } from '@unform/core'

import { SelectComponent } from './styles'

export default function Select ({ name, options = [], ...rest }){

  const selectRef = useRef(null)
  const { fieldName, registerField, defaultValue } = useField(name)

  useEffect(() => {
      registerField({
          name: fieldName,
          ref: selectRef.current,
          path: 'value'
      })
  }, [fieldName, registerField])

  return (
    <SelectComponent id={name} ref={selectRef} defaultValue={defaultValue} {...rest}>
      <option value="" disabled hidden>Select an option</option>

      {options.map(option => {
        return <option key={option.value} value={option.value}>{option.label}</option>
      })}
    </SelectComponent>
  )
}
