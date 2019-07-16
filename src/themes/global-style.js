import { createGlobalStyle } from 'styled-components'
import Reset from './reset'
import Variables from './variables'
import device from './device'

const GlobalStyle = createGlobalStyle`
    ${Reset}
    ${Variables}

    * {
        &, &::before, &::after {
            box-sizing: border-box;
        }
    }
    html {
        font-size: 62.5%; /* 1rem = 10px */

        @media ${device.desktopL} {
            font-size: 75.5%; /* 1rem = 12px */
        }
        @media ${device.tablet} {
            font-size: 50%; /* 1rem = 8px */
        }
        @media ${device.mobileM} {
            font-size: 35%; /* 1rem = 5.5px */
        }
    }
    body {
        font-family: 'IBM Plex Sans', sans-serif;
        margin: 0;
        padding: 0;
    }
`

export default GlobalStyle
