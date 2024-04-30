import React, { useEffect, useRef, useState } from 'react'
import styled, { css } from 'styled-components'
import { Text } from 'components/elements'
import { Flex } from 'components/containers'
import { Localize, LocalizedLink } from 'components/localization'
import device from 'themes/device'
import { usePlatformQueryParam } from 'components/hooks/use-platform-query-param'
import { TNavTab, TTabButton, TTabList } from 'pages/markets/static/content/_types'
import useBuildVariant from 'features/hooks/use-build-variant'

const TabsContainer = styled(Flex)`
    justify-content: center;
    margin-top: 24px;

    @media ${device.tabletL} {
        margin-top: 20px;
    }
`
const TabList = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: center;
    overflow: hidden;
    padding-top: 2.4rem;
    gap: 16px;

    @media ${device.tabletL} {
        overflow-x: scroll;
        scroll-behavior: smooth;
        gap: 16px;

        &::-webkit-scrollbar {
            display: none;
        }
    }
`
const TabButton = styled.button<TTabButton>`
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
const TextWrapper = styled(Text)<TTabButton>`
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
const StyledLink = styled(LocalizedLink)`
    text-decoration: none;

    :hover {
        color: red;
    }
`

const tab_list: TTabList[] = [
    {
        title: '_t_Synthetic indices_t_',
        tab_name: 'synthetic',
        route_to: '/markets/synthetic/#synthetic',
    },
    {
        title: '_t_Basket indices_t_',
        tab_name: 'basket-indices',
        route_to: '/markets/basket-indices/#basket-indices',
    },
    {
        title: '_t_Derived FX_t_',
        tab_name: 'derived-fx',
        route_to: '/markets/derived-fx/#derived-fx',
    },
]

const tab_list_eu: TTabList[] = [
    {
        title: '_t_Synthetic indices_t_',
        tab_name: 'synthetic',
        route_to: '/markets/synthetic/#synthetic',
    },
]

const NavTab = ({ route_from }: TNavTab) => {
    const ref = useRef(null)
    const { is_deriv_go } = usePlatformQueryParam()
    const { region } = useBuildVariant()
    const tabs = region === 'eu' ? tab_list_eu : tab_list

    return (
        <TabsContainer>
            {!is_deriv_go && (
                <TabList ref={ref}>
                    {tabs.map(({ route_to, tab_name, title }) => {
                        return (
                            <StyledLink to={route_to} key={tab_name}>
                                <TabButton selected={route_from == tab_name}>
                                    <TextWrapper>
                                        <Localize translate_text={title} />
                                    </TextWrapper>
                                </TabButton>
                            </StyledLink>
                        )
                    })}
                </TabList>
            )}
        </TabsContainer>
    )
}

export default NavTab
