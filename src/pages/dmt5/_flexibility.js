import React from 'react'
import styled from 'styled-components'
import { deriv_app_url } from 'common/utility'
import { Flex, SectionContainer } from 'components/containers'
import { Header, Text } from 'components/elements'
import { LinkButton } from 'components/form'
import { Localize, localize } from 'components/localization'
import FinancialStpIcon from 'images/svg/financial-stp.svg'
import FinancialIcon from 'images/svg/financial.svg'
import SyntheticIcon from 'images/svg/synthetic.svg'
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
            <Localize translate_text="Trade major, minor, and exotic currency pairs, and cryptocurrencies with tight spreads and higher trade volumes, straight to the market." />
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
        max-height: 184px;
        padding: 24px 24px 24px;
        max-width: 328px;

        :first-child {
            margin: 0 0 24px 0;
        }
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
const StyledHeader = styled(Header)`
    @media ${device.mobileL} {
        font-size: ${(props) => props.mobile_font_size};
        margin: ${(props) => props.mobile_margin};
    }
`
const StyledText = styled(Text)`
    @media ${device.mobileL} {
        font-size: 16px;
        line-height: 24px;
    }
`

const Flexibility = () => {
    return (
        <Section>
            <StyledHeader
                mobile_font_size="32px"
                mobile_margin="0 0 24px"
                align="center"
                as="h2"
                mb="4rem"
            >
                {localize('Flexibility with multiple account types')}
            </StyledHeader>
            <Flex mb="4rem" tablet_direction="column" tablet_ai="center" tablet={{ m: '0' }}>
                {content.map((item, idx) => {
                    return (
                        <ClientCard key={idx}>
                            <Flex height="unset" ai="center">
                                <StyledHeader
                                    mobile_margin="0 0 8px"
                                    mobile_font_size="20px"
                                    mb="0.8rem"
                                    as="h4"
                                >
                                    {item.header}
                                </StyledHeader>
                                {item.icon}
                            </Flex>
                            <StyledText>{item.text}</StyledText>
                        </ClientCard>
                    )
                })}
            </Flex>
            <StyledLinkButton external secondary="true" to={`${deriv_app_url}/mt5/`}>
                {localize('Go to DMT5 dashboard')}
            </StyledLinkButton>
        </Section>
    )
}

export default Flexibility
