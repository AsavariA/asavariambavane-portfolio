import React from 'react'
import Head from 'next/head'
import { userinfo } from '../Constants/userinfo'

const HeadTag = ({page}) => {
    return (
        <Head>
            <title>{`${userinfo.logoText} | ${page}`}</title>
            <link rel="icon" href="/favicon.png" />
            <meta name="title" content="Asavari Ambavane" />
            <meta name="description" content="Hello, I am a full-stack web developer and this is my portfolio :)" />

            <meta property="og:type" content="website" />
            <meta property="og:title" content="Asavari Ambavane" />
            <meta property="og:description" content="Hello, I am a full-stack web developer and this is my portfolio :)" />
            <meta property="og:image" content="" />

            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:title" content="Asavari Ambavane" />
            <meta property="twitter:description" content="Hello, I am a full-stack web developer and this is my portfolio :)" />
            <meta property="twitter:image" content="" />
        </Head>
    )
}

export default HeadTag
