import React, { ReactElement, useEffect, useRef } from 'react'
import styled, { css } from 'styled-components'
import { Text } from 'components/elements'
import { Flex } from 'components/containers'
import { Localize, LocalizedLink } from 'components/localization'
import device from 'themes/device'

type NavTabProps = {
    route_from: string
    route_offset: number
}

type TabButtonProps = {
    selected: boolean
}

const TabsContainer = styled(Flex)`
    background-color: var(--color-grey-23);
`
const TabList = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    position: relative;
    overflow: auto;
    padding-top: 2.4rem;

    @media ${device.tabletL} {
        justify-content: start;
        overflow-x: scroll;
        scroll-behavior: smooth;
        padding-top: 16px;
    }
`

const TabButton = styled.button<TabButtonProps>`
    z-index: 2;
    height: auto;
    padding: 8px 24px 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background: transparent;
    outline: none;
    transition: border-color 0.2s ease-in;
    border: none;
    border-bottom: 2px solid var(--color-grey-2);
    white-space: nowrap;
    ${(props) =>
        props.selected &&
        css`
            border-color: var(--color-red);
            ${Text} {
                font-weight: bold;
            }
        `}

    &:hover,
    &:focus,
    &:active {
        border-bottom: 2px solid
            ${(props) => (props.selected ? 'var(--color-red)' : 'var(--color-red-2)')};
    }
`
const TextWrapper = styled(Text)`
    text-align: center;
    font-size: var(--text-size-m);
    color: var(--color-black);

    @media ${device.tabletS} {
        font-size: 24px;
    }
`
const LineDivider = styled.div`
    bottom: 0;
    position: absolute;
    height: 2px;
    width: 100%;
    background: var(--color-grey-2);
    z-index: 1;
`

const StyledLink = styled(LocalizedLink)`
    text-decoration: none;

    :hover {
        color: red;
    }
`
type TabList = {
    title: JSX.Element
    tab_name: string
    route_to: string
}
const tabList: TabList[] = [
    {
        title: (<Localize translate_text="Forex" />) as JSX.Element,
        tab_name: 'forex',
        route_to: '/markets/forex/',
    },
    {
        title: (<Localize translate_text="Synthetic indices" />) as JSX.Element,
        tab_name: 'synthetic',
        route_to: '/markets/synthetic/',
    },
    {
        title: (<Localize translate_text="Stocks & indices" />) as JSX.Element,
        tab_name: 'stock',
        route_to: '/markets/stock/',
    },
    {
        title: (<Localize translate_text="Cryptocurrencies" />) as JSX.Element,
        tab_name: 'cryptocurrencies',
        route_to: '/markets/cryptocurrencies/',
    },
    {
        title: (<Localize translate_text="Basket indices" />) as JSX.Element,
        tab_name: 'basket-indices',
        route_to: '/markets/basket-indices/',
    },
    {
        title: (<Localize translate_text="Commodities" />) as JSX.Element,
        tab_name: 'commodities',
        route_to: '/markets/commodities/',
    },
]

const NavTab = ({ route_from, route_offset }: NavTabProps) => {
    const ref = useRef(null)

    useEffect(() => {
        ref.current.scrollLeft = route_offset
    }, [ref.current])

    return (
        <TabsContainer>
            <Flex direction="column">
                <TabList ref={ref}>
                    {tabList.map((item, index) => {
                        return (
                            <TabButton selected={route_from == item.tab_name} key={index}>
                                <StyledLink to={item.route_to}>
                                    <TextWrapper>{item.title}</TextWrapper>
                                </StyledLink>
                            </TabButton>
                        )
                    })}
                    <LineDivider />
                </TabList>
            </Flex>
        </TabsContainer>
    )
}

export default NavTab
