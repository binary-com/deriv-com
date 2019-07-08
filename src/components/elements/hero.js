import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Container from '../containers/container'
import device from 'themes/device'
import {Header} from './topography.js'

const Wrapper = styled.section`
    width: 100%;
    background-color: var(--color-black);
`

const NoImageHero = styled(Container)`
    flex-direction: column;
    align-content: space-around;
    padding: 7rem 0 7.8rem 0;

    div {
        padding: 5rem 0;

        @media ${device.laptop} {
            text-align: center;
            padding: 3rem 1rem;
        }
    }
`
const Hero = ({ paragraph, header_part_1, header_part_2 }) => (
    <Wrapper>
        <NoImageHero>
            <div>
                <Header as='h4' color='white' weight='500'>{paragraph}</Header>
            </div>
            <div>
                <Header as='h1' color='red' align='center'>
                    {header_part_1}
                    <br />
                    {header_part_2}
                </Header>
            </div>
        </NoImageHero>
    </Wrapper>
)

Hero.propTypes = {
    header_part_1: PropTypes.string,
    header_part_2: PropTypes.string,
    paragraph: PropTypes.string,
}
export default Hero
