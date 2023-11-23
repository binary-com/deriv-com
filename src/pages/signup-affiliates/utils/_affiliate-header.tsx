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
const StyledHeader = styled(Header)`
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
export const InputWrapper = styled.div`
    inline-size: 50%;
    line-height: 10px;
    margin-bottom: 80px;

    @media ${device.tabletL} {
        inline-size: 95%;
        margin-bottom: 0;
    }
`

const AffiliatesHeader = ({
    translate_text,
    sized,
}: {
    translate_text: TString
    sized?: boolean
}) => {
    return (
        <StyledWrapper sized={sized}>
            <StyledHeader as={'h3'} align="center" type="paragraph-1" pb="8px">
                <Localize translate_text={translate_text} />
            </StyledHeader>
            <CenteredDivider />
        </StyledWrapper>
    )
}

export default AffiliatesHeader
