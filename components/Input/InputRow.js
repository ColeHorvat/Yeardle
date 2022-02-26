import React from 'react'

function InputRow({ children }) {
  return (
    <div className="grid grid-cols-5 gap-1">
        { children }
    </div>
  )
}

export default InputRow