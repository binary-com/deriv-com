import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { localize } from '../../../components/localization'
import { Input } from 'components/form'
import SearchIcon from 'images/svg/search.svg'

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
        </>
    )
}
SearchForm.propTypes = {
    setSearch: PropTypes.func,
}

export default SearchForm
