import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
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
    width: 100%;
    ${(props) =>
        props.is_dmt5
            ? css`
                  background-image: url(${PlatformMt5});
              `
            : css`
                  background-image: url(${Platform});
              `}
    background-size: cover;
    position: relative;

    @media (max-width: 1240px) {
        display: none;
    }
`

const Responsive = styled(Container)`
    @media ${device.tablet} {
        flex-direction: column;
    }
`

const AbsoluteWrapper = styled(Box)`
    margin-bottom: -3.2rem;
    width: 54rem;
    @media (max-width: 1370px) {
        display: none;
    }
`

const MarBot = styled(Flex)`
    margin-left: ${(props) => (props.is_dmt5 ? '1.2rem' : '0')};
`

const FitButton = styled(LinkButton)`
    width: fit-content;
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
        deriv_mobile: file(relativePath: { eq: "deriv-platform-banner.png" }) {
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
            <Section is_dmt5={is_dmt5} p="3.2rem 0">
                <Responsive jc="space-between" position="relative">
                    <Flex fd="column" ai="center" max_width="28.2rem">
                        <Header as="h3" mb="4rem" align="center">
                            {localize('Be among the first to try Deriv.com')}
                        </Header>
                        <FitButton secondary to="/">
                            {localize('Visit Deriv.com now')}
                        </FitButton>
                        <CtaBinary />
                    </Flex>
                    <AbsoluteWrapper>
                        <QueryImage data={data[interim_type]} width="100%" height="29.6rem" />
                    </AbsoluteWrapper>

                    <MarBot is_dmt5={is_dmt5} width="auto" fd="column" ai="center">
                        {is_deriv && (
                            <>
                                <White as="h3" mb="3rem" align="center">
                                    {localize('Love trading on Binary.com’s signature platform?')}
                                </White>
                                <FitButton
                                    external
                                    white
                                    to={smarttrader_url}
                                    is_binary_link
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
                    </MarBot>
                </Responsive>
            </Section>
        </>
    )
}

HeroDeriv.propTypes = {
    interim_type: PropTypes.string,
}

export default HeroDeriv
