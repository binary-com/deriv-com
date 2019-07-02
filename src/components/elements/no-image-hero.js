import React from 'react'
import styled from 'styled-components'
import Container from '../containers/container'

const Wrapper = styled.div`
    width: 100%;
    background-color: var(--color-black);
`

const NoImageHero = styled(Container)`
    margin: 0 auto;
    display: flex;
    align-items: center;
    flex-direction: column;
    align-content: space-around;
    padding: 7rem 0 7.8rem 0;

    div {
        padding: 5rem 0;
        
        p {
            color: --color-white;
            font-size: 24px;
            line-height: 30px;
            font-weight: 500;
        }
        h2 {
            color: #ff444f;
            text-align: center;
            font-size: 64px;
            line-height: 74px;
            font-weight: bold;
        }
        @media (max-width: 1024px) {
            text-align: center;
            padding: 3rem 1rem;
        }
    }
`
const NoImageHeroWrapper = () => (
    <Wrapper>
        <NoImageHero>
            <div>
                <p>Deriv is a new trading platform created by Binary Group Ltd., a multi-award winning pioneer in online trading. It’s built upon 20 years of experience, customer focus, and technical innovation. With our powerful yet simple trading experience and tools, new and professional traders alike can understand risk and make better trading decisions.</p>
            </div>
            <div>
                <h2>
                    Go ahead,<br />experience it for yourself.
                </h2>
            </div>
        </NoImageHero>
    </Wrapper>
)
export default NoImageHeroWrapper;