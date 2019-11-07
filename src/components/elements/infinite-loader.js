import React from 'react'
import styled from 'styled-components'

const Loader = styled.svg`
    height: 100px;
    width: 300px;
    display: inline-block;
`

const InfiniteLoader = () => (
    <Loader>
        <circle fill="#fff" stroke="none" cx="6" cy="50" r="6">
            <animateTransform
                attributeName="transform"
                dur="1s"
                type="translate"
                values="0 15 ; 0 -15; 0 15"
                repeatCount="indefinite"
                begin="0.1"
            />
        </circle>
        <circle fill="#fff" stroke="none" cx="30" cy="50" r="6">
            <animateTransform
                attributeName="transform"
                dur="1s"
                type="translate"
                values="0 10 ; 0 -10; 0 10"
                repeatCount="indefinite"
                begin="0.2"
            />
        </circle>
        <circle fill="#fff" stroke="none" cx="54" cy="50" r="6">
            <animateTransform
                attributeName="transform"
                dur="1s"
                type="translate"
                values="0 5 ; 0 -5; 0 5"
                repeatCount="indefinite"
                begin="0.3"
            />
        </circle>
    </Loader>
)

export default InfiniteLoader
