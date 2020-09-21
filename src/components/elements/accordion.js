import React, { useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Text } from './typography'
import { useStateWithCallback } from 'components/hooks/use-state-with-callback'
import Chevron from 'images/svg/chevron-bottom.svg'
import ChevronThick from 'images/svg/chevron-thick.svg'
import Minus from 'images/svg/minus.svg'
import Plus from 'images/svg/plus.svg'
import device from 'themes/device'

const ThickArrow = styled(ChevronThick)`
    transform: rotate(-180deg);
    transition: transform 0.25s linear;
    ${(props) => (props.expanded === 'true' ? 'transform: inherit;' : '')}
`

const Arrow = styled(Chevron)`
    transition: transform 0.25s linear;
    ${(props) => (props.expanded === 'true' ? 'transform: rotate(-180deg);' : '')}
`

const AccordionHeader = styled.div`
    height: 56px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid var(--color-grey-2);
    padding: 0 3.2rem;
    box-shadow: -2px 6px 15px 0 rgba(195, 195, 195, 0.31);

    ${Text} {
        margin-right: auto;

        @media ${device.tabletL} {
            font-size: 16px;
        }
    }
    svg {
        @media ${device.mobileL} {
            width: 16px;
            height: 16px;
        }
    }
    &:hover {
        cursor: pointer;
    }
    @media ${device.mobileL} {
        min-height: 7rem;
        height: 100%;
    }
`
const ResponsiveWrapper = styled.div`
    @media ${device.tablet} {
        margin-left: 16px;
        margin-right: 16px;
    }
`

const AccordionWrapper = styled.div`
    width: 100%;
    border-radius: 6px;
    background-color: var(--color-white);
`
const TRANSITION_DURATION = 250

// TODO: keyboard events and find a way to add proper focus handling
const Accordion = ({ children, has_single_state, is_default_open }) => {
    const nodes = []

    return has_single_state ? (
        <SingleAccordionContent is_default_open={is_default_open} nodes={nodes}>
            {children}
        </SingleAccordionContent>
    ) : (
        <AccordionContent nodes={nodes}>{children}</AccordionContent>
    )
}
Accordion.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
    has_single_state: PropTypes.bool,
    is_default_open: PropTypes.bool,
    nodes: PropTypes.array,
}

const SingleAccordionContent = ({ is_default_open = false, nodes, children }) => {
    const getHeight = (active_idx) => {
        return (
            nodes[active_idx] &&
            nodes[active_idx].ref.children[0].children[1].children[0].offsetHeight
        )
    }

    const render_nodes = React.Children.map(children, (child, child_idx) => {
        const [is_expanded, setExpanded] = useState(false)
        const [height, setHeight] = useStateWithCallback(0, () => {
            // set height to auto to allow content that can resize inside the accordion
            // reset height to content height before collapse for transition (height: auto does not support transitions)
            if (is_expanded) setTimeout(() => setHeight('auto'), 200)
            else setTimeout(() => setHeight(0), 50)
        })

        React.useEffect(() => {
            if (is_default_open) setExpanded(true)
        }, [])

        React.useEffect(() => child && setHeight(getHeight(child_idx)), [is_expanded])

        return (
            child.props.is_showed != false && (
                <ResponsiveWrapper
                    key={child_idx}
                    style={child.props.parent_style}
                    ref={(div) => {
                        nodes[child_idx] = { ref: div }
                    }}
                >
                    <AccordionWrapper>
                        <AccordionHeader
                            onClick={() => setExpanded(!is_expanded)}
                            role="button"
                            aria-expanded={is_expanded}
                            style={child.props.header_style}
                        >
                            <Text weight="bold">{child.props.header}</Text>
                            <div>
                                {child.props.plus ? (
                                    is_expanded ? (
                                        <Minus />
                                    ) : (
                                        <Plus />
                                    )
                                ) : child.props.arrow_thin ? (
                                    <Arrow expanded={is_expanded ? 'true' : 'false'} />
                                ) : (
                                    <ThickArrow expanded={is_expanded ? 'true' : 'false'} />
                                )}
                            </div>
                        </AccordionHeader>
                        <div
                            style={{
                                overflow: 'hidden',
                                transition: `height ${TRANSITION_DURATION}ms ease`,
                                height,
                                ...child.props.content_style,
                            }}
                        >
                            {child}
                        </div>
                    </AccordionWrapper>
                </ResponsiveWrapper>
            )
        )
    })

    return <>{render_nodes}</>
}

SingleAccordionContent.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
    is_default_open: PropTypes.bool,
    nodes: PropTypes.array,
}

const AccordionContent = ({ children, nodes }) => {
    const [active_idx, setActiveIdx] = useState(-1)

    const toggle = (child_idx) => {
        const is_closed = active_idx === child_idx || child_idx === -1
        if (is_closed) setActiveIdx(-1)
        else {
            setActiveIdx(child_idx)
        }
    }

    const getHeight = (child_idx) => {
        if (active_idx === child_idx) {
            return (
                nodes[active_idx] &&
                nodes[active_idx].ref.children[0].children[1].children[0].offsetHeight
            )
        }
        return 0
    }

    const render_nodes = React.Children.map(children, (child, child_idx) => {
        const height = getHeight(child_idx)
        const is_expanded = child_idx === active_idx

        return (
            <div
                style={child.props.parent_style}
                ref={(div) => {
                    nodes[child_idx] = { ref: div }
                }}
            >
                <AccordionWrapper key={child_idx}>
                    <AccordionHeader
                        onClick={() => toggle(child_idx)}
                        role="button"
                        aria-expanded={is_expanded}
                        style={child.props.header_style}
                    >
                        <Text weight="bold">{child.props.header}</Text>
                        {child.props.plus ? (
                            is_expanded ? (
                                <Minus />
                            ) : (
                                <Plus />
                            )
                        ) : child.props.arrow_thin ? (
                            <Arrow expanded={is_expanded ? 'true' : 'false'} />
                        ) : (
                            <ThickArrow expanded={is_expanded ? 'true' : 'false'} />
                        )}
                    </AccordionHeader>
                    <div
                        style={{
                            overflow: 'hidden',
                            /* prettier-ignore */
                            transition: `height ${TRANSITION_DURATION}ms ease`,
                            height: height,
                            ...child.props.content_style,
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
    is_showed: PropTypes.bool,
    style: PropTypes.object,
    text: PropTypes.string,
}

export { Accordion, AccordionItem }
