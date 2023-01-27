import React, { useRef } from 'react'

const FileUpload = ({ schema }) => {
  const inputRef = useRef()
  console.log('jhj')
  console.log(schema.label)
  console.log(schema.label, schema.buttonText, schema.buttonClass)
  return (
    <div className="FileUploadWrapper">
      <label>
        {schema.label} {schema.buttonText}
      </label>
      <button
        onClick={() => inputRef.current.click()}
        className={schema.buttonClass}
      >
        {schema.buttonText}
      </button>
      <input
        type="file"
        style={{ visibility: 'hidden' }}
        ref={inputRef}
      ></input>
    </div>
  )
}

export default FileUpload
