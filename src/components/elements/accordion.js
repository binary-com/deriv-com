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

const ThickArrow = styled.img`
    width: 24px;
    transform: rotate(-180deg);
    transition: transform 0.25s linear;
    ${(props) => (props.expanded === 'true' ? 'transform: inherit;' : '')}
`

const Arrow = styled.img`
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
const Accordion = ({ children, has_single_state, id, is_default_open }) => {
    const nodes = []

    return has_single_state ? (
        <SingleAccordionContent id={id} is_default_open={is_default_open} nodes={nodes}>
            {children}
        </SingleAccordionContent>
    ) : (
        <AccordionContent nodes={nodes}>{children}</AccordionContent>
    )
}
Accordion.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
    has_single_state: PropTypes.bool,
    id: PropTypes.string,
    is_default_open: PropTypes.bool,
    nodes: PropTypes.array,
}

const ItemExpanded = ({ is_default_open, child, child_idx, nodes, id }) => {
    const getHeight = (active_idx) => {
        return (
            nodes[active_idx] &&
            nodes[active_idx].ref.children[0].children[1].children[0].offsetHeight
        )
    }
    const [is_expanded, setExpanded] = useState(false)
    const [height, setHeight] = useStateWithCallback(0, () => {
        // set height to auto to allow content that can resize inside the accordion
        // reset height to content height before collapse for transition (height: auto does not support transitions)
        if (is_expanded) setTimeout(() => setHeight('auto'), 200)
        else setHeight(0)
    })

    React.useEffect(() => {
        if (is_default_open) setExpanded(true)
    }, [])

    React.useEffect(() => child && setHeight(getHeight(child_idx)), [is_expanded])

    return (
        <>
            {child.props.is_showed != false && (
                <ResponsiveWrapper
                    key={child_idx}
                    style={child.props.parent_style}
                    id={id}
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
                                        <img src={Minus} alt="Minus" height="16" width="16" />
                                    ) : (
                                        <img src={Plus} alt="Plus" height="16" width="16" />
                                    )
                                ) : child.props.arrow_thin ? (
                                    <Arrow
                                        src={Chevron}
                                        alt="Chevron"
                                        width="32"
                                        height="32"
                                        expanded={is_expanded ? 'true' : 'false'}
                                    />
                                ) : (
                                    <ThickArrow
                                        src={ChevronThick}
                                        alt="Chevron thick"
                                        width="32"
                                        height="32"
                                        expanded={is_expanded ? 'true' : 'false'}
                                    />
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
            )}
        </>
    )
}

ItemExpanded.propTypes = {
    child: PropTypes.any,
    child_idx: PropTypes.any,
    id: PropTypes.string,
    is_default_open: PropTypes.bool,
    nodes: PropTypes.any,
}

const SingleAccordionContent = ({ is_default_open = false, nodes, children, id }) => {
    const render_nodes = React.Children.map(children, (child, child_idx) => {
        return (
            <ItemExpanded
                key={child_idx}
                is_default_open={is_default_open}
                child={child}
                child_idx={child_idx}
                nodes={nodes}
                id={id}
            />
        )
    })

    return <>{render_nodes}</>
}

SingleAccordionContent.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
    id: PropTypes.string,
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
                                <img src={Minus} alt="Minus" height="16" width="16" />
                            ) : (
                                <img src={Plus} alt="Plus" height="16" width="16" />
                            )
                        ) : child.props.arrow_thin ? (
                            <Arrow
                                src={Chevron}
                                alt="Chevron"
                                height="32"
                                width="32"
                                expanded={is_expanded ? 'true' : 'false'}
                            />
                        ) : (
                            <ThickArrow
                                src={ChevronThick}
                                alt="ChevronThick"
                                height="32"
                                width="32"
                                expanded={is_expanded ? 'true' : 'false'}
                            />
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
    id: PropTypes.string,
    nodes: PropTypes.array,
}

const AccordionItem = ({ id, text, children, style }) => {
    return (
        <div style={style} header={text} id={id}>
            {children}
        </div>
    )
}

AccordionItem.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
    id: PropTypes.string,
    is_showed: PropTypes.bool,
    style: PropTypes.object,
    text: PropTypes.string,
}

export { Accordion, AccordionItem }
