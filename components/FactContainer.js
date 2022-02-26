import React from 'react'

function FactContainer(props) {
    console.log("TEST: " + props.fact);
  return (
    <div className="grid place-items-center py-12">
        <h3 className="text-white font-semibold text-3xl pb-8">Which year?</h3>
        <p className="text-white font-medium text-2xl">{ props.fact }</p>
    </div>
  )
}

export default FactContainer