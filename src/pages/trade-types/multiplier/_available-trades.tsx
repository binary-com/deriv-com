import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import BasketIndicesIcon from 'images/svg/markets/basket_indices_new.svg'
import { SectionContainer, Flex, Container } from 'components/containers'
import { Localize } from 'components/localization'
import { Header } from 'components/elements'
import device from 'themes/device'
//SVG
import ForexIcon from 'images/svg/trade-types/market-forex.svg'
import SyntheticIcon from 'images/svg/trade-types/market-synthetic-indices.svg'
import CryptocurrencyIcon from 'images/svg/markets/cryptocurrencies.svg'
import { withLangDirection } from 'themes/function'
import { useIsRtl } from 'components/hooks/use-isrtl'

type CardProps = {
    active_tab: string
    display_name: React.ReactNode
    name: string
    onTabChange: (arg0: string) => void
}

type AvailableTradesProps = {
    Cryptocurrencies: React.ElementType
    display_title: React.ReactNode
    Forex: React.ElementType
    SyntheticIndices: React.ElementType
    BasketIndices: React.ElementType
}

const StyledHeader = styled(Header)`
    @media ${device.tabletL} {
        max-width: 35.75rem;
        font-size: 32px;
        margin: 0 auto;
    }
`

const StyledSection = styled(SectionContainer)`
    padding: 5rem 0;
`

const StyledContainer = styled(Container)`
    margin-top: 2.8rem;

    @media ${device.tabletL} {
        width: 100%;
        margin-top: 0;
    }
`
const CardWrapper = styled(Flex)`
    max-width: 100.6rem;
    justify-content: flex-start;
    z-index: 1;
    height: 8rem;
    align-items: flex-end;
    padding-left: 0.8rem;
    overflow: hidden;

    div:first-child {
        z-index: 3;
        margin: 0 -0.3rem;
    }
    div:nth-child(2) {
        z-index: 2;
    }
    div:last-child {
        z-index: 1;
    }

    @media ${device.mobileL} {
        overflow: scroll;
    }
`
const backgroundAndShadow = css`
    background-color: var(--color-white);
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.05);
`

type TCardContainer = {
    active_tab?: string
    name?: string
    is_rtl: boolean
}

const CardContainer = styled(Flex)<TCardContainer>`
    position: relative;
    width: fit-content;
    min-height: 7.72rem;
    height: auto;
    padding: 0;
    margin: 0 -0.6rem;
    cursor: pointer;
    z-index: ${(props) => (props.active_tab === props.name ? '4 !important' : '')};
    padding-right: 5rem;

    :first-child {
        width: 25%;
    }
    :nth-child(2) {
        width: 35%;
    }
    :last-child {
        width: 40%;
    }
    ${Flex} {
        padding: 2.71rem 0 0 3.2rem;

        img {
            width: 32px;
            height: 32px;
            margin-right: 1.6rem;
            display: ${(props) => (props.active_tab === props.name ? 'block' : 'none')};
        }
        h4 {
            color: ${(props) =>
                props.active_tab === props.name ? 'var(--color-red)' : 'var(--color-black-3)'};
            opacity: ${(props) => (props.active_tab === props.name ? '1' : '0.56')};
            margin-left: ${(props) => (props.active_tab === props.name ? '0' : '10px')};
        }
        @media ${device.tabletL} {
            height: 100%;
            justify-content: flex-start;
            padding: 10px 28px 0 8px;
            width: fit-content;

            img {
                width: 16px;
                height: 16px;
                margin-right: 1rem;
            }
        }
    }
    ::before {
        content: ''; /* To generate the box */
        width: 100%;
        position: absolute;
        top: 0;
        right: 0;
        bottom: -1rem;
        left: 0;
        z-index: -1;
        border-bottom: none;
        border-radius: 10px 30px 0 0;
        background: var(--color-grey-36);
        transform: perspective(14px) rotateX(1.4deg);
        transform-origin: ${({ is_rtl }) => (is_rtl ? 'bottom right' : 'bottom left')};
        box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.05);
        ${(props) => {
            if (props.active_tab === props.name) return backgroundAndShadow
        }}
    }
    @media ${device.tabletL} {
        width: 100%;
        height: 48px;
        min-width: unset;
        min-height: unset;
        padding-right: 0;

        :first-child {
            width: 90px;
        }
        :nth-child(2) {
            width: fit-content;
        }
        :last-child {
            width: fit-content;
        }
    }
`
type StyledType = {
    active_tab: string
    name: string
}

const marginLeft = css`
    margin-left: 16px;
`

const TabIcon = styled.img<StyledType>`
    min-width: 16px;
    ${(props) => {
        if (props.active_tab === props.name) return marginLeft
    }}
`

const ContentWrapper = styled.div`
    width: 100%;
    max-width: 99.6rem;
    display: block;
    background: var(--color-white);
    border-radius: 0.15em;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.1);

    @media ${device.tabletL} {
        padding: 0 2rem;
    }
`
const CardHeader = styled(Header)`
    @media ${device.tabletL} {
        font-size: 1.75rem;
        line-height: 16px;
    }
`
const Card = ({ display_name, active_tab, onTabChange, name }: CardProps) => {
    const is_rtl = useIsRtl()
    return (
        <CardContainer
            name={name}
            active_tab={active_tab}
            onClick={() => onTabChange(name)}
            is_rtl={is_rtl}
        >
            <Flex height="fit-content" jc="flex-start" ai="center">
                {active_tab === 'Forex' && (
                    <TabIcon src={ForexIcon} alt="" name={name} active_tab={active_tab} />
                )}
                {active_tab === 'Synthetic Indices' && (
                    <TabIcon src={SyntheticIcon} alt="" name={name} active_tab={active_tab} />
                )}
                {active_tab === 'Cryptocurrencies' && (
                    <TabIcon src={CryptocurrencyIcon} alt="" name={name} active_tab={active_tab} />
                )}
                {active_tab === 'Basket Indices' && (
                    <TabIcon src={BasketIndicesIcon} alt="" name={name} active_tab={active_tab} />
                )}
                <CardHeader as="h4" type="sub-section-title" width="auto">
                    {display_name}
                </CardHeader>
            </Flex>
        </CardContainer>
    )
}

const AvailableTrades = ({
    display_title,
    Forex,
    SyntheticIndices,
    Cryptocurrencies,
    BasketIndices,
}: AvailableTradesProps) => {
    const [active_tab, setActiveTab] = useState('Forex')

    const handleTabChange = (new_tab: string) => {
        if (new_tab === active_tab) return
        setActiveTab(new_tab)
    }

    return (
        <StyledSection>
            <StyledHeader size="var(--text-size-header-1)" align="center" as="h2">
                {display_title}
            </StyledHeader>
            <StyledContainer direction="column">
                <CardWrapper position="relative">
                    {Forex && (
                        <Card
                            name="Forex"
                            display_name={<Localize translate_text="Forex" />}
                            onTabChange={() => handleTabChange('Forex')}
                            active_tab={active_tab}
                        />
                    )}
                    {SyntheticIndices && (
                        <Card
                            name="Synthetic Indices"
                            display_name={<Localize translate_text="Synthetic Indices" />}
                            onTabChange={() => handleTabChange('Synthetic Indices')}
                            active_tab={active_tab}
                        />
                    )}
                    {Cryptocurrencies && (
                        <Card
                            name="Cryptocurrencies"
                            display_name={<Localize translate_text="Cryptocurrencies" />}
                            onTabChange={() => handleTabChange('Cryptocurrencies')}
                            active_tab={active_tab}
                        />
                    )}
                    {BasketIndices && (
                        <Card
                            name="Basket Indices"
                            display_name={<Localize translate_text="Basket Indices" />}
                            onTabChange={() => handleTabChange('Basket Indices')}
                            active_tab={active_tab}
                        />
                    )}
                </CardWrapper>
                <ContentWrapper>
                    {active_tab === 'Forex' && <Forex />}
                    {active_tab === 'Synthetic Indices' && <SyntheticIndices />}
                    {active_tab === 'Cryptocurrencies' && <Cryptocurrencies />}
                    {active_tab === 'Basket Indices' && <BasketIndices />}
                </ContentWrapper>
            </StyledContainer>
        </StyledSection>
    )
}

export default AvailableTrades
