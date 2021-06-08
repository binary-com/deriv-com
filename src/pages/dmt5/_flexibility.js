import React from 'react'
import styled, { css } from 'styled-components'
import { Flex, SectionContainer } from 'components/containers'
import { Header, Text } from 'components/elements'
import { LinkButton } from 'components/form'
import { Localize, localize } from 'components/localization'
import FinancialStpIcon from 'images/svg/financial-stp.svg'
import FinancialIcon from 'images/svg/financial.svg'
import SyntheticIcon from 'images/svg/synthetic.svg'
import device from 'themes/device'

const BaseIconStyle = css`
    @media ${device.mobileL} {
        width: 24px;
        height: 24px;
    }
`
const StyledFinancialStpIcon = styled.img`
    ${BaseIconStyle}
`
const StyledFinancialIcon = styled.img`
    ${BaseIconStyle}
`
const StyledSyntheticIcon = styled.img`
    ${BaseIconStyle}
`

const content = [
    {
        header: <Localize translate_text="Synthetic" />,
        text: (
            <Localize translate_text="Trade CFDs on our exclusive, proprietary synthetic indices 24/7 which simulate real-world market movements." />
        ),
        icon: <StyledSyntheticIcon src={SyntheticIcon} alt="synthetic icon" />,
    },
    {
        header: <Localize translate_text="Financial" />,
        text: (
            <Localize translate_text="Trade major (standard and micro-lots) and minor currency pairs, commodities, cryptocurrencies, and stocks & indices with high leverage." />
        ),
        icon: <StyledFinancialIcon src={FinancialIcon} alt="financial icon" />,
    },
    {
        header: <Localize translate_text="Financial STP" />,
        text: (
            <Localize translate_text="Trade major, minor, and exotic currency pairs, and cryptocurrencies with tight spreads and higher trade volumes, straight to the market." />
        ),
        icon: <StyledFinancialStpIcon src={FinancialStpIcon} alt="financial stp icon" />,
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
        max-height: unset;
        padding: 24px;
        max-width: 328px;
        width: 100%;

        :first-child {
            margin: 0 0 24px 0;
        }
    }
`
const StyledLinkButton = styled(LinkButton)`
    display: inline-flex;
    align-items: center;
    padding: 10px 16px;
    height: 40px;
    border: unset;
    width: auto;
    margin: auto;
`
const StyledHeader = styled(Header)`
    @media ${device.mobileL} {
        font-size: ${(props) => props.mobile_font_size};
        margin: ${(props) => props.mobile_margin};
    }
`
const StyledText = styled(Text)`
    margin-top: 8px;

    @media ${device.mobileL} {
        font-size: 16px;
        line-height: 24px;
        margin-top: 0;
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
                type="page-title"
                mb="4rem"
            >
                {localize('Flexibility with multiple account types')}
            </StyledHeader>
            <Flex mb="4rem" tablet_direction="column" tablet_ai="center" tablet={{ m: '0' }}>
                {content.map((item, idx) => {
                    return (
                        <ClientCard key={idx}>
                            <Flex height="unset" ai="center" mobileL={{ mb: '8px' }}>
                                <StyledHeader
                                    mobile_margin="unset"
                                    mobile_font_size="20px"
                                    as="h4"
                                    type="sub-section-title"
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
            <StyledLinkButton
                external="true"
                secondary="true"
                type="mt5"
                target="_blank"
                rel="noopener noreferrer"
            >
                {localize('Go to DMT5 dashboard')}
            </StyledLinkButton>
        </Section>
    )
}

export default Flexibility
