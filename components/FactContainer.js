import React, { useEffect, useState } from 'react'
const xml2js = require('xml2js')
const { DOMParser } = require('@xmldom/xmldom');


// async function getDailyEvent() {
// 	var parser = new DOMParser();
//   var factArray = [];

// 	fetch("https://api.hiztory.org/random/event.xml", {
// 		"method": "GET",
// 		"headers": {
// 		}
// 	})
// 	.then(response => response.text())
// 	.then(str => parser.parseFromString(str, "text/xml"))
// 	.then(data => xml2js.parseString(data, (err, result) => {
// 		if(err) {
// 			throw err;
// 		}

//     //Push content and answer
// 		factArray.push(JSON.stringify(result['event']['event'][0]['$']['content'], null, 4))
// 		factArray.push(JSON.stringify(result['event']['event'][0]['$']['date'], null, 4)) 
// 		// dailyFact = json['content'];
// 		// dailyAnswer = json['date'].split('-')[0];

//     return factArray;
// 	}))
// 	.catch(err => {
// 		console.error(err);
// 	});
// }

function FactContainer(props) {
  
  var myHeaders = new Headers();
  myHeaders.append("Access-Control-Allow-Origin", "*"); 
  
  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
  };

  const [fact, setFact] = useState()
  const [answer, setAnswer] = useState()
  
  useEffect(() => {
    
    fetch("https://api.hiztory.org/random/event.xml", {
      		"method": "GET",
      		"headers": {
          }
      	})
      .then(res => res.text())
      .then(str => parser.parseFromString(str, 'text/xml'))
      .then(data => xml2js.parseString(data, (err, result) => {
        if(err) {
          throw err;
        }

        console.log(result['event']['event'][0]['$']['content'])

        setFact(JSON.stringify(result['event']['event'][0]['$']['content'], null, 4));
        setAnswer(JSON.stringify[result['event']['event'][0]['$']['date'], null, 4]);
      }))
  }, []);

  return (
    <div className="grid place-items-center py-12">
        <h3 className="text-white font-semibold text-3xl pb-8">Which year?</h3>
        <p className="text-white font-medium text-2xl">{ fact ? fact : "Loading..." }</p>
    </div>
  )
}

export default FactContainer