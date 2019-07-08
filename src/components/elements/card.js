import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {Text, Header} from './topography.js'
import device from 'themes/device'

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

    div {
        max-width: 216px;
        bottom: 4.6rem;
        margin-top: 4rem;

        .content {
            margin-top: 8px;
        }
    }
    @media ${device.tablet} {
        margin: 1rem;
    }
`

const Card = ({ Icon, title, content }) => {
    return (
        <CardWrapper>
            <Icon />
            <div>
                <Header as='h4' weight='500'>{title}</Header>
                <Text className='content'>{content}</Text>
            </div>
        </CardWrapper>
    )
}

Card.propTypes = {
    content: PropTypes.string,
    Icon: PropTypes.func,
    title: PropTypes.string,
}

export default Card
