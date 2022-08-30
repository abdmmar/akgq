import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import * as React from 'react'
import styled from 'styled-components'

import _Container from '../Common/Container'
import _Text from '../Common/Text'

export interface Meta {
  author: string
  title: string
}

export interface Props {
  meta: Meta
  children: React.ReactNode
}

// const ResponsiveImage = (props: any) => <Image alt={props.alt} layout="fill" {...props} />

const H1 = styled.h1`
  font-size: clamp(3rem, 16vw - 4rem, 4rem);
  line-height: 1.1;
  margin-bottom: 2rem;
  max-width: 900px;
  color: ${(props) => props.theme.colors.midnight};
`

const H2 = styled.h2`
  font-size: clamp(1.5rem, 16vw - 2.441rem, 2.441rem);
  line-height: 0.9;
  color: ${(props) => props.theme.colors.midnight};
`

const Text = styled(_Text)`
  color: ${(props) => props.color || props.theme.colors.midnight};
`

export const mdxComponents = {
  // img: ResponsiveImage,
  p: Text,
  h1: H1,
  h2: H2,
}

const Content = ({ meta, children }: Props) => {
  return (
    <div>
      <Head>
        <title>{meta.title} | Akyas x GenQ Special Edition: Reunion</title>
        <meta name="description" content={meta.title} />
        <link rel="icon" href="/akgq.ico" />
      </Head>

      <Container>
        <Header>
          <Link href={'/'} style={{ cursor: 'pointer' }}>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={32}
                height={32}
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 16 16"
                style={{
                  transform: 'rotate(360deg)',
                }}
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="m7 3.093l-5 5V8.8l5 5l.707-.707l-4.146-4.147H14v-1H3.56L7.708 3.8L7 3.093z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </Link>
        </Header>
        <Text color="yogyaBlue">
          <strong>Oleh: {meta.author}</strong>
        </Text>
        {children}
      </Container>
    </div>
  )
}

const Container = styled(_Container)`
  flex-direction: column;
  align-items: unset;
`

const Header = styled.header`
  padding: 20px 0;
`

export default Content
