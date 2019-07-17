import React, { Component } from 'react'
import Wrapper from '../containers/wrapper'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { navigate } from '@reach/router'
import { Text } from './typography'

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

class SideTab extends Component {
    state = {
        active_tab: '',
    }

    componentDidMount() {
        const current_label = location.hash
            ? location.hash.substring(1)
            : this.props.children[0].props.label

        this.setState({
            active_tab: current_label,
        })
    }

    componentDidUpdate() {
        const current_label = location.hash
            ? location.hash.substring(1)
            : this.props.children[0].props.label

        if (current_label !== this.state.active_tab) {
            this.setState({
                active_tab: current_label,
            })
        }
    }

    onClickTabItem = tab => {
        navigate(`#${tab}`)
        this.setState({
            active_tab: tab,
        })
    }
    render() {
        const {
            onClickTabItem,
            props: { children },
            state: { active_tab },
        } = this

        return (
            <StyledSideTab>
                <TabList>
                    {children.map((child, index) => {
                        const { label, text } = child.props

                        return (
                            <Tab
                                active_tab={active_tab}
                                key={index}
                                label={label}
                                text={text}
                                onClick={onClickTabItem}
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
}

SideTab.propTypes = {
    children: PropTypes.instanceOf(Array).isRequired,
}

Tab.propTypes = {
    active_tab: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
}

export default SideTab
