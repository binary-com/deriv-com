import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
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
        platform: file(relativePath: { eq: "hero-platform.png" }) {
            ...fadeIn
        }
    }
`

const HeroDeriv = ({ interim_type }) => {
    const data = useStaticQuery(query)
    return (
        <>
            <Section bg="var(--color-black)" p="8rem 0">
                <Container fw="wrap-reverse">
                    <ResponsiveFlex fd="column" max_width="58.8rem">
                        <Header as="h2" mb="1.2rem">
                            {interim_type === 'dbot'
                                ? localize('Introducing Deriv — the home to DBot')
                                : localize(
                                      'Introducing Deriv — our new comprehensive online trading service',
                                  )}
                            {}
                        </Header>
                        <Header as="h4" weight="normal" mb="4rem">
                            {localize('Built upon 20+ years of experience')}
                        </Header>
                        <FitButton secondary to="/dtrader">
                            {localize('Explore Deriv')}
                        </FitButton>
                    </ResponsiveFlex>
                    <ImgWrapper>
                        <QueryImage
                            width="58.9rem"
                            height="34.5rem"
                            data={data['platform']}
                            alt="Deriv platforms"
                        />
                    </ImgWrapper>
                </Container>
            </Section>
            <Container p="8rem 0">
                <Header as="h4" weight="normal" align="center">
                    {localize(
                        'In 2019, we celebrated our 20th year anniversary. Inspired by your love for online trading, we decided to create something new, clean, and modern as we enter our 21st year.',
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
