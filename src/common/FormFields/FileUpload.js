import React, { useRef } from 'react'

 const FileUpload = ({schema}) => {

  const inputRef = useRef();

  return (
    <div className='FileUploadWrapper'>
        <label>{schema.label}</label>
        <button
							onClick={() => inputRef.current.click()}
							className={schema.buttonClass}>
							{schema.buttonText}
						</button>
						<input
							type="file"
							style={{ visibility: "hidden" }}
							ref={inputRef}></input>
    </div>
  )
}

export default FileUpload;