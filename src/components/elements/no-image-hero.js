import React from 'react'
import styled from 'styled-components'
import { Flex, Box } from '@rebass/grid'

const Wrapper = styled.div`
    width: 100%;
    margin: 0;
    background-color: var(--color-black);
`

const NoImageHero = styled.div`
    width: 75%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    padding: 5rem 1rem;

    div {

        p {
            color: #ffffff;
            font-size: 24px;
            line-height: 30px;
        }

        h2 {

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