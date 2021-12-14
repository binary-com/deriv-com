import React from 'react'
import styled from 'styled-components'
import OurValues from './_OurValues'
import OurPrinciples from './_OurPrinciples'
import { localize, WithIntl } from 'components/localization'
import Layout from 'components/layout/layout'
import { SEO, SectionContainer } from 'components/containers'
import { Header, Text } from 'components/elements'
import device from 'themes/device'

const FirstSectionContainer = styled(SectionContainer)`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 120px 16px 80px;
    @media ${device.tablet} {
        padding: 40px 16px;
    }

    h2 {
        max-width: 742px;
        padding: 0;
        @media ${device.laptop} {
            font-size: 48px;
        }
    }
`

const StyledFirstSectionText = styled(Text)`
    max-width: 792px;
    padding: 0 0 24px 0;
    line-height: 36px;
    font-weight: 400;
    @media ${device.tablet} {
        padding: 0 0 24px 0;
    }
`

const StartSeparator = styled.div`
    width: 0;
    height: 0;
    border-top: 120px solid transparent;
    border-right: 100vw solid var(--color-grey-30);
    @media ${device.tablet} {
        border-top: 40px solid transparent;
    }
`

const EndSeparator = styled.div`
    width: 0;
    height: 0;
    border-left: 100vw solid var(--color-grey-30);
    border-bottom: 120px solid transparent;
    @media ${device.tablet} {
        border-bottom: 40px solid transparent;
    }
`

const first_section_texts = [
    localize(
        'Deriv is one of the world’s largest online brokers. We offer CFDs and other derivatives on forex, indices, cryptocurrencies, commodities and synthetics to millions of registered users across the globe.',
    ),
    localize(
        'From inception, our goal was to break free of the high commissions and clunky products offered by traditional brokers. And to deliver a first-class experience to digitally inclined traders, regardless of the size of their accounts.',
    ),
    localize(
        'In a journey spanning more than 22 years, we have grown to over 2.5 million customers worldwide. But the mission has remained the same.',
    ),
]

const AboutUs = () => {
    return (
        <Layout>
            <SEO
                // title and description from story page, needs new?
                title={localize('About Us | An Online Trading Platform | Deriv.com')}
                description={localize(
                    'Deriv.com - A Binary.com brand, is a pioneer and award-winning online trading platform in the trading market.',
                )}
            />
            <FirstSectionContainer padding="120px 0 80px" background="var(--color-white)">
                {first_section_texts.map((text, index) => (
                    <StyledFirstSectionText key={index} size="24px">
                        {text}
                    </StyledFirstSectionText>
                ))}
                <Header as="h2" size="48px" align="center" type="page-title">
                    {localize('Make trading accessible to anyone, anywhere')}
                </Header>
            </FirstSectionContainer>
            <StartSeparator />
            <OurValues />
            <EndSeparator />
            <OurPrinciples />
        </Layout>
    )
}

AboutUs.propTypes = {
    // data: PropTypes.object,
}

export default WithIntl()(AboutUs)
