import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Input } from 'components/form'
import { Flex } from 'components/containers'
import { Text } from 'components/elements'
import CrossIcon from 'images/svg/cross.svg'

const CrossIconStyled = styled(CrossIcon)`
    height: 16px;
    width: 16px;

    g {
        g {
            g {
                fill: var(--color-black);
            }
        }
    }
`

const BadgeContainer = styled.div`
    border-radius: 12px;
    background-color: var(--color-grey-17);
    padding: 3px 8px;
    display: flex;
    align-items: center;

    svg {
        margin-left: 8px;
    }
    &:hover {
        cursor: pointer;
    }
`
const BadgeWrapper = styled(Flex)`
    > *:not(:last-child) {
        margin-right: 0.8rem;
    }
`

const Badge = ({ text, onClick }) => {
    return (
        <BadgeContainer onClick={onClick}>
            <Text>{text}</Text>
            <CrossIconStyled />
        </BadgeContainer>
    )
}
Badge.propTypes = {
    onClick: PropTypes.func,
    text: PropTypes.string,
}

const SearchForm = () => {
    return (
        <div style={{ marginBottom: '5.4rem' }}>
            <Input />
            <BadgeWrapper jc="unset">
                {/* <Badge text={'Full-time'} />
                <Badge text={'Accounts and Payments'} />
                <Badge text={'Cyberjaya, Malaysia'} /> */}
            </BadgeWrapper>
        </div>
    )
}

export default SearchForm
