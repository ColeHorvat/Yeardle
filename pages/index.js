/* 
	TODO: 
	
	1. Add react state for getting daily fact asynchronously (currently not being initialized before render)
	2. Add default styles for input tiles and numpad
	3. Add state for input tiles and numpad
	
*/

import React, { useState } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Container from '../components/Container.js'
import Header from '../components/Header.js'
import FactContainer from '../components/FactContainer.js'
const xml2js = require('xml2js')
const { DOMParser } = require('@xmldom/xmldom');



function Home({ fact, date }) {

	const [dailyFact, setDailyFact] = useState("");
	const [dailyAnswer, setDailyAnswer] = useState("");

	if (dailyFact == "") {

		setDailyFact(getDailyEvent[0])
		console.log(dailyFact)
	}

	if (dailyAnswer == "")
		setDailyAnswer(getDailyEvent[1])


	return (
		<Container>
			<Header />
			<FactContainer fact={fact} date={date} />
		</Container>
	)


}

async function getDailyEvent() {
	
	var factArray = [];

	fetch("https://api.hiztory.org/random/event.xml", {
		"method": "GET",
		"headers": {
		}
	})
		.then(response => response.text())
		.then(str => parser.parseFromString(str, "text/xml"))
		.then(data => xml2js.parseString(data, async (err, result) => {
			if (err) {
				console.log(err)
				throw err;
			}
			//Push content and answer
			await factArray.push(JSON.stringify(result['event']['event'][0]['$']['content'], null, 4))
			await factArray.push(JSON.stringify(result['event']['event'][0]['$']['date'], null, 4))
			// dailyFact = json['content'];
			// dailyAnswer = json['date'].split('-')[0];
			// await console.log(factArray)

			return await factArray;
		}))
		.catch(err => {
			console.error(err);
		});
}


export async function getStaticProps() {
	var parser = new DOMParser();
	let factArray = []
	// factArray = await getDailyEvent();
	// console.log(factArray)
	// let fact = await factArray[0]
	const res = await fetch('https://api.hiztory.org/random/event.xml')
	const text = await res.text()
	const str = parser.parseFromString(text, "text/xml");
	const data = xml2js.parseString(text, async (err, result) => {
		if (err) {
			console.log(err)
			throw err;
		}
		//Push content and answer
		await factArray.push(JSON.stringify(result['event']['event'][0]['$']['content'], null, 4))
		await factArray.push(JSON.stringify(result['event']['event'][0]['$']['date'], null, 4))
		// dailyFact = json['content'];
		// dailyAnswer = json['date'].split('-')[0];
		// await console.log(factArray)
	})

	const fact = await factArray[0].replace(/\\/g, "");;
	console.log(fact)
	const date = await factArray[1];

  	return {
    	props: {
    	  fact: fact,
		  date: date,
    	},
		revalidate: 1,
  	}

}

export default Home