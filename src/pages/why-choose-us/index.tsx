import React from 'react'
import styled from 'styled-components'
import LatamAward from './_latam-forex-award'
import { IconGrid } from './_icon-grid'
import AfricaAward from './_africa-forex-award'
import { SEO, SectionContainer, GridContainer, Flex } from 'components/containers'
import Layout from 'components/layout/layout'
import { Divider, Header, Text } from 'components/elements'
import { Localize, localize, WithIntl } from 'components/localization'
import { Button } from 'components/form'
import device from 'themes/device'
import useHandleSignup from 'components/hooks/use-handle-signup'
import useRegion from 'components/hooks/use-region'

const ResponsiveLinkButton = styled(Button)`
    @media ${device.mobileL} {
        font-size: 1.75rem;
    }
`

const Section = styled(SectionContainer)`
    background-color: 'transparent';
`
const StyledHeader = styled(Header)`
    max-width: 100%;
    margin: 0 auto;
`
const Column = styled.article`
    max-width: 340px;

    ${Header} {
        margin-bottom: 1rem;
    }

    @media ${device.tabletL} {
        max-width: 100%;

        ${Text} {
            font-size: 2rem;
        }
    }
`

const ColumnContainer = styled(Flex)`
    @media ${device.tablet} {
        flex-direction: column;
        align-items: center;

        article:nth-child(2) {
            margin: 3rem 0;
        }
    }
`

const ResponsiveHeader = styled(StyledHeader)`
    @media ${device.mobileL} {
        font-size: 5rem;
    }
`

const WhyChooseUs = () => {
    const { is_latam, is_africa } = useRegion()
    const handleSignup = useHandleSignup()

    return (
        <Layout>
            <SEO
                title={localize('_t_Why choose us for your online trading | Deriv_t_')}
                description={localize(
                    '_t_We’re steadfast in our commitment to high ethical standards. Find more reasons to know why Deriv is the choice of online traders._t_',
                )}
            />
            <Section>
                <GridContainer>
                    <ResponsiveHeader as="h1" type="display-title" align="center">
                        <Localize translate_text="_t_Why choose us_t_" />
                    </ResponsiveHeader>
                    <StyledHeader
                        as="h4"
                        type="sub-section-title"
                        align="center"
                        weight="normal"
                        lh="3rem"
                        pt="1.6rem"
                    >
                        <Localize translate_text="_t_Client trust is our highest priority, and that’s why millions of users choose us. Here are some of the things that make us a leading online trading service provider._t_" />
                    </StyledHeader>
                </GridContainer>
            </Section>
            <Divider />
            <Section>
                <IconGrid />
            </Section>
            {is_latam ? <LatamAward /> : <></>}
            {is_africa ? <AfricaAward /> : <></>}
            <Divider />
            <Section>
                <GridContainer>
                    <Header as="h2" type="page-title" size="4rem" align="center">
                        <Localize translate_text="_t_Try Deriv at no risk_t_" />
                    </Header>
                    <ColumnContainer mt="4rem" jc="space-around">
                        <Column>
                            <Header as="h4" type="sub-section-title" align="center">
                                <Localize translate_text="_t_Unlimited virtual funds_t_" />
                            </Header>
                            <Text align="center">
                                <Localize translate_text="_t_Practise trading with Deriv as long as you like. No risk, no hidden fees._t_" />
                            </Text>
                        </Column>
                        <Column>
                            <Header as="h4" type="sub-section-title" align="center">
                                <Localize translate_text="_t_All markets and platforms_t_" />
                            </Header>
                            <Text align="center">
                                <Localize translate_text="_t_Enjoy full access to all our markets and platforms._t_" />
                            </Text>
                        </Column>
                        <Column>
                            <Header as="h4" type="sub-section-title" align="center">
                                <Localize translate_text="_t_No credit card needed_t_" />
                            </Header>
                            <Text align="center">
                                <Localize translate_text="_t_Sign up with just your email. No credit card or minimum deposit required._t_" />
                            </Text>
                        </Column>
                    </ColumnContainer>
                    <Flex mt="3.2rem">
                        <ResponsiveLinkButton id="dm-about-signup" secondary onClick={handleSignup}>
                            <Localize translate_text="_t_Sounds great. Let's get started._t_" />
                        </ResponsiveLinkButton>
                    </Flex>
                </GridContainer>
            </Section>
        </Layout>
    )
}

export default WithIntl()(WhyChooseUs)
