import React from 'react'
import styled from 'styled-components'
import { Flex, SectionContainer } from 'components/containers'
import { Header, Text } from 'components/elements'
import { deriv_app_url } from 'common/utility'
import { Localize, localize } from 'components/localization'
import { LinkButton } from 'components/form'
import SyntheticIcon from 'images/svg/synthetic.svg'
import FinancialIcon from 'images/svg/financial.svg'
import FinancialStpIcon from 'images/svg/financial-stp.svg'
import device from 'themes/device'

const content = [
    {
        header: <Localize translate_text="Synthetic" />,
        text: (
            <Localize translate_text="Trade CFDs on our exclusive, proprietary synthetic indices 24/7 which simulate real-world market movements." />
        ),
        icon: <SyntheticIcon />,
    },
    {
        header: <Localize translate_text="Financial" />,
        text: (
            <Localize translate_text="Trade forex, commodities, cryptocurrencies, major (standard and micro-lots), and minor currency pairs on high leverage." />
        ),
        icon: <FinancialIcon />,
    },
    {
        header: <Localize translate_text="Financial STP" />,
        text: (
            <Localize translate_text="Trade major, minor, and exotic currency pairs with tight spreads and higher trade volumes, straight to the market." />
        ),
        icon: <FinancialStpIcon />,
    },
]
const Section = styled(SectionContainer)`
    display: flex;
    padding: 8rem 12rem;
    justify-content: center;
    flex-direction: column;

    @media ${device.tablet} {
        padding: 40px 16px;
    }
`
const ClientCard = styled.article`
    margin-left: 2rem;
    background-color: var(--color-white);
    border-radius: 4px;
    box-shadow: 0 4px 8px 0 rgba(14, 14, 14, 0.1);
    width: 38.4rem;
    padding: 3.2rem 2.4rem 4rem;
    max-height: 19.2rem;
    height: 100%;
    position: relative;

    :first-child {
        margin: 0;
    }
    @media ${device.laptopM} {
        min-height: 22rem;
        height: 100%;
    }
    @media ${device.tablet} {
        margin: 0 0 24px 0;

        :first-child {
            margin: 0 0 24px 0;
        }
    }
`
const CardContainer = styled(Flex)`
    margin-bottom: 4rem;

    @media ${device.tablet} {
        flex-direction: column;
        align-items: center;
        margin: 0;
    }
`
const StyledLinkButton = styled(LinkButton)`
    padding: 1.4rem 1.6rem;
    font-size: 14px;
    border: unset;
    max-width: 182px;
    width: 100%;
    height: 40px;
    margin: auto;
`

const Flexibility = () => {
    return (
        <Section>
            <Header align="center" as="h2" mb="4rem">
                {localize('Flexibility with multiple account types')}
            </Header>
            <CardContainer>
                {content.map((item, idx) => {
                    return (
                        <ClientCard key={idx}>
                            <Flex height="unset" ai="center">
                                <Header mb="0.8rem" as="h4">
                                    {item.header}
                                </Header>
                                {item.icon}
                            </Flex>
                            <Text>{item.text}</Text>
                        </ClientCard>
                    )
                })}
            </CardContainer>
            {/* <StyledLink> */}
            <StyledLinkButton external secondary="true" to={`${deriv_app_url}/mt5/`}>
                {localize('Go to DMT5 dashboard')}
            </StyledLinkButton>

            {/* <ExternalLink
                    href={`${deriv_app_url}/mt5/`}
                    target="_blank"
                    rel="noopener noreferrer"
                ></ExternalLink> */}
            {/* <Text align="center" size="14px" weight="bold" color="white">
                    {localize('Go to DMT5 dashboard')}
                </Text> */}
            {/* </StyledLink> */}
        </Section>
    )
}

export default Flexibility
