import React, { Component } from 'react'
// import { localize } from '../localization'
import Wrapper from '../containers/wrapper'
import Tab from './tab'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledSideTab = styled(Wrapper)`
    padding: 0;
`

const TabList = styled.ol`
    padding-left: 0;
    list-style: none;
`

const TabContent = styled.div`
    padding: 0;
`

class SideTab extends Component {
    state = {
        active_tab: this.props.children[0].props.label,
    }

    onClickTabItem = tab => {
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
                        const { label } = child.props

                        return (
                            <Tab
                                active_tab={active_tab}
                                key={index}
                                label={label}
                                onClick={onClickTabItem}
                            />
                        )
                    })}
                </TabList>
                <TabContent>
                    {children.map(child =>
                        child.props.label === active_tab
                            ? child.props.children
                            : undefined,
                    )}
                </TabContent>
            </StyledSideTab>
        )
    }
}

SideTab.propTypes = {
    children: PropTypes.instanceOf(Array).isRequired,
}
export default SideTab
