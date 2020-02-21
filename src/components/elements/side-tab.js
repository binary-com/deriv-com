import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { navigate } from '@reach/router'
import { Text, Header } from './typography'
import { getLocationHash, isBrowser } from 'common/utility'
import device, { size } from 'themes/device'
import { Wrapper } from 'components/containers'
import { Desktop, Mobile } from 'components/containers/show'
import Chevron from 'images/svg/chevron.svg'

const StyledSideTab = styled(Wrapper)`
    padding: 0;
    display: flex;

    @media ${device.tabletL} {
        justify-content: center;
        flex-direction: column;
        width: 100%;
    }
`

const TabList = styled.ol`
    width: ${props => props.tab_width || '38.4rem'};
    list-style: none;
    ${props =>
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
    padding: ${props => props.padding || '0 0 2.4rem 0'};
    width: ${props => props.item_width || '38rem'};

    & > p {
        // prettier-ignore
        color: var(--color-${props => props.font_color || 'black-3'});
        opacity: 0.32;
        font-size: ${props => props.font_size || 'var(--text-size-m)'};
        padding-left: 1.6rem;
        max-width: 33rem;
    }
    &.tab-active > p {
        opacity: 1;
        // prettier-ignore
        color: var(--color-${props => props.active_font_color || 'black'});
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

    ${Text} {
        ${TabsText}
    }
`
const ChevronWrapper = styled(Chevron)`
    transform: ${props => (props.active_tab === '-' ? 'rotate(0deg)' : 'rotate(180deg)')};
`
const LeftBorder = styled.div`
    width: 0.4rem;
    height: 3.6rem;
    background-color: red;
    flex: 1;
`
const ItemWrapper = styled.div`
    display: flex;
    flex-direction: row;
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
            {active_tab === label && <LeftBorder />}
            <StyledTab className={className} onClick={handleClick} font_size={font_size}>
                <Text weight="500">{text}</Text>
            </StyledTab>
        </ItemWrapper>
    )
}

function useTabs(initial_active_tab = '', has_hash_routing) {
    const [active_tab, setActiveTab] = useState(initial_active_tab)
    const [previous_tab, setLastActiveTab] = useState('-')

    const setTab = tab => {
        if (tab === active_tab) return
        setActiveTab(tab)

        if (has_hash_routing) navigate(`#${tab}`)
    }

    return [active_tab, setTab, previous_tab, setLastActiveTab]
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

    if (has_hash_routing) {
        useEffect(() => {
            const new_tab = getLocationHash() || first_tab
            setTab(new_tab)
        })
    }

    const handleReset = () => {
        setLastActiveTab(active_tab)
        active_tab !== '-' ? setTab('-') : setTab(previous_tab)
    }
    const current_active_tab = children.find(child => child.props.label === active_tab)
    if (onTabChange) onTabChange(current_active_tab)
    const Tabs = props => {
        return children.map((child, idx) => {
            const { label, text, onClick } = child.props
            return (
                <div key={idx}>
                    <Tab
                        font_size={font_size}
                        mobile={props.is_mobile}
                        text={text}
                        onClick={e => {
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
                        <Header
                            width="38.4rem"
                            font_size="3.6rem"
                            min_width="38.4rem"
                            margin="0 0 4rem 0"
                        >
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
                {children.map(child => (child.props.label === active_tab ? child : undefined))}
            </TabContent>
        </StyledSideTab>
    )
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
