import type { AppProps } from 'next/app'
import { MDXProvider } from '@mdx-js/react'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from '../styles/globals'
import { getTheme } from '../styles/theme'
import { mdxComponents } from '../components/Content'
import useScrollRestoration from '../hooks/useScrollRestoration'

function MyApp({ Component, pageProps, router }: AppProps) {
  useScrollRestoration(router)

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
