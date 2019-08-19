import React from 'react'
import styled from 'styled-components'
import MediaQuery from 'react-responsive'
import Button from '../../components/form/button'
import { StyledHeader } from './_headers'
import device, { size } from 'themes/device'
import Container from 'components/containers/container'
import Signup, { LoginText } from 'components/form/signup'
import { Header } from 'components/elements/typography'
import { localize } from 'components/localization'
import header_trade_image from 'images/common/header-trade.png'

const HeroWrapper = styled.section`
    width: 100%;
    padding: 4rem 0 2rem;
    min-height: 65rem;
    background: var(--color-black) url(${header_trade_image});
    background-repeat: no-repeat;
    background-position: 23% 100%;
    background-size: auto;

    @media ${device.laptop} {
        background-position: -10rem 100%;
    }
    @media ${device.tabletL} {
        background: unset;
        background-position: -20rem 100%;
        min-height: 47rem;
        background-color:var(--color-black);
        padding-bottom: 7rem;
    }
    @media ${device.tablet} {
        background-position: -40rem 100%;
    }
`

const HeroGrid = styled.section`
    width: 100%;
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-column-gap: 2rem;
    max-width: 100%;
    padding-top: 4rem;

    @media ${device.laptop} {
        grid-template-columns: 1fr;
        grid-row-gap: 5rem;
    }
    @media ${device.tabletS} {
        grid-template-columns: 1fr;
        grid-row-gap: 8rem;
        text-align: center;
    }
`
const SignupWrapper = styled.article`
    justify-self: end;
    min-width: 33rem;
`

const SignupBox = styled.div`
    max-width: 33rem;
    background-color: var(--color-grey-1);
    border-radius: 6px;
    box-sizing: border-box;
    text-align: center;
    padding: 3.2rem 0;

    h3 {
        font-size: var(--text-size-m);
        font-weight: 500;
    }
    ${LoginText} {
        display: none;
    }
`
const SingupButton = styled(Button)`
    width: 100%;
    max-width: 36rem;
    font-size: var(--text-size-sm);
`

export const Hero = () => (
    <HeroWrapper>
        <Container>
            <HeroGrid>
                <article>
                    <MediaQuery maxDeviceWidth={size.tabletL}>
                        {matches => matches ? <>
                            <Header font_size='6rem' color="white" lh="1.1">
                                {localize(
                                    'Welcome to the ultimate trading experience',
                                )}
                            </Header>
                            <StyledHeader
                                font_size="2rem"
                                color="white"
                                weight="500"
                            >
                                {localize(
                                    'All the world’s markets, one powerful trading platform',
                                )}
                            </StyledHeader>
                        </> : <>
                                <Header as="h1" color="white" lh="1.2">
                                    {localize(
                                        'This is your ultimate trading experience',
                                    )}
                                </Header>
                                <StyledHeader as="h4" color="white" weight="500">
                                    {localize(
                                        'The world’s markets at your fingertips anytime, anywhere.',
                                    )}
                                </StyledHeader>
                            </>}
                    </MediaQuery>
                </article>
                <MediaQuery maxDeviceWidth={size.tabletL}>
                    {matches => matches ? <SingupButton type="submit" secondary>
                        {localize('Create a free demo account')}
                    </SingupButton> : <SignupWrapper>
                            <SignupBox>
                                <Signup />
                            </SignupBox>
                        </SignupWrapper>
                    }
                </MediaQuery>
            </HeroGrid>
        </Container>
    </HeroWrapper>
)
