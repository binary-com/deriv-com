import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Text, Header } from './typography.js'
import device from 'themes/device'

const CardWrapper = styled.article`
    padding: 1rem;

    * {
        max-width: 100%;
    }
    div {
        margin-top: 2.4rem;
    }
    @media ${device.tabletS} {
        text-align: center;
    }
`

const GridCard = ({ Icon, title, content }) => {
    return (
        <CardWrapper>
            <Icon />
            <div>
                <Header as="h4" weight="500" lh="2.2">
                    {title}
                </Header>
                <Text color="black-3" lh="1.55">{content}</Text>
            </div>
        </CardWrapper>
    )
}

GridCard.propTypes = {
    content: PropTypes.string,
    Icon: PropTypes.func,
    title: PropTypes.string,
}

export default GridCard
