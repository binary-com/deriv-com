import React from 'react'
import styled, { css } from 'styled-components'
import { Flex, SectionContainer } from 'components/containers'
import { Header, Text } from 'components/elements'
import { LinkButton } from 'components/form'
import { Localize, localize } from 'components/localization'
import FinancialIcon from 'images/svg/dmt5/financial.svg'
import DerivedIcon from 'images/svg/dmt5/derived.svg'
import CFDsIcon from 'images/svg/dmt5/cfds.svg'
import device from 'themes/device'
import useRegion from 'components/hooks/use-region'

type ContentType = {
    header?: React.ReactElement
    text?: React.ReactElement
    icon?: React.ReactElement
    show_eu?: boolean
    show_always?: boolean
}

type StyledHeaderType = {
    mobile_font_size: string
    mobile_margin: string
}

const BaseIconStyle = css`
    @media ${device.mobileL} {
        width: 32px;
        height: 32px;
        margin: 0 0 16px;
    }
`
const StyledIcon = styled.img`
    ${BaseIconStyle}
`

const content: ContentType[] = [
    {
        header: <Localize translate_text="Derived" />,
        text: (
            <Localize translate_text="Trade CFDs on our synthetics, baskets, and derived FX with asset prices derived from simulated and real-world markets." />
        ),
        icon: <StyledIcon src={DerivedIcon} alt="derived-icon" />,
    },
    {
        header: <Localize translate_text="Financial" />,
        text: (
            <Localize translate_text="Trade CFDs on forex, stocks & indices, cryptocurrencies, and commodities on high leverage." />
        ),
        icon: <StyledIcon src={FinancialIcon} alt="financial-icon" />,
    },
]

const eucontent: ContentType[] = [
    {
        header: <Localize translate_text="CFDs" />,
        text: (
            <Localize translate_text="Trade CFDs on forex, stocks, stock indices, synthetic indices, cryptocurrencies, and commodities with leverage." />
        ),
        icon: <StyledIcon src={CFDsIcon} alt="cfds-icon" />,
        show_eu: true,
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
    box-shadow: 0 22px 20px 0 rgba(14, 14, 14, 0.1);
    max-width: 40rem;
    padding: 24px;
    position: relative;
    max-width: 282px;
    border-radius: 16px;

    :first-child {
        margin: 0;
    }
    @media ${device.tablet} {
        margin: 0 0 24px 0;
        height: auto;
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

const StyledHeader = styled(Header)<StyledHeaderType>`
    margin: 24px 0 40px;
    color: var(--color-black-9);
    @media ${device.mobileL} {
        font-size: ${({ mobile_font_size }) => mobile_font_size};
        margin: ${({ mobile_margin }) => mobile_margin};
    }
`
const StyledText = styled(Text)`
    margin-top: 8px;
    font-size: 14px;
    color: var(--color-black-9);

    @media ${device.mobileL} {
        font-size: 16px;
        line-height: 24px;
        margin-top: 0;
    }
`

const Flexibility = () => {
    const { is_eu } = useRegion()

    const chosen_content = is_eu ? eucontent : content
    const title = is_eu
        ? localize('Flexibility with multiple markets')
        : localize('Focus on your preferred markets')

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
                {title}
            </StyledHeader>
            <Flex mb="4rem" tablet_direction="column" tablet_ai="center" tablet={{ m: '0' }}>
                {chosen_content.map((item, idx) => {
                    return (
                        ((is_eu && item.show_eu) ||
                            (!is_eu && !item.show_eu) ||
                            item.show_always) && (
                            <ClientCard key={idx}>
                                {item.icon}
                                <StyledHeader
                                    mobile_margin="unset"
                                    mobile_font_size="20px"
                                    as="h4"
                                    type="sub-section-title"
                                >
                                    {item.header}
                                </StyledHeader>
                                <StyledText>{item.text}</StyledText>
                            </ClientCard>
                        )
                    )
                })}
            </Flex>
            <StyledLinkButton
                external
                secondary
                type="mt5"
                target="_blank"
                rel="noopener noreferrer"
            >
                {localize('Go to Deriv MT5 dashboard')}
            </StyledLinkButton>
        </Section>
    )
}

export default Flexibility
