import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { localize } from '../../../components/localization'
import { Input } from 'components/form'
import { Flex } from 'components/containers'
import { Text } from 'components/elements'
import CrossIcon from 'images/svg/cross.svg'
import SearchIcon from 'images/svg/search.svg'

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
    background-color: var(--color-grey-11);
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
    margin-bottom: 5.4rem;

    > *:not(:last-child) {
        margin-right: 0.8rem;
    }
`

const Badge = ({ text, onClick }) => {
    return (
        <BadgeContainer onClick={onClick}>
            <Text size="var(--text-size-xxs)">{text}</Text>
            <CrossIconStyled />
        </BadgeContainer>
    )
}
Badge.propTypes = {
    onClick: PropTypes.func,
    text: PropTypes.string,
}

const StyledForm = styled.form`
    position: relative;

    input {
        &::placeholder {
            opacity: 1 !important;
        }
    }
`
const StyledSearchIcon = styled(SearchIcon)`
    position: absolute;
    left: 1.6rem;
    top: 1.2rem;
    height: 16px;
    width: 16px;

    path {
        fill: var(--color-black);
    }
`

const SearchForm = ({ setSearch }) => {
    return (
        <>
            <StyledForm onSubmit={e => e.preventDefault()}>
                <StyledSearchIcon />
                <Input
                    style={{ marginLeft: '4rem' }}
                    onChange={e => setSearch(e.target.value)}
                    placeholder={localize('Accounts')}
                    autoFocus
                />
            </StyledForm>
            <BadgeWrapper jc="unset">
                <Badge text={'Full-time'} />
                <Badge text={'Accounts and Payments'} />
                <Badge text={'Cyberjaya, Malaysia'} />
            </BadgeWrapper>
        </>
    )
}
SearchForm.propTypes = {
    setSearch: PropTypes.func,
}

export default SearchForm
