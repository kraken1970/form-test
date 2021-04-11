import React from 'react'

const Input = ({
  type,
  label,
  value,
  fieldToched,
  errorMessage,
  setValue,
  blurHandle,
  placeholder,
}) => {
  return (
    <>
      <label>
        {' '}
        {label}
        <input
          type={type}
          value={value}
          onChange={setValue}
          placeholder={placeholder}
          onBlur={blurHandle()}
        />
      </label>
      {fieldToched && errorMessage && (
        <div>
          <p>{errorMessage}</p>
        </div>
      )}
    </>
  )
}

export default Input
