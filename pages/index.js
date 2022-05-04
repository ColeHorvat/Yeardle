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



function Home({ fact }) {

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
			<FactContainer fact={fact} />
		</Container>
	)


}

export async function getStaticProps() {
	let factArray = []

	const res = await fetch('https://api.hiztory.org/random/event.xml')
	const text = await res.text()
	const data = xml2js.parseString(text, async (err, result) => {
		if (err) {
			console.log(err)
			throw err;
		}
		//Push content and answer
		await factArray.push(JSON.stringify(result['event']['event'][0]['$']['content'], null, 4))
		await factArray.push(JSON.stringify(result['event']['event'][0]['$']['date'], null, 4))
	})

	const fact = await factArray[0].replace(/\\/g, "");;
	console.log(fact)
	const date = await factArray[1];

  	return {
    	props: {
    	  fact: fact,
    	},
		revalidate: 1,
  	}

}

export default Home