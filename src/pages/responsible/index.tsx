import React from 'react'
import styled from 'styled-components'
import Loadable from '@loadable/component'
import SecureAccount from './_securing-account'
import { SEO, SectionContainer, Container, Flex } from 'components/containers'
import Layout from 'components/layout/layout'
import { Header, Text } from 'components/elements'
import { localize, WithIntl } from 'components/localization'
import NoneEuBackground from 'images/common/responsible-trading-bg.png'
import EuBackground from 'images/common/responsible-trading-eu-bg.png'
import device from 'themes/device'
import { DerivStore } from 'store'
import { useCountryRule } from 'components/hooks/use-country-rule'

const TradingResponsibly = Loadable(() => import('./_trading-responsibly'))
const TradingLimits = Loadable(() => import('./_trading-limits'))
const NeedHelp = Loadable(() => import('./_need-help'))
const RoleBanner = Loadable(() => import('./_banner'))

const Hero = styled(Flex)`
    background-image: url(${(props) => props.background_image});
    background-position: center;
    background-size: cover;
    padding: 12rem 0 8rem;
`

const Section = styled(SectionContainer)`
    padding: 0;
`

const StyledHeader = styled(Header)`
    @media ${device.tablet} {
        max-width: 90%;
        margin: auto;
        margin-bottom: 1.6rem;
    }
`

const ResponsibleTrading = () => {
    const { is_eu_country } = React.useContext(DerivStore)
    const { is_eu, is_non_eu } = useCountryRule()
    const HeroBackground = is_eu_country ? EuBackground : NoneEuBackground

    return (
        <Layout>
            <SEO
                title={localize('Secure and responsible online trading guidelines | Deriv')}
                description={localize(
                    'Read our guidelines on secure and responsible trading. Understand the risks involved in online trading and how you can manage them.',
                )}
            />
            <Section>
                <Hero background_image={HeroBackground}>
                    <Container>
                        <Flex direction="column">
                            <StyledHeader
                                as="h1"
                                type="display-title"
                                color="white"
                                align="center"
                                lh="1.25"
                                mb="1.6rem"
                            >
                                {localize('Secure and responsible trading')}
                            </StyledHeader>
                            <Text align="center" max_width="79.2rem" m="0 auto" color="white">
                                {is_eu &&
                                    localize(
                                        'Trading online can be exciting, but it’s important to keep in mind that there are risks involved including addiction and financial losses. To avoid the danger of addiction, it is important that you engage in a careful self-analysis to check if you are at risk, and follow some basic principles and guidelines.',
                                    )}
                                {is_non_eu &&
                                    localize(
                                        'Trading online can be exciting, but it’s important to be reminded that there are risks involved. We encourage all our users to secure their accounts and trade responsibly to experience the best in online trading.',
                                    )}
                            </Text>
                        </Flex>
                    </Container>
                </Hero>
                <SecureAccount />
                <TradingResponsibly />
                <TradingLimits />
                {is_eu && <NeedHelp />}
                <RoleBanner />
            </Section>
        </Layout>
    )
}

export default WithIntl()(ResponsibleTrading)
