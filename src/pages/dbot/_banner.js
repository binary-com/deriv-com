import React from 'react'
import styled from 'styled-components'
import { FlexGridContainer } from 'components/containers'
import { Text, Header } from 'components/elements'
import { localize } from 'components/localization'
import device from 'themes/device'

const BackgroundContainer = styled.section`
    background: var(--color-white);

    @media ${device.tabletL} {
        margin: 4rem 0;
    }
`

const StyledContainer = styled(FlexGridContainer)`
    padding: 4.3rem 0;
`

const BannerItem = styled.article`
    width: 32.8rem;
    display: flex;
    flex-direction: column;
    padding: 1.4rem;

    @media ${device.tabletS} {
        width: 100%;
    }
`

const StyledHeader = styled(Header)`
    margin-bottom: 0.8rem;
`

const BannerSection = () => (
    <BackgroundContainer>
        <StyledContainer gap="0">
            <BannerItem>
                <StyledHeader as="h2" align="center">
                    {localize('5')}
                </StyledHeader>
                <Text align="center">{localize('Pre-built strategies included')}</Text>
            </BannerItem>
            <BannerItem>
                <StyledHeader as="h2" align="center">
                    {localize('FREE')}
                </StyledHeader>
                <Text align="center">{localize('zero cost to build')}</Text>
            </BannerItem>
            <BannerItem>
                <StyledHeader as="h2" align="center">
                    {localize('50+')}
                </StyledHeader>
                <Text align="center">{localize('markets to unleash your bot')}</Text>
            </BannerItem>
        </StyledContainer>
    </BackgroundContainer>
)

export default BannerSection
