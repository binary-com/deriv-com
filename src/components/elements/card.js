import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { Text, Header } from './typography.js'
import device from 'themes/device'

const CardStyle = css`
    min-height: 35.6rem;
    box-sizing: border-box;
    border-radius: 4px;
    box-shadow: 0 16px 20px 0 rgba(0, 0, 0, 0.1);
    background-color: var(--color-white);
`

const IconContainer = styled.div`
    margin: 2.5rem 0;
    height: 16rem;
    width: 24rem;
    display: flex;
    justify-content: center;
    align-items: center;
`

const CardTypeOneWrapper = styled.article`
    ${CardStyle}
    width: ${props => (props.width ? props.width : '32.8rem')};
    padding: 4rem 5.6rem 4.6rem 5.6rem;
    margin: 0 1rem;

    div {
        margin-top: 4rem;

        .content {
            margin-top: 0.8rem;
        }
    }
    @media ${device.tablet} {
        margin: 1rem;
    }
`

const CardTypeTwoWrapper = styled.article`
    ${CardStyle}
    width: ${props => (props.width ? props.width : '50.2rem')};
    min-height: 41.7rem;
    padding: 4rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
        font-size: 2rem;

        a {
            color: var(--color-red);
            text-decoration: none;
        }
    }
`

export const CardTypeOne = ({ Icon, title, content, width }) => {
    return (
        <CardTypeOneWrapper width={width}>
            <Icon />
            <div>
                <Header as="h4" weight="500">
                    {title}
                </Header>
                <Text className="content">{content}</Text>
            </div>
        </CardTypeOneWrapper>
    )
}

export const CardTypeTwo = ({ Icon, title, width, children }) => (
    <CardTypeTwoWrapper width={width}>
        <Header as="h3" align="center">
            {title}
        </Header>
        <IconContainer>{Icon}</IconContainer>
        {children}
    </CardTypeTwoWrapper>
)

CardTypeOne.propTypes = {
    content: PropTypes.string,
    Icon: PropTypes.func,
    title: PropTypes.string,
    width: PropTypes.string,
}

CardTypeTwo.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),
    Icon: PropTypes.object,
    title: PropTypes.string,
    width: PropTypes.string,
}
