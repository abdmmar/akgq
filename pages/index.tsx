import type { NextPage } from 'next'
import Head from 'next/head'

import { Zine } from '../components'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Akyas x GenQ Special Edition: Reunion</title>
        <meta name="description" content="Akyas x GenQ Special Edition: Reunion" />
        <link rel="icon" href="/akgq.ico" />
      </Head>

      <Zine />
    </div>
  )
}

export default Home
