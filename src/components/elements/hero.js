import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Header } from './typography.js'
import { Container } from 'components/containers'

const Wrapper = styled.section`
    width: 100%;
    background-color: var(--color-black);
    padding: 8rem;
`

const StyledHeader = styled(Header)`
    padding: 0.8rem 0;
    width: ${props => props.paragraph_width || ''};
    max-width: ${props => props.paragraph_max_width || ''};
`
const NoImageHero = styled(Container)`
    flex-direction: column;
    align-content: space-around;
`
const Hero = ({
    children,
    header,
    paragraph,
    paragraph_width,
    mobile_text_align,
    paragraph_max_width,
}) => (
    <Wrapper has_children={!!children}>
        <NoImageHero>
            <StyledHeader
                as="h1"
                color="white"
                align="center"
                mobile_text_align={mobile_text_align}
            >
                {header}
            </StyledHeader>
            <StyledHeader
                as="h4"
                color="white"
                weight="normal"
                align="center"
                lh="1.5"
                paragraph_width={paragraph_width}
                paragraph_max_width={paragraph_max_width}
                mobile_text_align={mobile_text_align}
            >
                {paragraph}
            </StyledHeader>
        </NoImageHero>
        {children}
    </Wrapper>
)

Hero.propTypes = {
    children: PropTypes.node,
    header: PropTypes.string,
    mobile_text_align: PropTypes.string,
    paragraph: PropTypes.string,
    paragraph_max_width: PropTypes.string,
    paragraph_width: PropTypes.string,
}
export default Hero
