import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { navigate } from '@reach/router'

import Wrapper from '../containers/wrapper'
import { Text } from './typography'

import { getLocationHash } from 'common/utility'

const StyledSideTab = styled(Wrapper)`
    padding: 0;
    display: flex;
`

const TabList = styled.ol`
    width: 19rem;
    list-style: none;
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

const Tab = ({ active_tab, label, onClick, text }) => {
    const className = active_tab === label ? 'tab-active' : ''

    const handleClick = () => {
        onClick(label)
    }

    return (
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

const SideTab = ({ children, has_hash_routing }) => {
    const first_tab = children[0].props.label
    const [active_tab, setTab] = useTabs(first_tab, has_hash_routing)

    if (has_hash_routing) {
        useEffect(() => {
            const new_tab = getLocationHash() || first_tab
            setTab(new_tab)
        })
    }

    return (
        <StyledSideTab>
            <TabList>
                {children.map((child, idx) => {
                    const { label, text } = child.props

                    return (
                        <Tab
                            active_tab={active_tab}
                            key={idx}
                            label={label}
                            text={text}
                            onClick={setTab}
                        />
                    )
                })}
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
}

Tab.propTypes = {
    active_tab: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
}

export default SideTab
