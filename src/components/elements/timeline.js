import React from 'react'
import styled from 'styled-components'
import { PropTypes } from 'prop-types'

const Checkmark = styled.span`
    display: inline-block;
    width: 22px;
    height: 22px;
    transform: rotate(45deg);

    &::before {
        content: '';
        position: absolute;
        width: 2px;
        height: 9px;
        background-color: white;
        left: 11px;
        top: 6px;
    }
    &::after {
        content: '';
        position: absolute;
        width: 4px;
        height: 2px;
        background-color: white;
        left: 8px;
        top: 13px;
    }
`

const ContentWrapper = styled.div`
    margin-top: 0;
    margin-left: 2rem;
`
const OvalWrapper = styled.div`
    width: 24px;
    height: 24px;
    line-height: 2.75rem;
    background-color: var(--color-red);
    border-radius: 50%;
    text-align: center;
    margin-right: 0.8rem;
    position: absolute;
    padding-left: 1px;
    left: -13px;
`

const FlexWrapper = styled.div`
    display: flex;
    border-left: ${(props) => (props.is_border ? 'var(--color-red) dashed 1px' : 'unset')};
    position: relative;
    padding-bottom: 4rem;
`
const Oval = () => {
    return (
        <OvalWrapper>
            <Checkmark />
        </OvalWrapper>
    )
}

Oval.propTypes = {
    children: PropTypes.number,
}

const Timeline = ({ children, ...props }) => {
    return (
        <div {...props}>
            {children.map((child, idx) => (
                <FlexWrapper key={idx} is_border={children.length !== idx + 1}>
                    <Oval></Oval>
                    <ContentWrapper>
                        <div>{child}</div>
                    </ContentWrapper>
                </FlexWrapper>
            ))}
        </div>
    )
}

const Item = ({ children, ...props }) => <div {...props}>{children}</div>
Timeline.Item = Item

Timeline.propTypes = {
    children: PropTypes.node,
    props: PropTypes.any,
}

Item.propTypes = {
    children: {},
    props: PropTypes.any,
}

export default Timeline
