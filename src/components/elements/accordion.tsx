import React, { useState, useEffect, ReactNode } from 'react'
import styled from 'styled-components'
import { Text } from './typography'
import { useStateWithCallback } from 'components/hooks/use-state-with-callback'
import Chevron from 'images/svg/custom/chevron-bottom.svg'
import ChevronThick from 'images/svg/custom/chevron-thick.svg'
import Minus from 'images/svg/elements/minus.svg'
import Plus from 'images/svg/elements/plus.svg'
import device from 'themes/device'

type ArrowProps = {
    expanded?: boolean
}

const ThickArrow = styled.img<ArrowProps>`
    width: 24px;
    transform: rotate(-180deg);
    transition: transform 0.25s linear;
    ${(props) => (props.expanded ? 'transform: inherit;' : '')}
`

const Arrow = styled.img<ArrowProps>`
    transition: transform 0.25s linear;
    ${(props) => (props.expanded ? 'transform: rotate(-180deg);' : '')}
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
const AccordionHeaderItem = styled.div<AccordionItemProps>``

const AccordionWrapper = styled.div`
    width: 100%;
    border-radius: 6px;
    background-color: var(--color-white);
`
const TRANSITION_DURATION = 250

type AccordionProps = {
    children: ChildType | ChildType[]
    has_single_state?: boolean
    is_faq?: boolean
    id?: string
    is_default_open?: boolean
}

// TODO: keyboard events and find a way to add proper focus handling
const Accordion = ({ children, has_single_state, id, is_default_open }: AccordionProps) => {
    const nodes = []
    return has_single_state ? (
        <SingleAccordionContent id={id} is_default_open={is_default_open} nodes={nodes}>
            {children}
        </SingleAccordionContent>
    ) : (
        <AccordionContent nodes={nodes}>{children}</AccordionContent>
    )
}

type HeaderStyle = {
    marginTop?: string
    padding?: string
    border?: string
    borderRadius?: string
    boxShadow?: string
}
type ContentType = {
    background?: string
    boxShadow?: string
    marginLeft?: string
    paddingBottom?: string
    display?: string
}
type ParentType = {
    marginBottom?: string
}

type ChildType = {
    props?: {
        parent_style?: ParentType
        header_style?: HeaderStyle
        content_style?: ContentType
        header?: string
        plus?: boolean
        arrow_thin?: boolean
        is_showed?: boolean
    }
}

type ItemExpandedProps = {
    child?: ChildType
    child_idx?: number
    id?: string
    is_default_open?: boolean
    nodes?: ReactNode
}

const ItemExpanded = ({ is_default_open, child, child_idx, nodes, id }: ItemExpandedProps) => {
    const getHeight = (active_idx: number) => {
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

    useEffect(() => {
        if (is_default_open) setExpanded(true)
    }, [])

    useEffect(() => child && setHeight(getHeight(child_idx)), [is_expanded])

    const deployer = <img src={is_expanded ? Minus : Plus} alt="Minus" height="16" width="16" />

    const expanded_state = is_expanded ? true : false

    const current_arrow = child?.props.arrow_thin ? (
        <Arrow src={Chevron} alt="Chevron" width="32" height="32" expanded={expanded_state} />
    ) : (
        <ThickArrow
            src={ChevronThick}
            alt="Chevron thick"
            width="32"
            height="32"
            expanded={expanded_state}
        />
    )

    return (
        <>
            {child.props.is_showed != false && (
                <div
                    key={child_idx}
                    style={child?.props.parent_style}
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
                            style={child?.props.header_style}
                        >
                            <Text weight="bold">{child?.props.header}</Text>
                            <div>{child?.props.plus ? deployer : current_arrow}</div>
                        </AccordionHeader>
                        <div
                            style={{
                                overflow: 'hidden',
                                transition: `height ${TRANSITION_DURATION}ms ease`,
                                height,
                                ...child?.props.content_style,
                            }}
                        >
                            {child}
                        </div>
                    </AccordionWrapper>
                </div>
            )}
        </>
    )
}

type SingleAccordionContentProps = {
    children?: ChildType | ChildType[]
    id?: string
    is_default_open?: boolean
    nodes?: ReactNode[]
}

const SingleAccordionContent = ({
    is_default_open = false,
    nodes,
    children,
    id,
}: SingleAccordionContentProps) => {
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

type AccordionContentProps = {
    children?: ChildType | ChildType[]
    has_single_state?: boolean
    id?: string
    nodes?: ReactNode
}

const AccordionContent = ({ children, nodes }: AccordionContentProps) => {
    const [active_idx, setActiveIdx] = useState(-1)

    const toggle = (child_idx: number) => {
        const is_closed = active_idx === child_idx || child_idx === -1
        if (is_closed) setActiveIdx(-1)
        else {
            setActiveIdx(child_idx)
        }
    }

    const getHeight = (child_idx: number) => {
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

        const deployer = is_expanded ? (
            <img src={Minus} alt="Minus" height="16" width="16" />
        ) : (
            <img src={Plus} alt="Plus" height="16" width="16" />
        )

        const expanded_state = is_expanded ? true : false

        const current_arrow = child?.props.arrow_thin ? (
            <Arrow src={Chevron} alt="Chevron" width="32" height="32" expanded={expanded_state} />
        ) : (
            <ThickArrow
                src={ChevronThick}
                alt="Chevron thick"
                width="32"
                height="32"
                expanded={expanded_state}
            />
        )

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
                        <Text weight="bold">{child?.props.header}</Text>
                        {child?.props.plus ? deployer : current_arrow}
                    </AccordionHeader>
                    <div
                        style={{
                            overflow: 'hidden',
                            /* prettier-ignore */
                            transition: `height ${TRANSITION_DURATION}ms ease`,
                            height: height,
                            ...child?.props.content_style,
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

type AccordionItemProps = {
    children: ChildType | ChildType[]
    id?: string
    style?: HeaderStyle | ContentType | ParentType
    content_style?: ContentType
    parent_style?: ParentType
    header_style?: HeaderStyle
    header?: string | ReactNode
    text?: string
    plus?: boolean
    is_showed?: boolean
}

const AccordionItem = ({ id, text, children, style }: AccordionItemProps) => {
    return (
        <AccordionHeaderItem style={style} header={text} id={id}>
            {children}
        </AccordionHeaderItem>
    )
}

export { Accordion, AccordionItem }
