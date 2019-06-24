import { createGlobalStyle } from 'styled-components'
import Reset from './reset'
import Variables from './variables'

const GlobalStyle = createGlobalStyle`
    ${Reset}
    ${Variables}
    body {
        font-family: 'IBM Plex Sans', sans-serif;
        margin: 0;
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-size: 62.5%; /* 1 rem = 10px */
    }
`

export default GlobalStyle
