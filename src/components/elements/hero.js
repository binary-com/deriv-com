import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Container from '../containers/container'
import device from 'themes/device'

const Wrapper = styled.section`
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
            color: var(--color-white);
            font-size: 24px;
            line-height: 30px;
            font-weight: 500;
        }
        h2 {
            color: var(--color-red);
            text-align: center;
            font-size: 64px;
            line-height: 74px;
            font-weight: bold;
        }
        @media ${device.laptop} {
            text-align: center;
            padding: 3rem 1rem;
        }
    }
`
const Hero = ({ paragraph, header1, header2 }) => (
    <Wrapper>
        <NoImageHero>
            <div>
                <p>{paragraph}</p>
            </div>
            <div>
                <h2>
                    {header1}
                    <br />
                    {header2}
                </h2>
            </div>
        </NoImageHero>
    </Wrapper>
)

Hero.propTypes = {
    header1: PropTypes.string,
    header2: PropTypes.string,
    paragraph: PropTypes.string,
}
export default Hero
