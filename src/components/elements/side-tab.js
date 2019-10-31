import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { navigate } from '@reach/router'
import { Link } from 'gatsby'
import DropDown from './combobox'
import { Text } from './typography'
import { getLocationHash, getLocationPath, isBrowser } from 'common/utility'
import device, { size } from 'themes/device'
import { Wrapper } from 'components/containers'
import { Desktop, Mobile } from 'components/containers/show'

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

const StyledItems = styled.li`
    cursor: pointer;
    border-bottom: 1px solid var(--color-red-2);

    & > p,
    a {
        color: var(--color-red-2);
    }
`
const StyledTab = styled(StyledItems)`
    padding: 1.8rem 0;

    &.tab-active {
        border-bottom: 1px solid var(--color-red);

        & > p,
        a {
            color: var(--color-red);
        }
    }
`
const StyledLink = styled(Link)`
    padding: 1.8rem 0;
    font-size: var(--text-size-s);
    font-weight: 500;
    text-decoration: none;
    line-height: 1.5rem;
    display: inline-block;
    width: 100%;
`
const activeStyle = {
    color: 'var(--color-red)',
    borderBottom: '1px solid var(--color-red)',
}

const Tab = ({ active_tab, label, onClick, text, has_link }) => {

    const className = active_tab === label ? 'tab-active' : ''

    const handleClick = () => {
        onClick(label)
    }

    return has_link ? (
        <StyledItems>
            <StyledLink
                activeStyle={activeStyle}
                to={'/terms-and-conditions/' + label}
            >
                {text}
            </StyledLink>
        </StyledItems>
    ) : (
        <StyledTab className={className} onClick={handleClick}>
            <Text weight="500">{text}</Text>
        </StyledTab>
    )
}

function useTabs(initial_active_tab = '', has_hash_routing) {
    const [active_tab, setActiveTab] = useState(initial_active_tab)

    const setTab = tab => {
        if (tab === active_tab) return
        setActiveTab(tab)

        if (has_hash_routing) navigate(`#${tab}`)
    }

    return [active_tab, setTab]
}

const SideTab = ({ children, has_hash_routing, is_sticky, has_link }) => {
    // we should check the window because When building, Gatsby renders these components on the server where window is not defined.
    const first_tab = isBrowser()
        ? window.innerWidth > size.tabletL
            ? children[0].props.label
            : '-'
        : has_link
        ? ''
        : children[0].props.label

    const [active_tab, setTab] = useTabs(first_tab, has_hash_routing)

    if (has_hash_routing || has_link) {
        useEffect(() => {
            const new_tab = getLocationHash() || getLocationPath() || first_tab
            setTab(new_tab)
        })
    }

    const convertRoute = () => {
        const locationPath = children.find(
            child =>
                child.props.label ===
                (has_link ? getLocationPath() : getLocationHash()),
        )
        return locationPath ? locationPath.props.text : ''
    }

    const Tabs = () => {
        return children.map((child, idx) => {
            const { label, text, onClick } = child.props
            return (
                <div key={idx}>
                    <Tab
                        text={text}
                        onClick={e => {
                            if (onClick) {
                                onClick(e)
                            }

                            setTab(e)
                        }}
                        active_tab={active_tab}
                        label={label}
                        has_link={has_link}
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
                    <DropDown activeMenu={() => convertRoute()}>
                        {children.map((child, idx) => {
                            const { label, text } = child.props
                            return has_link ? (
                                <div key={idx} label={label}>
                                    <StyledLink
                                        to={'/terms-and-conditions/' + label}
                                    >
                                        {text}
                                    </StyledLink>
                                </div>
                            ) : (
                                <div key={idx} label={label}>
                                    <Text weight="500">{text}</Text>
                                </div>
                            )
                        })}
                    </DropDown>
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
    has_hash_routing: PropTypes.bool,
    has_link: PropTypes.bool,
    is_sticky: PropTypes.bool,
}

Tab.propTypes = {
    active_tab: PropTypes.string.isRequired,
    has_link: PropTypes.bool,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
}

export default SideTab
