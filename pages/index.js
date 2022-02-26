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

const { DOMParser } = require('@xmldom/xmldom');
const xml2js = require('xml2js')

let dailyFact = "";
let dailyAnswer = "";

async function getDailyEvent() {
	var parser = new DOMParser();

	fetch("https://api.hiztory.org/random/event.xml", {
		"method": "GET",
		"headers": {
		}
	})
	.then(response => response.text())
	.then(str => parser.parseFromString(str, "text/xml"))
	.then(data => xml2js.parseString(data, (err, result) => {
		if(err) {
			throw err;
		}

		dailyFact = JSON.stringify(result['event']['event'][0]['$']['content'], null, 4);
		dailyAnswer = JSON.stringify(result['event']['event'][0]['$']['date'], null, 4);
		// dailyFact = json['content'];
		// dailyAnswer = json['date'].split('-')[0];

		console.log(dailyAnswer + " : " + dailyFact);
	}))
	.catch(err => {
		console.error(err);
	});
}

export default function Home() {

	await getDailyEvent();

	return (
		<Container>
			<Header />
			<FactContainer fact={dailyFact}/>
		</Container>
	)
}
