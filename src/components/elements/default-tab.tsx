import React, { useState, useEffect, useRef, ReactElement } from 'react'
import styled, { css } from 'styled-components'
import { Header } from './typography'
import { Flex } from 'components/containers'
import { useTabStateQuery } from 'components/hooks/use-tab-state-query'
import { useBrowserResize } from 'components/hooks/use-browser-resize'
import { usePageLoaded } from 'components/hooks/use-page-loaded'
import device from 'themes/device'

type TabsStyledProps = {
    mobile_tab_button_underline_length?: string
    jc?: string
    jc_laptopM?: string
    jc_mobileL?: string
    line_divider_length?: string
    selected?: boolean
}

const TabContent = styled.div`
    flex: 1;
    width: 100%;
`

const TabButton = styled.button<TabsStyledProps>`
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
    margin-bottom: 0;

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
        `}

    &:hover,
    &:focus,
    &:active {
        border-bottom: 2px solid
            ${(props) => (props.selected ? 'var(--color-red)' : 'var(--color-red-2)')};
    }
`

const TabList = styled.div<TabsStyledProps>`
    display: flex;
    width: 100%;
    justify-content: ${(props) => (props.jc ? props.jc : 'center')};
    position: relative;
    overflow-x: auto;
    white-space: nowrap;
    -webkit-overflow-scrolling: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
        display: none;
    }

    @media ${device.laptopM} {
        justify-content: ${(props) => (props.jc_laptopM ? props.jc_laptopM : 'center')};
    }

    @media ${device.mobileL} {
        justify-content: ${(props) => (props.jc_mobileL ? props.jc_mobileL : 'space-between')};
    }

    @media (max-width: 330px) {
        justify-content: flex-start;
    }
`

const LineDivider = styled.div<TabsStyledProps>`
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

const TextWrapper = styled(Header)`
    text-align: center;
    font-weight: ${(props) => (props.selected ? 'bold' : 'normal')};

    @media ${device.tabletS} {
        font-size: ${({ mobile_font_size }) => mobile_font_size && `${mobile_font_size}px`};
    }
`

type TabPanelProps = {
    children?: ReactElement
}
const TabPanel = ({ children }: TabPanelProps) => (
    <TabContent role="tabpanel">{children}</TabContent>
)
type TabsProps = {
    children?: ReactElement | ReactElement[]
    has_no_query?: boolean
    jc?: string
    jc_laptopM?: string
    jc_mobileL?: string
    line_divider_length?: string
    mobile_font_size?: number
    mobile_tab_button_underline_length?: string
    tab_list?: string[]
    starting_index?: number
}

const Tabs = ({
    children,
    tab_list,
    jc,
    jc_mobileL,
    jc_laptopM,
    line_divider_length,
    mobile_font_size,
    mobile_tab_button_underline_length,
    has_no_query,
    starting_index = 0,
}: TabsProps) => {
    const [is_mobile] = useBrowserResize(768)
    const [is_mounted] = usePageLoaded()
    const [selected_tab, setSelectedTab] = useState(0)

    const [active_tab, setActiveTab] = useTabStateQuery(tab_list, has_no_query, starting_index)
    const [offset, setOffset] = useState(0)
    const ref = useRef(null)

    useEffect(() => {
        setSelectedTab(tab_list.indexOf(active_tab))
    }, [active_tab, tab_list])

    useEffect(() => {
        const selected_el = ref.current.querySelector('[aria-selected="true"]')
        if (selected_el) {
            setOffset(selected_el.offsetLeft - 24)
        }
    }, [is_mounted])

    useEffect(() => {
        ref.current.scrollLeft = offset
    }, [offset])

    const setOffsetPositioning = (e, index) => {
        const left = e.target.offsetLeft - 24
        is_mobile && index > 0 ? setOffset(left) : setOffset(0)
    }

    return (
        <Flex direction="column">
            <TabList
                role="tablist"
                jc={jc}
                jc_mobileL={jc_mobileL}
                jc_laptopM={jc_laptopM}
                line_divider_length={line_divider_length}
                ref={ref}
            >
                {React.Children.map(children, ({ props: { label } }, index) => (
                    <TabButton
                        role="tab"
                        selected={selected_tab === index}
                        aria-selected={selected_tab === index ? 'true' : 'false'}
                        onClick={(e) => {
                            setOffsetPositioning(e, index)
                            setActiveTab(tab_list[index])
                        }}
                        mobile_tab_button_underline_length={mobile_tab_button_underline_length}
                    >
                        <TextWrapper
                            as="p"
                            type="subtitle-1"
                            selected={selected_tab === index}
                            mobile_font_size={mobile_font_size}
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

export default Tabs
