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

        .styled-layout {
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

        
    }
    body {
        font-family: 'IBM Plex Sans', sans-serif;
        margin: 0;
        padding: 0;
        background: var(--color-white);
    }
    p {
        font-family: 'IBM Plex Sans', sans-serif;
        margin: 0;
        padding: 0;
    }
    h1,h2,h3,h4,h5,h6 {
        font-family: Ubuntu, sans-serif;
        font-style: normal;
        font-weight: 700;
    }

    /* when the language direction is "rtl" for example "Arabic" we use this font family  */
    *[dir='rtl'] {
        font-family: 'Noto Sans', sans-serif;
    }   
    
    /* when the language direction is "ltr" for example "English" we use this font family  */
    *[dir='ltr'] {
        font-family: 'IBM Plex Sans', sans-serif;
    }
`

export default GlobalStyle
