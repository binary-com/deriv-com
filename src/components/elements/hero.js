import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Container from '../containers/container'
import { Header } from './typography.js'

const Wrapper = styled.section`
    width: 100%;
    background-color: var(--color-black);
`

const StyledHeader = styled(Header)`
    padding: 0.8rem 0;
    width: ${props => props.paragraph_width || ''};
`

const NoImageHero = styled(Container)`
    flex-direction: column;
    align-content: space-around;
    padding: 8rem 0 10rem 0;
`
const Hero = ({ header, paragraph, paragraph_width }) => (
    <Wrapper>
        <NoImageHero>
            <StyledHeader as="h1" color="red" align="center">
                {header}
            </StyledHeader>
            <StyledHeader
                as="h4"
                color="white"
                weight="normal"
                align="center"
                paragraph_width={paragraph_width}
            >
                {paragraph}
            </StyledHeader>
        </NoImageHero>
    </Wrapper>
)

Hero.propTypes = {
    header: PropTypes.string,
    paragraph: PropTypes.string,
    paragraph_width: PropTypes.string,
}
export default Hero
