import React from 'react'
import Head from 'next/head'

function Container({ children }) {
    return (
        <div className="relative px-0 mx-0 max-w-7xl md:mx-auto sm:px-6 lg:px-8">
            <Head>
                <title>Cole Horvat</title>
            </Head>
            {children}
        </div>
	)
}

export default Container
