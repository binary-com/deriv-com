import React, { ReactNode } from 'react'
import styled from 'styled-components'

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

const FlexWrapper = styled.div<TimelineTickProps>`
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

type TimelineTickProps = {
    pb?: string
    is_border?: boolean
    color?: string
    children?: ReactNode[]
}

type TimelineProps = Pick<TimelineTickProps, 'pb' | 'children'>

type ItemProps = Pick<TimelineTickProps, 'children'>

const Timeline = ({ pb, children, ...props }: TimelineProps) => {
    return (
        <div {...props}>
            {children.map((child, idx) => (
                <FlexWrapper key={idx} is_border={children.length !== idx + 1} pb={pb}>
                    <Oval></Oval>
                    <ContentWrapper>
                        <div>{child}</div>
                    </ContentWrapper>
                </FlexWrapper>
            ))}
        </div>
    )
}

export const TimelineTick = ({ pb, color, children, ...props }: TimelineTickProps) => {
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

const Item = ({ children, ...props }: ItemProps) => <div {...props}>{children}</div>
Timeline.Item = Item
TimelineTick.Item = Item

export default Timeline
