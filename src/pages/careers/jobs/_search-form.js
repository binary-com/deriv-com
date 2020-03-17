import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import device from 'themes/device'
import { Input } from 'components/form'
import SearchIcon from 'images/svg/search.svg'

const StyledForm = styled.form`
    position: relative;

    input {
        &::placeholder {
            opacity: 1 !important;
        }
    }

    @media ${device.tabletL} {
        margin-top: 4.6rem;

        .input-wrapper {
            width: 100% !important;
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

const SearchForm = React.memo(({ search, setSearch }) => {
    return (
        <>
            <StyledForm onSubmit={e => e.preventDefault()}>
                <StyledSearchIcon />
                <Input
                    style={{ marginLeft: '4rem' }}
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    placeholder={'Search jobs'}
                    autoFocus
                />
            </StyledForm>
        </>
    )
})

SearchForm.displayName = 'SearchForm'

SearchForm.propTypes = {
    search: PropTypes.string,
    setSearch: PropTypes.func,
}

export default SearchForm
