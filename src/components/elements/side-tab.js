import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { navigate } from '@reach/router'
import { Text, Header } from './typography'
import { getLocationHash, isBrowser } from 'common/utility'
import device, { size } from 'themes/device'
import { Box } from 'components/containers'
import { Desktop, Mobile } from 'components/containers/show'
import { ReactComponent as Chevron } from 'images/svg/chevron.svg'

const StyledSideTab = styled(Box)`
    padding: 0;
    display: flex;

    @media ${device.tabletL} {
        justify-content: center;
        flex-direction: column;
        width: 100%;
    }
`
const TabList = styled.ol`
    width: ${(props) => props.tab_width || '38.4rem'};
    list-style: none;
    ${(props) =>
        props.is_sticky &&
        css`
            position: sticky;
            height: fit-content;
            top: 13rem;
        `}

    @media ${device.tabletL} {
        width: 100%;
    }
`
const TabContent = styled.div`
    flex: 1;
`
const StyledTab = styled.li`
    cursor: pointer;
    width: 38rem;
    margin: auto;
    padding: 3px 0 3px 16px;
    transform: translateX(-16px);

    &.tab-active,
    &:hover {
        border-left: 4px red solid;
    }
    & > p {
        color: var(--color-black-3);
        opacity: 0.32;
        font-size: ${(props) => props.font_size || 'var(--text-size-s)'};
        max-width: 38.4rem;
        line-height: 30px;

        :hover {
            opacity: 1;
        }
    }
    &.tab-active > p {
        opacity: 1;
    }
`
const TabsText = css`
    font-size: var(--text-size-m);
    color: var(--color-red);
`
const StyledActiveTabText = styled(Text)`
    ${TabsText}
`
const StyledDropDown = styled.li`
    padding: 1rem 0;
    border-bottom: 1px solid var(--color-red);
    display: flex;
    justify-content: space-between;
    align-items: center;

    ${Text} {
        ${TabsText}
    }
`
const ChevronWrapper = styled(Chevron)`
    min-width: 16px;
    width: 16px;
    height: 16px;
    transform: ${(props) => (props.active_tab === '-' ? 'rotate(0deg)' : 'rotate(180deg)')};
`
const ItemWrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 1.4rem;
`

const Tab = ({ active_tab, label, onClick, text, mobile, font_size }) => {
    const className = active_tab === label ? 'tab-active' : ''

    const handleClick = () => {
        onClick(label)
    }

    return mobile ? (
        <StyledDropDown onClick={handleClick}>
            <Text>{text}</Text>
        </StyledDropDown>
    ) : (
        <ItemWrapper>
            <StyledTab className={className} onClick={handleClick} font_size={font_size}>
                <Text weight="500">{text}</Text>
            </StyledTab>
        </ItemWrapper>
    )
}

const SideTab = ({ children, has_hash_routing, is_sticky, onTabChange, tab_header, font_size }) => {
    // we should check the window because When building, Gatsby renders these components on the server where window is not defined.
    const first_tab = isBrowser()
        ? window.innerWidth > size.tabletL
            ? children[0].props.label
            : '-'
        : children[0].props.label

    const [active_tab, setTab, previous_tab, setLastActiveTab] = useTabs(
        first_tab,
        has_hash_routing,
    )
    const handleReset = () => {
        setLastActiveTab(active_tab)
        active_tab !== '-' ? setTab('-') : setTab(previous_tab)
    }

    if (has_hash_routing) {
        useEffect(() => {
            const new_tab = getLocationHash() || first_tab
            setTab(new_tab)
        })
    }
    const current_active_tab = children.find((child) => child.props.label === active_tab)

    if (onTabChange) onTabChange(current_active_tab)

    const Tabs = (props) => {
        return children.map((child, idx) => {
            const { label, text, onClick } = child.props
            return (
                <div key={idx}>
                    <Tab
                        font_size={font_size}
                        mobile={props.is_mobile}
                        text={text}
                        onClick={(e) => {
                            if (onClick) {
                                onClick(e)
                            }

                            setTab(e)
                        }}
                        active_tab={active_tab}
                        label={label}
                    />
                </div>
            )
        })
    }

    return (
        <StyledSideTab>
            <TabList is_sticky={is_sticky}>
                <Desktop>
                    {!!tab_header && (
                        <Header max_width="38.4rem" size="3.6rem" mb="4rem">
                            {tab_header}
                        </Header>
                    )}
                    <Tabs />
                </Desktop>
                <Mobile>
                    <StyledDropDown onClick={handleReset}>
                        {current_active_tab ? (
                            <StyledActiveTabText>
                                {current_active_tab.props.text}
                            </StyledActiveTabText>
                        ) : (
                            <StyledActiveTabText>-</StyledActiveTabText>
                        )}
                        <ChevronWrapper active_tab={active_tab} />
                    </StyledDropDown>
                    {current_active_tab ? undefined : <Tabs is_mobile={true} />}
                </Mobile>
            </TabList>
            <TabContent>
                {children.map((child) => (child.props.label === active_tab ? child : undefined))}
            </TabContent>
        </StyledSideTab>
    )
}

const useTabs = (initial_active_tab = '', has_hash_routing) => {
    const [active_tab, setActiveTab] = useState(initial_active_tab)
    const [previous_tab, setLastActiveTab] = useState('-')

    const setTab = (tab) => {
        if (tab === active_tab) return
        setActiveTab(tab)

        if (has_hash_routing) navigate(`#${tab}`)
    }

    return [active_tab, setTab, previous_tab, setLastActiveTab]
}

SideTab.propTypes = {
    children: PropTypes.instanceOf(Array).isRequired,
    font_size: PropTypes.string,
    has_hash_routing: PropTypes.bool,
    is_mobile: PropTypes.bool,
    is_sticky: PropTypes.bool,
    onTabChange: PropTypes.func,
    tab_header: PropTypes.string,
}

Tab.propTypes = {
    active_tab: PropTypes.string.isRequired,
    font_size: PropTypes.string,
    label: PropTypes.string.isRequired,
    mobile: PropTypes.bool,
    onClick: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
}

export default SideTab
