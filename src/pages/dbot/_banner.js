import React from 'react'
import styled from 'styled-components'
import { FlexGridContainer } from 'components/containers/container'
import { Text, Header } from 'components/elements/typography'
import { localize } from 'components/localization'

const BackgroundContainer = styled.section`
    background: var(--color-white);
`

const StyledContainer = styled(FlexGridContainer)`
    padding: 4.3rem 0;
`

const BannerItem = styled.article`
    width: 32.8rem;
    display: flex;
    flex-direction: column;
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
                <Text align="center">
                    {localize('Pre-built strategies included')}
                </Text>
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
                <Text align="center">
                    {localize('markets to unleash your bot')}
                </Text>
            </BannerItem>
        </StyledContainer>
    </BackgroundContainer>
)

export default BannerSection
