import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'

import { Zine } from '../components'
import readCSV from '../utils/readCSV'

interface ShoutOut {
  name: string
  message: string
  doing?: string
}

interface Props {
  data: Array<ShoutOut>
}

const Home: NextPage<Props> = ({ data }) => {
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

export const getStaticProps: GetStaticProps = async () => {
  const records: Array<ShoutOut> = readCSV({ filePath: './data/shoutout_nuzhat.csv' })

  return {
    props: {
      data: records,
    },
  }
}

export default Home
