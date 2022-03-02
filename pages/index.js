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


let dailyFact = "";
let dailyAnswer = "";



export default function Home() {
	return (
		<Container>
			<Header />
			<FactContainer fact={dailyFact}/>
		</Container>
	)
}
