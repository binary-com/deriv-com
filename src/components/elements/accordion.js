import React from 'react'
import styled from 'styled-components'
import { Text } from './typography'
import Chevron from 'images/svg/chevron-bottom.svg'

const Arrow = styled(Chevron)`
    transition: transform 0.2s linear;
    ${props => (props.expanded ? 'transform: rotate(-180deg);' : '')}
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
    width: 792px;
    border-radius: 6px;
    box-shadow: 0 16px 20px 0 rgba(0, 0, 0, 0.1);
    background-color: #ffffff;
`

class Accordion extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            index: typeof props.selectedIndex !== 'undefined' ? props.selectedIndex : -1,
        }
        this.nodes = []
    }

    componentWillReceiveProps(props) {
        if (
            typeof props.selectedIndex !== 'undefined' &&
            this.state.index !== props.selectedIndex
        ) {
            this.toggle(props.selectedIndex)
        }
    }

    componentWillUnmount() {
        clearTimeout(this.timeout)
    }

    toggle(index, click) {
        clearTimeout(this.timeout)

        if (click) {
            if (this.props.onChange)
                this.props.onChange(
                    index,
                    this.state.index !== index,
                    this.state.index !== index ? index : -1,
                )
            if (!this.props.changeOnClick) return
        }

        if (this.state.index > -1) {
            const content = this.nodes[this.state.index].ref.children[1]
            content.style.height = `${content.children[0].offsetHeight}px` // Set fixed height before collapse of current open item
        }

        if (this.state.index === index || index === -1) {
            setTimeout(() => {
                this.setState({ index: -1 })
            }, 50)
        } else {
            setTimeout(() => {
                this.setState({ index })
                this.timeout = setTimeout(() => {
                    this.nodes[index].ref.children[1].style.height = 'auto' // Set auto height after expand
                }, this.props.transitionDuration)
            }, 50)
        }
    }

    getHeight(index) {
        if (index === this.state.index) {
            return this.nodes.length > index
                ? this.nodes[index].ref.children[1].children[0].offsetHeight
                : 'auto'
        }
        return 0
    }

    render() {
        const style = {
            overflow: 'hidden',
            transition: `height ${this.props.transitionDuration}ms ${this.props.transitionTimingFunction}`,
        }
        const nodes = React.Children.map(this.props.children, (child, index) => {
            return (
                <AccordionWrapper
                    id="test"
                    key={index}
                    ref={div => {
                        this.nodes[index] = { ref: div }
                    }}
                >
                    <AccordionHeader onClick={() => this.toggle(index, true)}>
                        <Text weight="bold">{child.props.header}</Text>
                        <Arrow expanded={index === this.state.index} />
                    </AccordionHeader>
                    <div style={{ ...style, height: this.getHeight(index) }}>
                        <AccordionContent>{child}</AccordionContent>
                    </div>
                </AccordionWrapper>
            )
        })
        return <>{nodes}</>
    }
}

Accordion.defaultProps = {
    transitionDuration: 200,
    transitionTimingFunction: 'ease',
    openClassName: 'open',
    changeOnClick: true,
}

const AccordionItem = ({ text, children }) => {
    return <div header={text}>{children}</div>
}

export { Accordion, AccordionItem }
