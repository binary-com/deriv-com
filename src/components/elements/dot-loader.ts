import styled, { keyframes } from 'styled-components'

const dots = keyframes`
    0%, 20% {
        color: rgba(0,0,0,0);
        text-shadow:
            0.25em 0 0 rgba(0,0,0,0),
            0.5em 0 0 rgba(0,0,0,0);
    }
    40% {
        color: grey;
        text-shadow:
            0.25em 0 0 rgba(0,0,0,0),
            0.5em 0 0 rgba(0,0,0,0);
    }
    60% {
        text-shadow:
            0.25em 0 0 grey,
            0.5em 0 0 rgba(0,0,0,0);
    }
    80%, 100% {
        text-shadow:
            0.25em 0 0 grey,
            0.5em 0 0 grey;
    }
`
const InitialLoader = styled.span`
    text-align: center;
    margin: 0 49% 0 49%;

    ::after {
        color: grey;
        content: ' .';
        animation: ${dots} 1s steps(5, end) infinite;
        font-size: 6rem;
        line-height: 1;
    }
`

export default InitialLoader
