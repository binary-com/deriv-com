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

const CardWrapper = styled.article`
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
    @media ${device.sm} {
        margin: 1rem;
    }
`

const CardChildrenWrapper = styled.article`
    ${CardStyle}
    width: ${props => (props.width ? props.width : '50.2rem')};
    min-height: 41.7rem;
    padding: 4rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    ${Header} {
        text-align: center;
    }
    p {
        font-size: 2rem;

        a {
            color: var(--color-red);
            text-decoration: none;

            &:hover {
                text-decoration: underline;
            }
        }
    }
    svg {
        margin: 2.5rem 0;
    }
`

export const Card = ({ Icon, title, content, width }) => {
    return (
        <CardWrapper width={width}>
            <Icon />
            <div>
                <Header as="h4" weight="500">
                    {title}
                </Header>
                <Text className="content">{content}</Text>
            </div>
        </CardWrapper>
    )
}

export const CardChildren = ({
    Icon,
    title,
    width,
    children,
    icon_width,
    icon_height,
}) => (
    <CardChildrenWrapper width={width}>
        <Header as="h3">{title}</Header>
        <Icon width={icon_width} height={icon_height} />
        {children}
    </CardChildrenWrapper>
)

Card.propTypes = {
    content: PropTypes.string,
    Icon: PropTypes.func,
    title: PropTypes.string,
    width: PropTypes.string,
}

CardChildren.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),
    Icon: PropTypes.func,
    icon_height: PropTypes.string,
    icon_width: PropTypes.string,
    title: PropTypes.string,
    width: PropTypes.string,
}
