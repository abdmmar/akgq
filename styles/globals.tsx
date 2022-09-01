import { createGlobalStyle } from 'styled-components'
import { colors } from './theme'

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }
  * {
    margin: 0;
  }
  html, body {
    height: 100%;
    font-family: 'Inter', 'Roboto', 'Helvetica', sans-serif;
  }

  body {  
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }
  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }
  input, button, textarea, select {
    font: inherit;
  }
  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
    font-family: 'Inter', 'Roboto', 'Helvetica', sans-serif;
  }
  #root, #__next {
    isolation: isolate;
  }

  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  /**
   * Type Scale Configuration
   */

  html {font-size: 100%;} /*16px*/

  body {
    background: white;
    font-weight: 500;
    line-height: 1.5;
    color: ${colors.midnight};
  }

  h1, h2, h3, h4, h5 {
    font-weight: 700;
    line-height: 1.3;
  }

  h1 {
    margin-top: 0;
    font-size: 3.052rem;
  }

  h2 {font-size: 2.441rem;}

  h3 {font-size: 1.953rem;}

  h4 {font-size: 1.563rem;}

  h5 {font-size: 1.25rem;}

  small, .text_small {font-size: 0.8rem;}

  /* react-masonry-grid style */
  .dkb-masonry-grid {
    display: flex;
    margin-left: -30px; /* gutter size offset */
    width: auto;
  }
  
  .dkb-masonry-grid-column {
    padding-left: 30px; /* gutter size */
    background-clip: padding-box;
  }

  .dkb-masonry-grid-column > div {
      margin-bottom: 2rem; /* space between items */
      width: fit-content;
    }

  /* Optional, different gutter size on mobile */
  @media (max-width: 800px) {

    .dkb-masonry-grid-column_column {
      padding-left: 15px; /* gutter size offset */
    }
    .dkb-masonry-grid-column_column > div {
      margin-bottom: 15px; /* space between items */
    }
  }
  /* react-masonry-grid style */

`

export default GlobalStyles
