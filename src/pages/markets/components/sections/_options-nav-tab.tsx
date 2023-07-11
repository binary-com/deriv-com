import React, { useRef } from 'react'
import styled, { css } from 'styled-components'
import { Text } from 'components/elements'
import { Flex } from 'components/containers'
import { Localize, LocalizedLink } from 'components/localization'
import device from 'themes/device'
import { TNavTab, TTabButton, TTabList } from 'pages/markets/static/content/_types'

const TabsContainer = styled(Flex)`
    justify-content: center;
    margin-top: 24px;

    @media ${device.tabletL} {
        margin-top: 20px;
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
    font-size: 20px;
    color: #999999;
    ${(props) =>
        props.selected &&
        css`
            color: black;
        `}

    @media ${device.tabletS} {
        font-size: 16px;
    }
`
const StyledLink = styled(LocalizedLink)`
    text-decoration: none;

    :hover {
        color: red;
    }
`

const tab_list_options: TTabList[] = [
    {
        title: '_t_Options_t_',
        tab_name: 'options',
        route_to: '/trade-types/options',
    },
    {
        title: '_t_Accumulators_t_',
        tab_name: 'accumulators',
        route_to: '/trade-types/accumulators',
    },
]

const OptionsNavTab = ({ route_from }: TNavTab) => {
    const ref = useRef(null)

    return (
        <TabsContainer>
            <TabList ref={ref}>
                {tab_list_options.map(({ route_to, tab_name, title }) => {
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
        </TabsContainer>
    )
}

export default OptionsNavTab
