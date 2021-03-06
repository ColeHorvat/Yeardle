import React, { useEffect, useState } from 'react'
const xml2js = require('xml2js')
const { DOMParser } = require('@xmldom/xmldom');

function FactContainer(props) {
  
  // console.log(factArray);
  var myHeaders = new Headers();
  myHeaders.append("Access-Control-Allow-Origin", "*"); 
  
  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
  };

  const [fact, setFact] = useState("")
  const [date, setDate] = useState("")

  useEffect(() => {
    setFact(props.fact) 
    setDate(props.date.substring(0, 5))
  }, [props.fact, props.date])
  // setFact(props.fact)
  return (
    <div className="grid place-items-center py-12">
        <h3 className="text-white font-semibold text-3xl pb-8">Which year?</h3>
        <p className="text-white font-medium text-2xl">{ (fact != "") ? fact : "Loading..." }</p>
    </div>
  )
}



export default FactContainer