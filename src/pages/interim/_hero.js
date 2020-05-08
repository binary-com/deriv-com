import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import CtaBinary from './_cta-binary'
import { Container, Flex, Box } from 'components/containers'
import { Header, QueryImage, LocalizedLinkText } from 'components/elements'
import { LinkButton } from 'components/form'
import { localize, Localize } from 'components/localization'
import { binary_url } from 'common/utility'
import device from 'themes/device'

const Section = styled(Box)`
    ${Header} {
        color: var(--color-white);
    }
`
const ResponsiveHeader = styled(Header)`
    @media ${device.mobileL} {
        font-size: var(--text-size-l);
    }
`

const ImgWrapper = styled(Box)`
    margin-left: 2.4rem;
    width: 100%;
    max-width: 56.5rem;

    @media ${device.tabletS} {
        margin-left: 0;
    }
`

const ResponsiveFlex = styled(Flex)`
    @media (max-width: 1400px) {
        margin-bottom: 2.4rem;
        max-width: 100%;
        margin-right: 0;
    }
`

const FitButton = styled(LinkButton)`
    width: fit-content;
`

const Desktop = styled(Flex)`
    @media ${device.tabletL} {
        display: none;
    }
`
const Mobile = styled(Flex)`
    display: none;

    @media ${device.tabletL} {
        display: flex;
    }
`

const query = graphql`
    query {
        deriv: file(relativePath: { eq: "hero-platform.png" }) {
            ...fadeIn
        }
        dbot: file(relativePath: { eq: "interim-dbot-bg.png" }) {
            ...fadeIn
        }
        dmt5: file(relativePath: { eq: "interim-dmt5-bg.png" }) {
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
            <Section bg="var(--color-black)" p="8rem 0">
                <Container fw="wrap">
                    <ResponsiveFlex fd="column" max_width="58.8rem" ai="center">
                        {is_deriv && (
                            <ResponsiveHeader as="h2" align="center" lh="1.25">
                                {localize('You inspired us')}
                            </ResponsiveHeader>
                        )}
                        <ResponsiveHeader as="h2" mb="1.2rem" align="center" lh="1.25">
                            {is_deriv && localize('to create something new')}
                            {is_dbot && localize('Introducing DBot on Deriv.com')}
                            {is_dmt5 && localize('Introducing MT5 on Deriv.com')}
                        </ResponsiveHeader>
                        <Header as="h4" weight="normal" mb="4rem" align="center">
                            {is_deriv && (
                                <Localize
                                    translate_text="Enjoy trading your way on <0>Deriv.com</0>, <1>Binary.com</1>’s new home"
                                    components={[
                                        <LocalizedLinkText
                                            key={0}
                                            weight="bold"
                                            to="/"
                                            color="white"
                                        />,
                                        <LocalizedLinkText
                                            key={1}
                                            external
                                            color="white"
                                            weight="bold"
                                            to={binary_url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        />,
                                    ]}
                                />
                            )}
                            {is_dbot && localize('Our improved bot builder at our new home')}
                            {is_dmt5 && localize('Trade on MT5 at our new home')}
                        </Header>
                        <Desktop width="auto" fd="column" ai="center">
                            <FitButton secondary to="/">
                                {localize('Explore Deriv.com')}
                            </FitButton>
                            <CtaBinary is_white />
                        </Desktop>
                    </ResponsiveFlex>
                    <ImgWrapper>
                        <QueryImage
                            width="100%"
                            data={data[interim_type]}
                            alt={`${interim_type} platforms`}
                        />
                    </ImgWrapper>
                    <Mobile mt="4rem" fd="column" ai="center">
                        <FitButton secondary to="/">
                            {localize('Explore Deriv.com')}
                        </FitButton>
                        <CtaBinary is_white />
                    </Mobile>
                </Container>
            </Section>
            <Container p="8rem 0" fd="column">
                {is_dbot && (
                    <Header as="h4" weight="normal" align="center" mb="3.6rem">
                        {localize('You read right. We are rebranding Binary.com to Deriv.com.')}
                    </Header>
                )}
                <Header as="h4" weight="normal" align="center">
                    {(is_deriv || is_dmt5) &&
                        localize(
                            'In 2019, we celebrated our 20th year anniversary. Inspired by your love for online trading, we decided to create something new as part of our renewed commitment to making online trading effortless and accessible for you.',
                        )}
                    {is_dbot &&
                        localize(
                            'Here’s why: In 2019, we celebrated our 20th year anniversary. Inspired by your love for online trading, we decided to create something new as part of our renewed commitment to making online trading effortless and accessible for you.',
                        )}
                </Header>
            </Container>
        </>
    )
}

HeroDeriv.propTypes = {
    interim_type: PropTypes.string,
}
export default HeroDeriv
