import React from 'react'
import Head from 'next/head'
import { useSelector } from 'react-redux';
import Header from '../elements/header';
import env from '../../resources/env';
function HtmlLayout(props) {
  const { mode } = useSelector(state => state);
  return (
    <div className='html-layout' mode={mode}>
      <Head>
        <title>Baghdad validator</title>
        <link rel="icon" href={`${env.domain}/favicon.ico`} />
        {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.5.0/styles/default.min.css" /> */}
        <script src="https://kit.fontawesome.com/633286a31f.js" ></script>
        <link rel="stylesheet" href="https://kit-free.fontawesome.com/releases/latest/css/free.min.css" media="all"></link>
        <link rel="stylesheet" href={`${env.domain}/atom-one-dark.css`} />
        <script src={`${env.domain}/highlight.js`}></script>
        <script src="https://unpkg.com/baghdad@0.0.2/index.js"></script>
      </Head>
      <div>
        <div>
          <Header />
        </div>
        <div>
          {props.children}
        </div>
      </div>
    </div>
  )
}

export default HtmlLayout
