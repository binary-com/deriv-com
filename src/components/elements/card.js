import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const CardWrapper = styled.article`
    width: 328px;
    min-height: 356px;
    box-sizing: border-box;
    border-radius: 4px;
    box-shadow: 0 16px 20px 0 rgba(0, 0, 0, 0.1);
    background-color: var(--color-white);
    padding: 4rem 5.6rem 4.6rem 5.6rem;
    position: relative;
    margin: 0 1rem;
    ${props => props.firstCard && 'margin: 0 1rem 0 0'};
    ${props => props.lastCard && 'margin: 0 0 0 1rem'};

    div {
        max-width: 216px;
        bottom: 4.6rem;
        margin-top: 4rem;

        p {
            font-size: 16px;
            line-height: 24px;
            margin-top: 8px;
        }
        span {
            font-size: 24px;
            line-height: 30px;
            font-weight: 500;
        }
    }
    @media (max-width: 768px) {
        margin: 1rem;
    }
`
// firstCard and lastCard are managing margins for first and last card
const Card = ({ Icon, title, content, firstCard, lastCard }) => {
    return (
        <CardWrapper firstCard={firstCard} lastCard={lastCard}>
            <Icon />
            <div>
                <span>{title}</span>
                <p>{content}</p>
            </div>
        </CardWrapper>
    )
}

Card.propTypes = {
    content: PropTypes.string,
    firstCard: PropTypes.bool,
    Icon: PropTypes.func,
    lastCard: PropTypes.bool,
    title: PropTypes.string,
}

export default Card
