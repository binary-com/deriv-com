import React from 'react'
import styled, { css } from 'styled-components'
import { Flex, SectionContainer } from 'components/containers'
import { Header, Text } from 'components/elements'
import { LinkButton } from 'components/form'
import { Localize } from 'components/localization'
import FinancialIcon from 'images/svg/dmt5/financial.svg'
import DerivedIcon from 'images/svg/dmt5/derived.svg'
import CFDsIcon from 'images/svg/dmt5/cfds.svg'
import device from 'themes/device'
import useRegion from 'components/hooks/use-region'
import { TString } from 'types/generics'

type ContentType = {
    header: TString
    text: TString
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
    }
`
const StyledIcon = styled.img`
    ${BaseIconStyle}
`

const content: ContentType[] = [
    {
        header: '_t_Derived_t_',
        text: '_t_Trade CFDs on indices derived from real-world market movements._t_',
        icon: <StyledIcon src={DerivedIcon} alt="derived-icon" />,
    },
    {
        header: '_t_Financial_t_',
        text: '_t_Trade forex, stocks & indices, cryptocurrencies, and commodities on high leverage._t_',
        icon: <StyledIcon src={FinancialIcon} alt="financial-icon" />,
    },
]

const eucontent: ContentType[] = [
    {
        header: '_t_CFDs_t_',
        text: '_t_Trade CFDs on forex, stocks, stock indices, synthetic indices, cryptocurrencies, and commodities with leverage._t_',
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
    padding: 3.2rem 2.4rem 4rem;
    position: relative;
    height: 196px;

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
    @media ${device.mobileL} {
        font-size: ${({ mobile_font_size }) => mobile_font_size};
        margin: ${({ mobile_margin }) => mobile_margin};
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
    const { is_eu } = useRegion()

    const chosen_content = is_eu ? eucontent : content
    const title: TString = is_eu
        ? '_t_Flexibility with multiple markets_t_'
        : '_t_Flexibility with two account types_t_'

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
                <Localize translate_text={title} />
            </StyledHeader>
            <Flex mb="4rem" tablet_direction="column" tablet_ai="center" tablet={{ m: '0' }}>
                {chosen_content.map(({ show_eu, show_always, header, icon, text }) => {
                    return (
                        ((is_eu && show_eu) || (!is_eu && !show_eu) || show_always) && (
                            <ClientCard key={header}>
                                <Flex height="unset" ai="center" mobileL={{ mb: '8px' }}>
                                    <StyledHeader
                                        mobile_margin="unset"
                                        mobile_font_size="20px"
                                        as="h4"
                                        type="sub-section-title"
                                    >
                                        <Localize translate_text={header} />
                                    </StyledHeader>
                                    {icon}
                                </Flex>
                                <StyledText>
                                    <Localize translate_text={text} />
                                </StyledText>
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
                <Localize translate_text="_t_Go to Deriv MT5 dashboard_t_" />
            </StyledLinkButton>
        </Section>
    )
}

export default Flexibility
