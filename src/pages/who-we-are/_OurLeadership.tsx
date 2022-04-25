import React from 'react'
import styled from 'styled-components'
import Leaders from './components/leaders'
import { localize } from 'components/localization'
import { SectionContainer, CssGrid } from 'components/containers'
import { Header } from 'components/elements'
import device from 'themes/device'

const StyledSectionContainer = styled(SectionContainer)`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
    padding: 0 16px;
`

const StyledCssGrid = styled(CssGrid)`
    max-width: 996px;
    @media (max-width: 1100px) {
        max-width: 90%;
        padding: 0 40px;
    }
    @media ${device.tablet} {
        max-width: unset;
        padding: 0;
    }
    @media (max-width: 359px) {
        grid-template-columns: repeat(3, 88px);
        grid-column-gap: 12px;
        grid-row-gap: 4px;
    }
`
const StyledHeader = styled(Header)`
    padding-bottom: 40px;
    @media ${device.laptop} {
        font-size: 28px;
    }
    @media ${device.tablet} {
        padding-bottom: 24px;
    }
`

const OurLeadership = () => {
    return (
        <StyledSectionContainer padding="0 16px 120px" background="var(--color-white)">
            <StyledHeader as="h2" size="48px" align="center" type="page-title">
                {localize('Our leadership')}
            </StyledHeader>
            <StyledCssGrid
                height="unset"
                columns="repeat(auto-fill, 120px)"
                column_gap="99px"
                row_gap="60px"
                laptop_columns="repeat(auto-fill, 120px)"
                tablet_columns="repeat(3, 120px)"
                tablet_column_gap="99px"
                tablet_row_gap="60px"
                mobile_columns="repeat(3, 88px)"
                mobile_column_gap="24px"
                mobile_row_gap="6px"
            >
                <Leaders />
            </StyledCssGrid>
        </StyledSectionContainer>
    )
}
export default OurLeadership
