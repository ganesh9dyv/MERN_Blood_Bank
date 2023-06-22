import React from 'react'

function InputType({labelText,lebelFor,inputType,value,onChange,name}) {
  return (
    <>
    <div className="mb-1">
    <label htmlFor={lebelFor} className="form-label">{labelText}</label>
    <input type={inputType} className="form-control" name={name} value={value} onChange={onChange} />
    
  </div>
    </>
  )
}

export default InputType