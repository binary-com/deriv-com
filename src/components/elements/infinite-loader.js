import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Loader = styled.svg`
    height: 100px;
    width: 300px;
`

const InfiniteLoader = () => (
    <Wrapper>
        <Loader>
            <circle fill="#ff444f" stroke="none" cx="6" cy="50" r="6">
                <animateTransform
                    attributeName="transform"
                    dur="1s"
                    type="translate"
                    values="0 15 ; 0 -15; 0 15"
                    repeatCount="indefinite"
                    begin="0.1"
                />
            </circle>
            <circle fill="#ff444f" stroke="none" cx="30" cy="50" r="6">
                <animateTransform
                    attributeName="transform"
                    dur="1s"
                    type="translate"
                    values="0 10 ; 0 -10; 0 10"
                    repeatCount="indefinite"
                    begin="0.2"
                />
            </circle>
            <circle fill="#ff444f" stroke="none" cx="54" cy="50" r="6">
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
    </Wrapper>
)

export default InfiniteLoader
