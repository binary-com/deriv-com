import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { navigate } from '@reach/router'
import Wrapper from '../containers/wrapper'
import { Text } from './typography'
import { getLocationHash, isBrowser } from 'common/utility'
import device, { size } from 'themes/device'
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
    width: 20rem;
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
    padding: 1.8rem 0;
    border-bottom: 1px solid var(--color-red-2);

    & > p {
        color: var(--color-red-2);
    }
    &.tab-active {
        border-bottom: 1px solid var(--color-red);

        & > p {
            color: var(--color-red);
        }
    }
`
const TabsText = css`
    font-size: var(--text-size-sm);
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
    transform: ${props =>
        props.active_tab === '-' ? 'rotate(0deg)' : 'rotate(180deg)'};
`
const Tab = ({ active_tab, label, onClick, text, mobile }) => {
    const className = active_tab === label ? 'tab-active' : ''

    const handleClick = () => {
        onClick(label)
    }

    return mobile ? (
        <StyledDropDown onClick={handleClick}>
            <Text>{text}</Text>
        </StyledDropDown>
    ) : (
        <StyledTab className={className} onClick={handleClick}>
            <Text weight="500">{text}</Text>
        </StyledTab>
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

const SideTab = ({ children, has_hash_routing, is_sticky }) => {
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
    const current_active_tab = children.find(
        child => child.props.label === active_tab,
    )

    const Tabs = props => {
        return children.map((child, idx) => {
            const { label, text, onClick } = child.props
            return (
                <div key={idx}>
                    <Tab
                        mobile={props.is_mobile}
                        text={text}
                        onClick={e => {
                            onClick(e)
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
                {children.map(child =>
                    child.props.label === active_tab ? child : undefined,
                )}
            </TabContent>
        </StyledSideTab>
    )
}

SideTab.propTypes = {
    children: PropTypes.instanceOf(Array).isRequired,
    has_hash_routing: PropTypes.bool,
    is_mobile: PropTypes.bool,
    is_sticky: PropTypes.bool,
}

Tab.propTypes = {
    active_tab: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    mobile: PropTypes.bool,
    onClick: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
}

export default SideTab
