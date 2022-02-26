import React from 'react'

function InputContainer({ children }) {
  return (
    <div className="grid grid-rows-6 gap-1 p-10 box-border">
        {children}
    </div>
  )
}

export default InputContainer