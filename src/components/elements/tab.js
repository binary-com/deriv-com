import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledTab = styled.li`
    color: var(--color-grey);
    cursor: pointer;

    &.tab-active {
        color: var(--color-red);

        & > hr {
            border-color: var(--color-red);
        }
    }
`

const Hr = styled.hr`
    border: 0;
    margin: 0.5em 0;
    border-bottom: 1px solid var(--color-grey);
`

class Tab extends Component {
    state = {}

    onClick = () => {
        const { label, onClick } = this.props
        onClick(label)
    }

    render() {
        const {
            onClick,
            props: { active_tab, label },
        } = this

        const className = active_tab === label ? 'tab-active' : ''

        return (
            <StyledTab className={className} onClick={onClick}>
                {label}
                <Hr />
            </StyledTab>
        )
    }
}

Tab.propTypes = {
    active_tab: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
}

export default Tab
