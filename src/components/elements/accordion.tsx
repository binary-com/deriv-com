import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Text } from './typography'
import Chevron from 'images/svg/custom/chevron-bottom.svg'
import ChevronThick from 'images/svg/custom/chevron-thick.svg'
import Minus from 'images/svg/elements/minus.svg'
import Plus from 'images/svg/elements/plus.svg'
import device from 'themes/device'
import { Localize, localize } from 'components/localization'
import { TString } from 'types/generics'

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

type ArrowProps = {
    expanded?: boolean
}

type TChild = {
    arrow_thin?: boolean
    parent_style?: ParentType
    header_style?: HeaderStyle
    content_style?: ContentType
    is_showed?: boolean
    class_name?: string
    header?: TString | string
    plus?: boolean
}

type AccordionProps = {
    id?: string
    has_single_state?: boolean
    nodes?: React.ReactNode
    children?:
        | Array<React.ReactElement<React.PropsWithChildren<TChild>>>
        | React.ReactElement<React.PropsWithChildren<TChild>>
}

type ItemExpandedProps = AccordionProps & {
    child_idx: number
    child: React.ReactElement<React.PropsWithChildren<TChild>>
}

type AccordionItemProps = AccordionProps & {
    style?: HeaderStyle | ContentType | ParentType
    text?: TString
    header?: TString | string
    content_style?: ContentType
    parent_style?: ParentType
    header_style?: HeaderStyle
    plus?: boolean
    is_showed?: boolean
    class_name?: string
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

// TODO: keyboard events and find a way to add proper focus handling
const Accordion = ({ children, has_single_state, id }: AccordionProps) => {
    const nodes = []

    if (has_single_state) {
        return (
            <SingleAccordionContent id={id} nodes={nodes}>
                {children}
            </SingleAccordionContent>
        )
    }
    return <AccordionContent nodes={nodes}>{children}</AccordionContent>
}

const ItemExpanded = ({ child, child_idx, nodes, id }: ItemExpandedProps) => {
    const getHeight = (active_idx: number) => {
        return (
            nodes[active_idx] &&
            nodes[active_idx].ref.children[0].children[1].children[0].offsetHeight
        )
    }
    const [is_expanded, setExpanded] = useState(false)
    const [height, setHeight] = useState<number | string>(0)

    useEffect(() => {
        child && setHeight(getHeight(child_idx))
    }, [is_expanded])

    useEffect(() => {
        if (is_expanded) setTimeout(() => setHeight('auto'), 200)
        else setHeight(0)
    }, [height])

    const deployer = (
        <img
            src={is_expanded ? Minus : Plus}
            alt={is_expanded ? localize('_t_Minus_t_') : localize('_t_Plus_t_')}
            height="16"
            width="16"
        />
    )

    const current_arrow = child?.props.arrow_thin ? (
        <Arrow
            src={Chevron}
            alt={localize('_t_Chevron_t_')}
            width="32"
            height="32"
            expanded={is_expanded}
        />
    ) : (
        <ThickArrow
            src={ChevronThick}
            alt={localize('_t_Chevron thick_t_')}
            width="32"
            height="32"
            expanded={is_expanded}
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
                            className={child?.props.class_name}
                        >
                            <Text weight="bold">
                                {child?.props?.header?.includes('_t_') ? (
                                    <Localize translate_text={child.props.header as TString} />
                                ) : (
                                    child.props.header
                                )}
                            </Text>
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

const SingleAccordionContent = ({ nodes, children, id }: AccordionProps) => {
    const render_nodes = React.Children.map(children, (child, child_idx) => {
        if (!React.isValidElement(child)) {
            return <></>
        }

        return (
            <ItemExpanded
                key={child_idx}
                child={child}
                child_idx={child_idx}
                nodes={nodes}
                id={id}
            />
        )
    })

    return <>{render_nodes}</>
}

const AccordionContent = ({ children, nodes }: AccordionProps) => {
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
        const expanded_state = is_expanded ? true : false

        const deployer = (
            <img
                src={is_expanded ? Minus : Plus}
                alt={is_expanded ? localize('_t_Minus_t_') : localize('_t_Plus_t_')}
                height="16"
                width="16"
            />
        )

        const current_arrow = child.props.arrow_thin ? (
            <Arrow
                src={Chevron}
                alt={localize('_t_Chevron_t_')}
                width="32"
                height="32"
                expanded={expanded_state}
            />
        ) : (
            <ThickArrow
                src={ChevronThick}
                alt={localize('_t_Chevron thick_t_')}
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
                        <Text weight="bold">
                            {child?.props?.header?.includes('_t_') ? (
                                <Localize translate_text={child.props.header as TString} />
                            ) : (
                                child.props.header
                            )}
                        </Text>
                        {child?.props.plus ? deployer : current_arrow}
                    </AccordionHeader>
                    <div
                        style={{
                            overflow: 'hidden',
                            /* prettier-ignore */
                            transition: `height ${TRANSITION_DURATION}ms ease`,
                            height,
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

const AccordionItem = ({ id, text, children, style }: AccordionItemProps) => {
    return (
        <AccordionHeaderItem style={style} header={text} id={id}>
            {children}
        </AccordionHeaderItem>
    )
}

export { Accordion, AccordionItem }
