import React, { ReactElement, useEffect, useRef } from 'react'
import styled, { css } from 'styled-components'
import { Text } from 'components/elements'
import { Flex } from 'components/containers'
import { Localize, LocalizedLink } from 'components/localization'
import { useCountryRule } from 'components/hooks/use-country-rule'
import device from 'themes/device'

type NavTabProps = {
    route_from: string
    route_offset: number
}

type TabButtonProps = {
    selected: boolean
}

const TabsContainer = styled(Flex)`
    justify-content: center;
    margin-top: 24px;

    @media ${device.tabletL} {
        margin-top: 20px;
    }
`
const StyledFlex = styled(Flex)`
    flex-direction: column;
    @media ${device.tabletL} {
        padding: 0;
        width: 90%;
    }
`
const TabList = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    overflow: hidden;
    padding-top: 2.4rem;
    gap: 16px;

    @media ${device.tabletL} {
        justify-content: start;
        overflow-x: scroll;
        scroll-behavior: smooth;
        gap: 16px;

        &::-webkit-scrollbar {
            display: none;
        }
    }
`

const TabButton = styled.button<TabButtonProps>`
    z-index: 2;
    height: auto;
    padding: 16px 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    outline: none;
    transition: border-color 0.2s ease-in;
    border: none;
    border-bottom: 2px solid var(--color-grey-2);
    white-space: nowrap;
    background: #f2f3f4;
    box-shadow: 0 8px 8px rgba(0, 0, 0, 0.08);
    border-radius: 8px;
    ${(props) =>
        props.selected &&
        css`
            background: white;
            ${Text} {
                font-weight: bold;
                color: black;
            }
        `}
    &:hover,
    &:focus,
    &:active {
        background: white;
    }

    @media ${device.tabletL} {
        height: 40px;
        padding: 24px 12px;
    }
`
const TextWrapper = styled(Text)`
    text-align: center;
    font-size: var(--text-size-m);
    color: #999999;
    ${(props) =>
        props.selected &&
        css`
            color: black;
        `}

    @media ${device.tabletS} {
        font-size: 18px;
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
    title: ReactElement
    tab_name: string
    route_to: string
}
const tab_list: TabList[] = [
    {
        title: <Localize translate_text="Synthetics" />,
        tab_name: 'synthetic',
        route_to: '/markets/synthetic/',
    },
    {
        title: <Localize translate_text="Basket indices" />,
        tab_name: 'basket-indices',
        route_to: '/markets/basket-indices/',
    },
    {
        title: <Localize translate_text="Derived FX" />,
        tab_name: 'derived-fx',
        route_to: '/markets/derived-fx/',
    },
]

const tab_list_eu: TabList[] = [
    {
        title: <Localize translate_text="Synthetics" />,
        tab_name: 'synthetic',
        route_to: '/markets/synthetic/',
    },
    {
        title: <Localize translate_text="Derived FX" />,
        tab_name: 'derived-fx',
        route_to: '/markets/derived-fx/',
    },
]

const tab_list_uk = [
    {
        title: <Localize translate_text="Derived FX" />,
        tab_name: 'derived-fx',
        route_to: '/markets/derived-fx/',
    },
]

const NavTab = ({ route_from, route_offset }: NavTabProps) => {
    const { is_eu, is_uk } = useCountryRule()

    const ref = useRef(null)

    useEffect(() => {
        ref.current.scrollLeft = route_offset
    })

    return (
        <TabsContainer>
            <StyledFlex>
                <TabList ref={ref}>
                    {(is_eu ? tab_list_eu : is_uk ? tab_list_uk : tab_list).map((item, index) => {
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
            </StyledFlex>
        </TabsContainer>
    )
}

export default NavTab
