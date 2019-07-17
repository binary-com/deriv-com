import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Container from '../containers/container'
import device from 'themes/device'
import { Header } from './typography.js'

const Wrapper = styled.section`
    width: 100%;
    background-color: var(--color-black);
`

const NoImageHero = styled(Container)`
    flex-direction: column;
    align-content: space-around;
    padding: 7rem 0 7.8rem 0;

    & > * {
        padding: 5rem 0;

        @media ${device.laptop} {
            padding: 3rem 1rem;
        }
    }
`
const Hero = ({ paragraph, header }) => (
    <Wrapper>
        <NoImageHero>
            <Header as="h1" color="red" align="center">
                {header}
            </Header>
            <Header as="h4" color="white" weight="500" align="center">
                {paragraph}
            </Header>
        </NoImageHero>
    </Wrapper>
)

Hero.propTypes = {
    header: PropTypes.string,
    paragraph: PropTypes.string,
}
export default Hero
