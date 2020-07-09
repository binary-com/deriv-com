import { createGlobalStyle } from 'styled-components'
import Reset from './reset'
import Variables from './variables'
import device from './device'

const GlobalStyle = createGlobalStyle`
    ${Reset}
    ${Variables}

    i { font-style: italic }
    * {
        font-family: 'IBM Plex Sans', sans-serif;

        &, &::before, &::after {
            box-sizing: border-box;
        }
    }
    html {
        font-size: 62.5%; /* 1rem = 10px */
        box-sizing: border-box;

        @media ${device.desktopL} {
            font-size: 75.5%; /* 1rem = 12px */
        }
        @media ${device.laptop} {
            font-size: 58%; /* 1rem = 9px */
        }
        @media ${device.tabletL} {
            font-size: 50%; /* 1rem = 8px */
        }
    }
    body {
        font-family: 'IBM Plex Sans', sans-serif;
        margin: 0;
        padding: 0;
        background: var(--color-black);
    }
`

export default GlobalStyle
