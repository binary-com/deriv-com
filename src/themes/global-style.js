import { createGlobalStyle } from 'styled-components'
import Reset from './reset'
import Variables from './variables'
import device from './device'

const GlobalStyle = createGlobalStyle`
    ${Reset}
    ${Variables}

    body {
        font-family: 'IBM Plex Sans', sans-serif;
        margin: 0;
    }
    * {
        margin: 0;
        padding: 0;
    }
    html {
        font-size: 62.5%; /* 1rem = 10px */
        box-sizing: border-box;

        @media ${device.desktopL} {
            font-size: 75.5%; /* 1rem = 12px */
        }
        @media ${device.laptop} {
            font-size: 50%; /* 1rem = 8px */
        }
        @media ${device.tablet} {
            font-size: 47%; /* 1rem = 7.5px */
        }
        @media ${device.mobileM} {
            font-size: 35%; /* 1rem = 5.5px */
        }
    }
`

export default GlobalStyle
