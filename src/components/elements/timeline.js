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
        background-color: ${(props) => (props.color ? props.color : 'var(--color-white)')};
        left: 11px;
        top: 6px;
    }
    &::after {
        content: '';
        position: absolute;
        width: 4px;
        height: 2px;
        background-color: ${(props) => (props.color ? props.color : 'var(--color-white)')};
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
    background-color: ${(props) => (props.color ? props.color : 'var(--color-red)')};
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
    padding-bottom: ${(props) => (props.pb ? props.pb : '4rem')};
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

export const TimelineTick = ({ pb, color, children, ...props }) => {
    return (
        <div {...props}>
            {children.map((child, idx) => (
                <React.Fragment key={idx}>
                    {child && (
                        <FlexWrapper is_border={false} pb={pb}>
                            <OvalWrapper color="transparent">
                                <Checkmark color={color}></Checkmark>
                            </OvalWrapper>
                            <ContentWrapper>{child}</ContentWrapper>
                        </FlexWrapper>
                    )}
                </React.Fragment>
            ))}
        </div>
    )
}

const Item = ({ children, ...props }) => <div {...props}>{children}</div>
Timeline.Item = Item
TimelineTick.Item = Item

Timeline.propTypes = {
    children: PropTypes.node,
    props: PropTypes.any,
}

TimelineTick.propTypes = {
    children: PropTypes.node,
    color: PropTypes.string,
    pb: PropTypes.string,
    props: PropTypes.any,
}

Item.propTypes = {
    children: PropTypes.node,
    props: PropTypes.any,
}

export default Timeline
