import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Text, Header } from 'components/elements'
import Checklist from 'images/svg/trade-types/checklist-red.svg'
import device from 'themes/device'

const StyledItem = styled.div`
    display: flex;
    border-left: var(--color-red) dashed 1px;
    position: relative;
    padding-bottom: 4rem;

    &:last-child {
        border-left: unset;
        padding-bottom: 0;
    }
    @media ${device.tabletL} {
        margin-left: 2rem;
    }
`
const Container = styled.div`
    margin-left: 40px;
`
const Oval = styled.img`
    position: absolute;
    left: -10px;
`
const Timeline = ({ children, ...props }) => {
    return (
        <div {...props}>
            {children.map((child, idx) => (
                <StyledItem key={idx}>
                    <Oval src={Checklist} alt="checklist" />
                    <Container>
                        <Header mb="0.8rem" mt="-5px" as="h4" size="2.4rem">
                            {child.props.title}
                        </Header>
                        <Text>{child}</Text>
                    </Container>
                </StyledItem>
            ))}
        </div>
    )
}
const Item = ({ children, ...props }) => <span {...props}>{children}</span>

Timeline.Item = Item

Item.propTypes = {
    children: PropTypes.node,
}
Timeline.propTypes = {
    children: PropTypes.node,
}

export default Timeline
