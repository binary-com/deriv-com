import React from 'react'
import styled, { css } from 'styled-components'
import { Flex, SectionContainer } from 'components/containers'
import { Header, Text } from 'components/elements'
import { Localize } from 'components/localization'
import FinancialIcon from 'images/svg/dmt5/financial.svg'
import SwapFreeIcon from 'images/svg/dmt5/swap-free-platform.svg'
import DerivedIcon from 'images/svg/dmt5/derived.svg'
import CFDsIcon from 'images/svg/dmt5/cfds.svg'
import device from 'themes/device'
import { TString } from 'types/generics'
import useBuildVariant from 'features/hooks/use-build-variant'

type ContentType = {
    header: TString
    text: TString
    icon: React.ReactElement
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
        text: '_t_Trade CFDs on our synthetics, baskets, and derived FX with asset prices derived from simulated and real-world markets._t_',
        icon: <StyledIcon src={DerivedIcon} alt="derived-icon" />,
    },
    {
        header: '_t_Financial_t_',
        text: '_t_Trade CFDs on forex, stocks & indices, cryptocurrencies, and commodities on high leverage._t_',
        icon: <StyledIcon src={FinancialIcon} alt="financial-icon" />,
    },
    {
        header: '_t_Swap-free_t_',
        text: '_t_Trade selected derived and financial assets without overnight charges._t_',
        icon: <StyledIcon src={SwapFreeIcon} alt="swap-free-icon" />,
    },
]

const eucontent: ContentType[] = [
    {
        header: '_t_CFDs_t_',
        text: '_t_Trade CFDs on forex, stocks, stock indices, synthetics, cryptocurrencies, and commodities with leverage._t_',
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

const StyledHeader = styled(Header)<StyledHeaderType>`
    margin: 24px 0 8px;
    color: var(--color-black-9);
    @media ${device.mobileL} {
        font-size: ${({ mobile_font_size }) => mobile_font_size};
        margin: ${({ mobile_margin }) => mobile_margin};
    }
`
const StyledMainHeader = styled(Header)<StyledHeaderType>`
    margin: 0 0 40px;
    color: var(--color-black-9);
    @media ${device.tablet} {
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
    const { region } = useBuildVariant()
    const chosen_content = region === "eu" ? eucontent : content

    return (
        <Section>
            <StyledMainHeader
                mobile_font_size="32px"
                mobile_margin="0 0 24px"
                align="center"
                as="h2"
                type="page-title"
                mb="4rem"
            >
                <Localize
                    translate_text={
                        region === "eu"
                            ? '_t_Flexibility with multiple markets_t_'
                            : '_t_Focused accounts for a focused strategy_t_'
                    }
                />
            </StyledMainHeader>
            <Flex mb="4rem" tablet_direction="column" tablet_ai="center" tablet={{ m: '0' }}>
                {chosen_content.map((item, idx) => {
                    return (
                        ((region === "eu" && item.show_eu) ||
                            (region !== "eu" && !item.show_eu) ||
                            item.show_always) && (
                            <ClientCard key={idx}>
                                {item.icon}
                                <StyledHeader
                                    mobile_margin="16px 0 8px"
                                    mobile_font_size="20px"
                                    as="h4"
                                    type="sub-section-title"
                                >
                                    <Localize translate_text={item.header} />
                                </StyledHeader>
                                <StyledText>
                                    <Localize translate_text={item.text} />
                                </StyledText>
                            </ClientCard>
                        )
                    )
                })}
            </Flex>
        </Section>
    )
}

export default Flexibility
