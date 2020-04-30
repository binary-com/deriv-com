import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import CtaBinary from './_cta-binary'
import { Container, Flex, Box } from 'components/containers'
import { Header, QueryImage } from 'components/elements'
import { LinkButton } from 'components/form'
import { localize } from 'components/localization'
import { smarttrader_url, deriv_app_url } from 'common/utility'
import device from 'themes/device'
import Platform from 'images/common/interim-bg.png'
import PlatformMt5 from 'images/common/interim-bg-dmt5.png'

const Section = styled(Box)`
    background-image: url(${(props) => props.background});
    width: 100%;
    background-size: cover;
    position: relative;

    @media (max-width: 1375px) {
        background: white;
    }
    @media ${device.mobileL} {
        display: none;
    }
`

const AbsoluteWrapper = styled(Box)`
    margin-bottom: -3.2rem;

    @media (max-width: 1375px) {
        display: none;
    }
`

const FitButton = styled(LinkButton)`
    width: fit-content;
`

const RightFlex = styled(Flex)`
    @media (max-width: 1375px) {
        ${Header} {
            color: var(--color-black);
        }
        ${FitButton} {
            border: 2px solid var(--color-red);
            color: var(--color-red);
            background: transparent;

            &:hover {
                background-color: var(--color-red);
                color: var(--color-white);
            }
        }
    }
`

const White = styled(Header)`
    color: var(--color-white);
    width: 38.4rem;
`

const query = graphql`
    query {
        deriv: file(relativePath: { eq: "smarttrader.png" }) {
            ...fadeIn
        }
        dbot: file(relativePath: { eq: "interim-dbot.png" }) {
            ...fadeIn
        }
        dmt5: file(relativePath: { eq: "interim-dmt5.png" }) {
            ...fadeIn
        }
    }
`

const HeroDeriv = ({ interim_type }) => {
    const data = useStaticQuery(query)
    const is_dbot = interim_type === 'dbot'
    const is_deriv = interim_type === 'deriv'
    const is_dmt5 = interim_type === 'dmt5'
    return (
        <>
            <Section background={is_dmt5 ? PlatformMt5 : Platform} p="3.2rem 0">
                <Container jc="space-around">
                    <Flex fd="column" ai="center" max_width="28.2rem">
                        <Header as="h3" mb="4rem" align="center">
                            {localize('Be among the first to try Deriv')}
                        </Header>
                        <FitButton secondary to="/">
                            {localize('Visit Deriv.com now')}
                        </FitButton>
                        <CtaBinary />
                    </Flex>
                    <AbsoluteWrapper>
                        <QueryImage data={data[interim_type]} width="54rem" height="29.6rem" />
                    </AbsoluteWrapper>

                    <RightFlex fd="column" ml="2.4rem" ai="center">
                        {is_deriv && (
                            <>
                                <White as="h3" mb="3rem" align="center">
                                    {localize('Love trading on Binary.com’s signature platform? ')}
                                </White>
                                <FitButton
                                    external
                                    white
                                    to={smarttrader_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {localize('Try SmartTrader on Deriv.com')}
                                </FitButton>
                            </>
                        )}
                        {is_dbot && (
                            <>
                                <White as="h3" mb="3rem" align="center">
                                    {localize('Love Binary Bot?')}
                                </White>
                                <FitButton
                                    external
                                    white
                                    to={deriv_app_url + '/bot'}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {localize('Try DBot on Deriv.com')}
                                </FitButton>
                            </>
                        )}
                        {is_dmt5 && (
                            <>
                                <White as="h3" mb="3rem" align="center">
                                    {localize('Love MT5 on Binary.com?')}
                                </White>
                                <FitButton
                                    external
                                    white
                                    to={deriv_app_url + '/bot'}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {localize('Try MT5 on Deriv.com')}
                                </FitButton>
                            </>
                        )}
                        <CtaBinary is_white />
                    </RightFlex>
                </Container>
            </Section>
        </>
    )
}

HeroDeriv.propTypes = {
    interim_type: PropTypes.string,
}

export default HeroDeriv
