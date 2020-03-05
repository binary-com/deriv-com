import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Text } from './typography'
import ChevronThick from 'images/svg/chevron-thick.svg'
import Chevron from 'images/svg/chevron-bottom.svg'

const ThickArrow = styled(ChevronThick)`
    transform: rotate(-180deg);
    transition: transform 0.25s linear;
    ${props => (props.expanded === 'true' ? 'transform: inherit;' : '')}
`

const Arrow = styled(Chevron)`
    transform: rotate(-180deg);
    transition: transform 0.25s linear;
    ${props => (props.expanded === 'true' ? 'transform: inherit;' : '')}
`

const AccordionHeader = styled.div`
    height: 56px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid var(--color-grey-2);
    padding: 0 3.2rem;

    ${Text} {
        margin-right: auto;
    }
    &:hover {
        cursor: pointer;
    }
`

const AccordionWrapper = styled.div`
    width: 100%;
    border-radius: 6px;
    box-shadow: -2px 6px 15px 0 rgba(195, 195, 195, 0.31);
    background-color: var(--color-white);
`
const TRANSITION_DURATION = 250

// TODO: keyboard events and find a way to add proper focus handling
const Accordion = ({ children, has_single_state }) => {
    const nodes = []

    return has_single_state ? (
        <SingleAccordionContent nodes={nodes}>{children}</SingleAccordionContent>
    ) : (
        <AccordionContent>{children}</AccordionContent>
    )
}
Accordion.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
    has_single_state: PropTypes.bool,
    nodes: PropTypes.array,
}

const SingleAccordionContent = ({ children }) => {
    const render_nodes = React.Children.map(children, (child, child_idx) => {
        const [is_expanded, setExpanded] = useState(true)
        const max_height = is_expanded ? '400rem' : 0

        return (
            <div key={child_idx} style={child.props.parent_style}>
                <AccordionWrapper>
                    <AccordionHeader
                        onClick={() => setExpanded(!is_expanded)}
                        role="button"
                        aria-expanded={is_expanded}
                        style={child.props.header_style}
                    >
                        <Text weight="bold">{child.props.header}</Text>
                        {child.props.arrow_thin ? (
                            <Arrow expanded={is_expanded ? 'true' : 'false'} />
                        ) : (
                            <ThickArrow expanded={is_expanded ? 'true' : 'false'} />
                        )}
                    </AccordionHeader>
                    <div
                        style={{
                            overflow: 'hidden',
                            transition: `max-height ${TRANSITION_DURATION}ms ease`,
                            maxHeight: max_height,
                        }}
                    >
                        {child}
                    </div>
                </AccordionWrapper>
            </div>
        )
    })

    return <>{render_nodes}</>
}

SingleAccordionContent.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
}

const AccordionContent = ({ children, nodes }) => {
    const [active_idx, setActiveIdx] = useState(-1)

    const toggle = child_idx => {
        const is_closed = active_idx === child_idx || child_idx === -1
        if (is_closed) setActiveIdx(-1)
        else {
            setActiveIdx(child_idx)
        }
    }

    const getHeight = child_idx => {
        if (active_idx === child_idx) {
            return '400rem'
        }
        return 0
    }

    const render_nodes = React.Children.map(children, (child, child_idx) => {
        const max_height = getHeight(child_idx)
        const is_expanded = child_idx === active_idx

        return (
            <div style={child.props.parent_style}>
                <AccordionWrapper
                    key={child_idx}
                    ref={div => {
                        nodes[child_idx] = { ref: div }
                    }}
                >
                    <AccordionHeader
                        onClick={() => toggle(child_idx)}
                        role="button"
                        aria-expanded={is_expanded}
                        style={child.props.header_style}
                    >
                        <Text weight="bold">{child.props.header}</Text>
                        {child.props.arrow_thin ? (
                            <Arrow expanded={is_expanded ? 'true' : 'false'} />
                        ) : (
                            <ThickArrow expanded={is_expanded ? 'true' : 'false'} />
                        )}
                    </AccordionHeader>
                    <div
                        style={{
                            overflow: 'hidden',
                            transition: `max-height ${TRANSITION_DURATION}ms ease`,
                            maxHeight: max_height,
                        }}
                    >
                        {child}
                    </div>
                </AccordionWrapper>
            </div>
        )
    })

    return <>{render_nodes}</>
}

AccordionContent.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
    has_single_state: PropTypes.bool,
    nodes: PropTypes.array,
}

const AccordionItem = ({ text, children, style }) => {
    return (
        <div style={style} header={text}>
            {children}
        </div>
    )
}

AccordionItem.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
    style: PropTypes.object,
    text: PropTypes.string,
}

export { Accordion, AccordionItem }
