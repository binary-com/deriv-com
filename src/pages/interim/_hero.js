import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import CtaBinary from './_cta-binary'
import { Container, Flex, Box } from 'components/containers'
import { Header, QueryImage } from 'components/elements'
import { LinkButton } from 'components/form'
import { localize } from 'components/localization'
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
    @media ${device.tabletS} {
        display: none;
    }
`

const ResponsiveFlex = styled(Flex)`
    @media (max-width: 1400px) {
        margin-top: 2.4rem;
        max-width: 100%;
        margin-right: 0;
    }
`

const FitButton = styled(LinkButton)`
    width: fit-content;
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
                <Container fw="wrap-reverse">
                    <ResponsiveFlex fd="column" max_width="58.8rem" ai="center">
                        <ResponsiveHeader as="h2" mb="1.2rem" align="center">
                            {is_deriv && localize('You inspired us to create something new')}
                            {is_dbot && localize('Introducing DBot on Deriv.com')}
                            {is_dmt5 && localize('Introducing MT5 on Deriv.com')}
                        </ResponsiveHeader>
                        <Header as="h4" weight="normal" mb="4rem" align="center">
                            {is_deriv &&
                                localize(
                                    'Enjoy trading your way on Deriv.com, Binary.com’s new home',
                                )}
                            {is_dbot && localize('Our improved bot builder at our new home')}
                            {is_dmt5 && localize('Trade on MT5 at our new home')}
                        </Header>
                        <FitButton secondary to="/">
                            {localize('Explore Deriv.com')}
                        </FitButton>
                        <CtaBinary is_white />
                    </ResponsiveFlex>
                    <ImgWrapper>
                        <QueryImage
                            width="58.9rem"
                            data={data[interim_type]}
                            alt={`${interim_type} platforms`}
                        />
                    </ImgWrapper>
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
