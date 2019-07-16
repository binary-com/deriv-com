import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Text } from 'components/elements/typography'

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

class Tab extends Component {
    state = {}

    onClick = () => {
        const { label, onClick } = this.props
        onClick(label)
    }

    render() {
        const {
            onClick,
            props: { active_tab, label, text },
        } = this

        const className = active_tab === label ? 'tab-active' : ''

        return (
            <StyledTab className={className} onClick={onClick}>
                <Text>{text}</Text>
            </StyledTab>
        )
    }
}

Tab.propTypes = {
    active_tab: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
}

export default Tab
