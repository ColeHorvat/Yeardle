import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Container from '../components/Container.js'
import Header from '../components/Header.js'

const { DOMParser } = require('@xmldom/xmldom');
const xml2js = require('xml2js')

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

		const json = JSON.stringify(result['event']['event'], null, 4);

		console.log(json)
	}))
	.catch(err => {
		console.error(err);
	});
}

export default function Home() {

	getDailyEvent();

	return (
		<Container>
			<Header />
		</Container>
	)
}
