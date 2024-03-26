import React from 'react'
import styled from 'styled-components'
import { Localize } from 'components/localization'
import { Header } from 'components/elements'
import device from 'themes/device'
import { TString } from 'types/generics'

const StyledWrapper = styled.div<{ sized?: boolean }>`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    inline-size: ${({ sized }) => (sized ? '100%' : '50%')};

    @media ${device.tabletL} {
        inline-size: ${({ sized }) => (sized ? '100%' : '95%')};
    }
`
const AffiliateHeader = styled(Header)`
    inline-size: fit-content;
    z-index: 1;
    padding-inline-end: 8px;
    text-align: left;
    background-color: var(--color-white);
`
const CenteredDivider = styled.div`
    border-bottom: 1px solid var(--color-grey-8);
    inline-size: 100%;
    block-size: 1px;
    margin-block-start: -18px;
`
export const InputGroup = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    inline-size: 100%;
    block-size: 100%;

    p {
        min-height: 30px !important;
    }
`
export const InputWrapper = styled.ul`
    inline-size: 50%;
    line-height: 10px;
    margin-bottom: 80px;

    @media ${device.tabletL} {
        inline-size: 95%;
        margin-bottom: 0;
    }
`

export const StyledHeader = styled(Header)<{ is_rtl?: boolean }>`
    @media ${device.tabletL} {
        text-align: ${({ is_rtl }) => (is_rtl ? 'right' : 'left')};
        inline-size: 328px;
        margin: 0 auto;
    }
`

const AffiliatesHeader = ({ text, sized }: { text: TString; sized?: boolean }) => {
    return (
        <StyledWrapper sized={sized}>
            <AffiliateHeader as="h4" align="center" type="paragraph-1" pb="8px">
                <Localize translate_text={text} />
            </AffiliateHeader>
            <CenteredDivider />
        </StyledWrapper>
    )
}

export default AffiliatesHeader
