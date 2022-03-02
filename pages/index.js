/* 
	TODO: 
	
	1. Add react state for getting daily fact asynchronously (currently not being initialized before render)
	2. Add default styles for input tiles and numpad
	3. Add state for input tiles and numpad
	
*/

import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Container from '../components/Container.js'
import Header from '../components/Header.js'
import FactContainer from '../components/FactContainer.js'
const xml2js = require('xml2js')
const { DOMParser } = require('@xmldom/xmldom');

let dailyFact = "";
let dailyAnswer = "";

function Home(props) {
	return (
		<Container>
			<Header />
			<FactContainer fact={props.factArray[0]}/>
		</Container>
	)
}

async function getDailyEvent() {
	var parser = new DOMParser();
  	var factArray = [];

	fetch("https://api.hiztory.org/random/event.xml", {
		"method": "GET",
		"headers": {
		}
	})
	.then(response => response.text())
	.then(str => parser.parseFromString(str, "text/xml"))
	.then(data => xml2js.parseString(data, async (err, result) => {
		if(err) {
			throw err;
		}
    //Push content and answer
		await factArray.push(JSON.stringify(result['event']['event'][0]['$']['content'], null, 4))
		await factArray.push(JSON.stringify(result['event']['event'][0]['$']['date'], null, 4)) 
		
		// dailyFact = json['content'];
		// dailyAnswer = json['date'].split('-')[0];
    	await console.log(factArray)
	
	return await factArray;
	}))
	.catch(err => {
		console.error(err);
	});
}


export async function getStaticProps() {
  
	let factArray = []

	factArray = await getDailyEvent();

  	return {
    	props: {
    	  factArray: factArray || "Loading...",
    	},
		revalidate: 1,
  	}
      
}

export default Home