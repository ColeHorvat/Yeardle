import React from 'react'
import Head from 'next/head'

function Container({ children }) {
    return (
        <div className="relative bg-black px-0 mx-0 w-screen h-screen md:mx-auto">
            <Head>
                <title>Yeardle</title>
            </Head>
            {children}
        </div>
	)
}

export default Container
