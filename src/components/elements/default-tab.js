import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { Text } from './typography'
import { Flex } from 'components/containers'
import { useTabStateQuery } from 'components/hooks/use-tab-state-query'
import { useTabState } from 'components/hooks/use-tab-state'
import device from 'themes/device'
const TabContent = styled.div`
    flex: 1;
    width: 100%;
`

const TabButton = styled.button`
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

    @media ${device.laptopM} {
        width: ${(props) =>
            props.mobile_tab_button_underline_length
                ? props.mobile_tab_button_underline_length
                : 'unset'};
    }

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

const TabList = styled.div`
    display: flex;
    width: 100%;
    justify-content: ${(props) => (props.jc ? props.jc : 'center')};
    position: relative;
    overflow: auto;

    ::-webkit-scrollbar {
        display: none;
    }

    -ms-overflow-style: none;
    scrollbar-width: none;

    @media ${device.mobileL} {
        justify-content: ${(props) => (props.jc_mobileL ? props.jc_mobileL : 'space-between')};
    }
    @media ${device.laptopM} {
        justify-content: ${(props) => (props.jc_laptopM ? props.jc_laptopM : 'center')};
    }
`

const LineDivider = styled.div`
    bottom: 0;
    position: absolute;
    height: 2px;
    width: ${(props) => (props.line_divider_length ? props.line_divider_length : '100%')};
    background: var(--color-grey-2);
    z-index: 1;
`

const Content = styled.div`
    flex: 1;
    width: 100%;
`

const TextWrapper = styled(Text)`
    text-align: center;
    font-size: var(--text-size-m);
    @media ${device.tabletS} {
        font-size: ${({ font_size }) => font_size ?? 'var(--text-size-sm)'};
    }
    @media ${device.mobileM} {
        font-size: ${({ font_size }) => font_size ?? 'var(--text-size-s)'};
    }
`

const TabPanel = ({ children }) => (
    <TabContent role="tabpanel" tabindex="0">
        {children}
    </TabContent>
)

TabPanel.propTypes = {
    children: PropTypes.node,
}

const Tabs = ({
    children,
    route_from,
    tab_list,
    jc,
    jc_mobileL,
    jc_laptopM,
    line_divider_length,
    mobile_tab_button_underline_length,
    has_no_query,
}) => {
    const [selected_tab, setSelectedTab] = useState(0)
    const [active_tab, setActiveTab] = has_no_query
        ? useTabState(tab_list)
        : useTabStateQuery(tab_list)

    useEffect(() => {
        setSelectedTab(tab_list.indexOf(active_tab))
    }, [active_tab])

    return (
        <Flex direction="column">
            <TabList
                role="tablist"
                jc={jc}
                jc_mobileL={jc_mobileL}
                jc_laptopM={jc_laptopM}
                line_divider_length={line_divider_length}
            >
                {React.Children.map(children, ({ props: { label } }, index) => (
                    <TabButton
                        role="tab"
                        selected={selected_tab === index}
                        aria-selected={selected_tab === index ? 'true' : 'false'}
                        onClick={() => setActiveTab(tab_list[index])}
                        mobile_tab_button_underline_length={mobile_tab_button_underline_length}
                    >
                        <TextWrapper
                            font_size={
                                route_from === 'markets'
                                    ? '24px'
                                    : route_from === 'recent_featured_posts'
                                    ? '18px'
                                    : undefined
                            }
                        >
                            {label}
                        </TextWrapper>
                    </TabButton>
                ))}
                <LineDivider line_divider_length={line_divider_length} />
            </TabList>

            <Content>
                {React.Children.map(children, (el, index) =>
                    selected_tab === index ? el : undefined,
                )}
            </Content>
        </Flex>
    )
}

Tabs.Panel = TabPanel

Tabs.propTypes = {
    children: PropTypes.node,
    has_no_query: PropTypes.bool,
    jc: PropTypes.string,
    jc_laptopM: PropTypes.string,
    jc_mobileL: PropTypes.string,
    line_divider_length: PropTypes.string,
    mobile_tab_button_underline_length: PropTypes.string,
    route_from: PropTypes.string,
    tab_list: PropTypes.array,
}

export default Tabs
