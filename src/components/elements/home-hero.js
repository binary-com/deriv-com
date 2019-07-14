import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Container from '../containers/container'
import device from 'themes/device'
import { Header } from './typography.js'
import Signup from '../form/signup'
import img from 'images/common/header-trade.png'

const Wrapper = styled.section`
    width: 100%;
    padding: 2rem 0;
    min-height: 55rem;
    background: var(--color-black) url(${img});
    background-repeat: no-repeat;
    background-position: 23% 100%;
    background-size: auto;

    @media ${device.lg} {
        background-position: -10rem 100%;
    }
    @media ${device.md} {
        background-position: -20rem 100%;
    }
    @media ${device.sm} {
        background-position: -40rem 100%;
    }
`
const Grid = styled.section`
    width: 100%;
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-column-gap: 2rem;
    max-width: 100%;

    article {
        padding: 0;

        * {
            max-width: 100%;
        }
    }
    .hero-left {
        text-align: left;

        .subheader {
            margin-top: 1rem;
        }
    }
    .signup {
        justify-self: end;
        min-width: 33rem;

        .signup-box {
            max-width: 33rem;
            background-color: var(--color-grey-1);
            border-radius: 6px;
            box-sizing: border-box;
            text-align: center;
            padding: 0.5rem 0;

            form {
                margin-top: -7rem;
                margin-bottom: -1rem;
            }
            h3 {
                font-size: var(--text-size-m);
                font-weight: 500;
            }
            .already {
                display: none;
            }
            .social-signup {
                margin-top: -2rem;
            }
        }
    }
    @media ${device.lg} {
        grid-template-columns: 1fr;
        grid-row-gap: 5rem;

        .hero-left * {
            text-align: center;
        }
        .signup {
            justify-self: center;
        }
    }
    @media ${device.sm} {
        grid-template-columns: 1fr;
        grid-row-gap: 8rem;
        text-align: center;
    }
`

const Hero = ({ header_part_1, header_part_2 }) => (
    <Wrapper>
        <Container>
            <Grid>
                <article className='hero-left'>
                    <Header as="h1" color="white" lh="1.2">
                        {header_part_1}
                    </Header>
                    <Header as="h4" color="white" weight="500" className='subheader'>
                        {header_part_2}
                    </Header>
                </article>
                <article className='signup'>
                    <div className='signup-box'>
                        <Signup />
                    </div>
                </article>
            </Grid>
        </Container>
    </Wrapper>
)

Hero.propTypes = {
    header_part_1: PropTypes.string,
    header_part_2: PropTypes.string,
}
export default Hero
