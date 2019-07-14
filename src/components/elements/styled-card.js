import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Text, Header } from './typography.js'
import device from 'themes/device'

const CardWrapper = styled.article`
    box-sizing: border-box;
    border-radius: 6px;
    box-shadow: 0 16px 20px 0 rgba(0, 0, 0, 0.1);
    background-color: var(--color-white);
    padding: 4.8rem 5.6rem 2.2rem;

    * {
        max-width: 100%;
    }
    .card-title {
        margin-top: 2.4rem;
        margin-bottom: 1rem;
    }
    @media ${device.sm} {
        text-align: center;
    }
`

const StyledCard = ({ Icon, title, content_1, content_2, content_3 }) => {
    return (
        <CardWrapper>
            <Icon />
            <div className='card-title'>
                <Header as="h4" weight="500">
                    {title}
                </Header>
            </div>
            <div className='card-content'>
                <Text color="black-3" lh="1.55">{content_1}</Text>
                <Text color="black-3" lh="1.55">{content_2}</Text>
                <Text color="black-3" lh="1.55">{content_3}</Text>
            </div>
        </CardWrapper>
    )
}

StyledCard.propTypes = {
    content_1: PropTypes.string,
    content_2: PropTypes.string,
    content_3: PropTypes.string,
    Icon: PropTypes.func,
    title: PropTypes.string,
}

export default StyledCard