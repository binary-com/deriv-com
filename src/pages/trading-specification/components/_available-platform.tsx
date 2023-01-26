import React from 'react'
import styled from 'styled-components'
import useRegion from 'components/hooks/use-region'
import SearchIcon from 'images/svg/help/search.svg'
import { Flex } from 'components/containers'
import DerivMT5 from 'images/svg/trading-specification/deriv-mt5.svg'
import DerivX from 'images/svg/trading-specification/deriv-x.svg'
import { localize, Localize, LocalizedLink } from 'components/localization'
import device from 'themes/device'
import { Header } from 'components/elements'

const PlatformsContainer = styled(Flex)`
    justify-content: space-around;
    width: unset;
    gap: 12px;

    a {
        text-decoration: none;
        margin-right: 0.8rem;
    }
    img {
        width: 24px;
        height: 24px;
        margin: 0 0.3rem;
    }
    a:last-child {
        margin-right: 0;
        min-width: 95px;
    }
    @media ${device.tablet} {
        width: ${(props) => props.width};
    }
`
const StyledLocalizedLink = styled(LocalizedLink)`
    width: 108px;
`
const StyledFlex = styled(Flex)`
    padding: 20px;
`
const SearchForm = styled.form`
    position: relative;
    align-items: center;
    padding: 6px 8px;
    gap: 8px;
    width: 464px;
    height: 32px;
    border: 1px solid #d6dadb;
    border-radius: 12px;
`
const StyledSearchIcon = styled.img`
    width: 16px;
    height: 16px;
`
const SearchInput = styled.input`
    color: var(--color-black);
    background-color: var(--color-white);
    border: none;
    outline: none;
    padding: 0 14px;

    ::placeholder {
        color: var(--color-grey-17);
    }
`
const AvailablePlatform = () => {
    const { is_row } = useRegion()
    return (
        <>
            <StyledFlex wrap="nowrap" ai="center">
                <PlatformsContainer ai="center">
                    <Header type="paragraph-1" weight="normal" width="auto">
                        <Localize translate_text="Available on" />
                    </Header>
                    {is_row && (
                        <StyledLocalizedLink to="/dmt5/">
                            <Flex direction="row">
                                <img src={DerivMT5} alt="Deriv X" width="24" height="24" />
                                <Header type="paragraph-1" weight="normal">
                                    <Localize translate_text="Deriv MT5" />
                                </Header>
                            </Flex>
                        </StyledLocalizedLink>
                    )}
                    <StyledLocalizedLink to="/derivx/">
                        <Flex direction="row">
                            <img src={DerivX} alt="Deriv X" width="24" height="24" />
                            <Header type="paragraph-1" weight="normal">
                                <Localize translate_text="Deriv X" />
                            </Header>
                        </Flex>
                    </StyledLocalizedLink>
                </PlatformsContainer>
            </StyledFlex>
            <StyledFlex>
                {/*<SearchForm>
                    <StyledSearchIcon src={SearchIcon} alt="search-icon" />
                    <SearchInput
                        autoFocus
                        placeholder={localize('Find Instrument')}
                        data-lpignore="true"
                        autoComplete="off"
                    />
                </SearchForm>*/}
            </StyledFlex>
        </>
    )
}

export default AvailablePlatform
