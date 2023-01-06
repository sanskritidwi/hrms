import React from 'react'

 const FileUpload = ({schema}) => {
  return (
    <div className='FileUploadWrapper'>
        <label>{schema.label}</label>
        <input type="file"/>
    </div>
  )
}

export default FileUpload;