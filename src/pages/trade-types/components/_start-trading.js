import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Header } from 'components/elements'

const Item = styled.div`
    display: flex;
    border-left: var(--color-red) dash 1px;
    position: relative;
`
const Container = styled.div`
    margin-top: 6px;
    margin-left: 20px;
`
const Content = styled.div`
    margin: 16px 0;
`
const Oval = styled.div`
    width: 24px;
    height: 24px;
    line-height: 24px;
    background-color: var(--brand-red-coral);
    border-radius: 50%;
    text-align: center;
    margin-right: 8px;
    position: absolute;
    left: -12px;
`

const StartTrading = ({ children, ...props }) => {
    return (
        <div {...props}>
            {children.map((child, idx) => (
                <Item key={idx}>
                    <Oval />
                    <Container>
                        <Header>{child.props.title}</Header>
                        <Content>{child}</Content>
                    </Container>
                </Item>
            ))}
        </div>
    )
}

StartTrading.propTypes = {
    children: PropTypes.node,
}

export default StartTrading
