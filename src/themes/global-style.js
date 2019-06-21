import { createGlobalStyle } from 'styled-components';
import Reset                 from './reset';

const GlobalStyle = createGlobalStyle`
    ${Reset}
    body {
        font-family: 'IBM Plex Sans', 'roboto';
        margin: 0;
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-size: 62.5%; /* 1 rem = 10px */
    }

    :root {
        /* TODO: naming, colors */
        --main-color: #ff444f;
        --main-text-color: #2a2a2a;
        --secondary-text-color: #ffffff;
        --background-color: #0e0e0e;
        --black-color: #000000;
        --white-color: #ffffff;
        --grey-color: #e5e5e5;
    }
`

export default GlobalStyle;