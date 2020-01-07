import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Text } from './typography'
import Chevron from 'images/svg/chevron-bottom.svg'

const Arrow = styled(Chevron)`
    transition: transform 0.2s linear;
    ${props => (props.expanded === 'true' ? 'transform: rotate(-180deg);' : '')}
`

const AccordionHeader = styled.div`
    height: 56px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid var(--color-grey-2);
    padding: 0 1.6rem;

    ${Text} {
        margin-right: auto;
    }
    &:hover {
        cursor: pointer;
    }
`

const AccordionContent = styled.div`
    padding: 1.6rem;
`

const AccordionWrapper = styled.div`
    margin-bottom: 16px;
    width: 100%;
    border-radius: 6px;
    box-shadow: 0 16px 20px 0 rgba(0, 0, 0, 0.1);
    background-color: #ffffff;
`
// TODO: find a better way to handle the nodes
// TODO: add keyboard events and proper focus handling
const TRANSITION_DURATION = 400
const nodes = []
const Accordion = ({ children }) => {
    const [active_idx, setActiveIdx] = React.useState(-1)
    let timeout

    React.useEffect(() => {
        return () => {
            clearTimeout(timeout)
        }
    }, [])

    const toggle = child_idx => {
        if (active_idx > -1) {
            const content = nodes[active_idx].ref.children[1]
            content.style.height = `${content.children[0].offsetHeight}px`
        }

        if (active_idx === child_idx || child_idx === -1) {
            setTimeout(() => {
                setActiveIdx(-1)
            }, 50)
        } else {
            setTimeout(() => {
                setActiveIdx(child_idx)
                timeout = setTimeout(() => {
                    nodes[child_idx].ref.children[1].style.height = 'auto'
                }, TRANSITION_DURATION)
            }, 50)
        }
    }

    const getHeight = child_idx => {
        if (active_idx === child_idx) {
            return nodes.length > active_idx
                ? nodes[active_idx].ref.children[1].children[0].offsetHeight
                : 'auto'
        }
        return 0
    }

    const render_nodes = React.Children.map(children, (child, child_idx) => {
        const height = getHeight(child_idx)
        const is_expanded = child_idx === active_idx

        return (
            <AccordionWrapper
                id="test"
                key={child_idx}
                ref={div => {
                    nodes[child_idx] = { ref: div }
                }}
            >
                <AccordionHeader
                    onClick={() => toggle(child_idx)}
                    role="button"
                    aria-expanded={is_expanded}
                >
                    <Text weight="bold">{child.props.header}</Text>
                    <Arrow expanded={is_expanded ? 'true' : 'false'} />
                </AccordionHeader>
                <div
                    style={{
                        overflow: 'hidden',
                        transition: `height ${TRANSITION_DURATION}ms ease`,
                        height,
                    }}
                >
                    <AccordionContent>{child}</AccordionContent>
                </div>
            </AccordionWrapper>
        )
    })

    return <>{render_nodes}</>
}

Accordion.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
}

const AccordionItem = ({ text, children }) => {
    return <div header={text}>{children}</div>
}

AccordionItem.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
    text: PropTypes.string,
}

export { Accordion, AccordionItem }
