import type { AppProps } from 'next/app'
import { MDXProvider } from '@mdx-js/react'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from '../styles/globals'
import { getTheme } from '../styles/theme'
import { mdxComponents } from '../components/Content'
import usePreserveScroll from '../hooks/usePreserveScroll'

function MyApp({ Component, pageProps }: AppProps) {
  usePreserveScroll()

  return (
    <ThemeProvider theme={getTheme()}>
      <GlobalStyles />
      <MDXProvider components={mdxComponents}>
        <Component {...pageProps} />
      </MDXProvider>
    </ThemeProvider>
  )
}

export default MyApp
